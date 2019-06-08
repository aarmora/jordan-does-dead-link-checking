import * as requestPromise from 'request-promise';
import * as cheerio from 'cheerio';

interface ILinkObject {
    link: string;
    status: number | null;
    locationOfLink: string;
}

export async function findDeadLinks(domain: string) {
    let html: any;
    try {
        const options = {
            method: 'GET',
            resolveWithFullResponse: true
        };
        const response: any = await requestPromise.get(`${domain}`, options);
        html = response.body;
    }
    catch (e) {
        console.log('Error trying to request the domain', e.statusCode);
        throw `Error requesting base domain - ${domain}, ${e.statusCode}`;
    }
    let links: ILinkObject[] = await getLinks(html, domain, domain);

    for (let i = 0; i < links.length; i++) {
        if (!links[i].status) {
            const checkLinkResponse = await checkLink(links[i], links, domain);
            links[i] = checkLinkResponse.link;
            links = checkLinkResponse.links;

            console.log('after link is checked link', links[i], i);
        }
    }

    console.log('links', links.length);
    console.log('bad links', links.filter(link => link.status && link.status > 399));

}

async function checkLink(linkObject: ILinkObject, links: ILinkObject[], domain: string) {
    let html: any;
    let newDomain: any;
    try {
        const options: requestPromise.RequestPromiseOptions = {
            method: 'GET',
            resolveWithFullResponse: true,
            timeout: 10000
        };
        const response: any = await requestPromise.get(linkObject.link, options);
        newDomain = `${response.request.uri.protocol}//${response.request.uri.host}`;
        linkObject.status = response.statusCode;
        html = response.body;
    }
    catch (e) {
        if (e.statusCode) {
            console.log(`Error trying to request url ${linkObject.link}`, e.statusCode);
            linkObject.status = e.statusCode;
        }
        else {
            console.log(`Error trying to request url ${linkObject.link}`, e);
            // Some other error happened so let's give it a 999
            linkObject.status = 999;
        }
    }

    // Let's not get further links if we are on someone else's domain
    if (newDomain) {
        if (html && domainCheck(linkObject.link, domain, newDomain)) {
            links = await getLinks(html, domain, linkObject.link, false, links);
        }
    }

    return Promise.resolve({
        link: linkObject,
        links: links
    });

}

async function getLinks(html: any, domain: string, currentUrl: string, deep: boolean = false, links: ILinkObject[] = []) {
    const $ = cheerio.load(html);

    $('a').each((index, element) => {
        let link = $(element).attr('href');
        if (link && (!link.includes('javascript:') && !link.includes('tel:') && !link.includes('mailto:'))) {
            // Sometimes the first character of the link isn't the domain and has a slash. Let's clean it up
            link = link.charAt(0) === '/' ? link.slice(1) : link;

            let linkToPush = link.includes('http') ? link : `${domain}/${link}`;
            // If we're doing a deep check, we'll check the same urls with just different query params
            linkToPush = deep ? linkToPush : linkToPush.split('?')[0];
            if (links.filter(linkObject => linkObject.link === linkToPush).length < 1) {
                // console.log('adding new link', linkToPush, link)
                links.push({
                    link: linkToPush,
                    status: null,
                    locationOfLink: currentUrl
                });
            }
        }
    });

    console.log('current links length ***************', links.length);
    return links;

}

function domainCheck(link: string, domain: string, newDomain:string) {
    link = link.replace('www.', '');
    domain = domain.replace('www.', '');
    newDomain = newDomain.replace('www.', '');

    // console.log('in domain checker **************', link, domain, newDomain);

    return link.includes(domain) && newDomain.includes(domain);
}
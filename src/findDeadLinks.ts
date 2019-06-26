import * as requestPromise from 'request-promise';
import * as cheerio from 'cheerio';

export interface ILinkObject {
    link: string;
    status: number | null;
    locationOfLink: string;
}

export async function findDeadLinks(domain: string, desiredIOThreads: number) {
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
    const promises: any[] = [];

    for (let i = 0; i < links.length; i++) {
        if (!links[i].status) {
            promises.push(checkLink(links[i], links, domain, desiredIOThreads));
        }
    }

    await Promise.all(promises);

    console.log('Total links', links.length);
    console.log('Potentially bad links', links.filter(link => link.status && link.status > 399));
    return links.filter(link => link.status && link.status > 399);

}

export async function checkLink(linkObject: ILinkObject, links: ILinkObject[], domain: string, desiredIOThreads: number) {
    let html: any;
    let newDomain: any;
    let newLinks: ILinkObject[] = [];
    try {
        const options: requestPromise.RequestPromiseOptions = {
            method: 'GET',
            resolveWithFullResponse: true,
            timeout: 10000,
            agentOptions: {
                maxSockets: desiredIOThreads
            },
            headers: { 'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36 "}
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
    console.log(`Link checked. Link: ${linkObject.link} Status: ${linkObject.status}`);
    // Let's not get further links if we are on someone else's domain    
    if (newDomain) {
        if (html && domainCheck(linkObject.link, domain, newDomain)) {
            newLinks = await getLinks(html, domain, linkObject.link, false);
        }
    }

    // Replace the link we were checking with the completed object
    let linkToReplaceIndex = links.findIndex(linkObject => linkObject.link === linkObject.link);
    links[linkToReplaceIndex] = linkObject;
    const promises: any[] = [];

    for (let linkToCheck of newLinks) {
        if (links.filter(linkObject => linkObject.link === linkToCheck.link).length < 1) {
            links.push(linkToCheck);

            promises.push(checkLink(linkToCheck, links, domain, desiredIOThreads));
        }
    }

    await Promise.all(promises);

    return Promise.resolve({ link: linkObject, links: links });

}

export async function getLinks(html: any, domain: string, currentUrl: string, deep: boolean = false) {
    const $ = cheerio.load(html);
    const links: ILinkObject[] = [];

    $('a').each((index, element) => {
        let link = $(element).attr('href');
        if (link && (!link.includes('javascript:') && !link.includes('tel:') && !link.includes('mailto:'))) {
            // Sometimes the first character of the link isn't the domain and has a slash. Let's clean it up
            link = link.charAt(0) === '/' ? link.slice(1) : link;

            let linkToPush = link.includes('http') ? link : `${domain}/${link}`;
            // If we're doing a deep check, we'll check the same urls with just different query params
            linkToPush = deep ? linkToPush : linkToPush.split('?')[0];

            // We're going to skip #comment and #respond since it's not really a link
            if (!linkToPush.includes('#comment') && !linkToPush.includes('#respond') && links.filter(linkObject => linkObject.link === linkToPush).length < 1) {
                links.push({
                    link: linkToPush,
                    status: null,
                    locationOfLink: currentUrl
                });
            }
        }
    });

    return links;

}

export function domainCheck(link: string, domain: string, newDomain: string) {

    link = link.replace('www.', '');
    domain = domain.replace('www.', '');
    newDomain = newDomain.replace('www.', '');

    return link.includes(domain) && newDomain.includes(domain);
}
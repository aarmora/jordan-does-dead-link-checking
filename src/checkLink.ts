import * as requestPromise from 'request-promise';
import { domainCheck, ILinkObject, getLinks } from './helpers';
import * as checkLinkFunction from './checkLink';

export async function checkLink(linkObject: ILinkObject, links: ILinkObject[], domain: string, desiredIOThreads: number) {
    let html: any;
    let newDomain: any;
    let newLinks: ILinkObject[] = [];
    try {
        const options: requestPromise.RequestPromiseOptions = {
            method: 'GET',
            resolveWithFullResponse: true,
            timeout: 10000,
            time: true,
            agentOptions: {
                maxSockets: desiredIOThreads
            },
            headers: { 'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36 " }
        };
        console.log('before', linkObject.link, new Date().getSeconds());
        const response: any = await requestPromise.get(linkObject.link, options);
        console.log('after elapsed time****', linkObject.link, response.elapsedTime, new Date().getSeconds());
        newDomain = `${response.request.uri.protocol}//${response.request.uri.host}`;
        linkObject.status = response.statusCode;
        html = response.body;
    }
    catch (e) {
        if (e.statusCode) {
            console.log(`Error trying to request url ${linkObject.link}`, e.statusCode, e.elapsedTime);
            linkObject.status = e.statusCode;
        }
        else {
            console.log(`Error trying to request url ${linkObject.link}`, e, e.elapsedTime);

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

    const promises: any[] = [];

    for (let linkToCheck of newLinks) {
        if (links.filter(linkObject => linkObject.link === linkToCheck.link).length < 1) {
            links.push(linkToCheck);

            // Have to call the imported function so tests work: https://stackoverflow.com/a/51604652/2287595
            promises.push(checkLinkFunction.checkLink(linkToCheck, links, domain, desiredIOThreads));
        }
    }

    await Promise.all(promises);

    return Promise.resolve({ link: linkObject, links: links });

}

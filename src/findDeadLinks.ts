import * as requestPromise from 'request-promise';
import * as checkLinkFunction from './checkLink';
import { getLinks, ILinkObject } from './helpers';

export async function findDeadLinks(domain: string, desiredIOThreads: number, links: ILinkObject[]) {
    let html: any;
    console.log('hit findDeadLinks', desiredIOThreads);

    try {
        const options: requestPromise.RequestPromiseOptions = {
            method: 'GET',
            resolveWithFullResponse: true,
            timeout: 100000,
            agentOptions: {
                maxSockets: desiredIOThreads,
                keepAlive: false
            },
        };
        const response: any = await requestPromise.get(`${domain}`, options);
        html = response.body;
    }
    catch (e) {
        console.log('Error trying to request the domain', e.statusCode);
        throw `Error requesting base domain - ${domain}, ${e.statusCode}`;
    }
    const newLinks = await getLinks(html, domain, domain);
    for (let link of newLinks) {
        links.push(link);
    }
    const promises: any[] = [];

    for (let i = 0; i < links.length; i++) {
        if (!links[i].status) {
            promises.push(checkLinkFunction.checkLink(links[i], links, domain, desiredIOThreads));
        }
    }

    await Promise.all(promises);

    console.log('Total links', links.length);
    const badLinks = links.filter(link => link.status && link.status > 399);
    console.log('Potentially bad links', badLinks);

    return badLinks;

}
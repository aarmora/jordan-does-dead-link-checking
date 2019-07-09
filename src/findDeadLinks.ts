import * as requestPromise from 'request-promise';
import * as checkLinkFunction from './checkLink';
import { getLinks, ILinkObject } from './helpers';

export async function findDeadLinks(domain: string, desiredIOThreads: number) {
    let html: any;

    try {
        const options = {
            method: 'GET',
            resolveWithFullResponse: true,
            timeout: 10000
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
            promises.push(checkLinkFunction.checkLink(links[i], links, domain, desiredIOThreads));
        }
    }

    await Promise.all(promises);

    console.log('Total links', links.length);
    console.log('Potentially bad links', links.filter(link => link.status && link.status > 399));
    return links.filter(link => link.status && link.status > 399);

}
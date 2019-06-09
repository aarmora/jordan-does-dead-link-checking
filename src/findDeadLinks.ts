import * as requestPromise from 'request-promise';
import { spawn, Thread, Worker, Pool } from 'threads';
import { ILinkObject, getLinks, checkLink } from './checkLink';


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
    const checkLink = await spawn<(linkObject: ILinkObject, domain: string) => Promise<any>>(new Worker('./../../../../dist/checkLinkWorker.js'));

    for (let i = 0; i < links.length; i++) {
        if (!links[i].status) {
            const promises: any[] = [];

            promises.push(checkLink(links[i], domain));
            // promises.push(checkLink(links[i + 1], domain));
            // promises.push(checkLink(links[i + 2], domain));
            // promises.push(checkLink(links[i + 3], domain));


            const checkLinkResponses = await Promise.all(promises);

            for (let index = 0; index < checkLinkResponses.length; index++) {
                // Replace the link that doesn't have a status with the link that does
                // TODO: Will this always be in the same order?
                links[i + index] = checkLinkResponses[index].link;

                // This part needs to check for duplicate links
                // So we can't do it concurrently just in case we miss duplicates
                for (let linkToCheck of checkLinkResponses[index].links) {
                    if (links.filter(linkObject => linkObject.link === linkToCheck.link).length < 1) {
                        console.log('pushed in ', linkToCheck.link);
                        links.push(linkToCheck);
                    }
                }
            }
            // console.log('after link is checked link', links[i], i);
            console.log('current links length ***************', links.length);

            // console.log('check link responess', checkLinkResponses[0].links.length, checkLinkResponses[1].links.length);

            // i += 4
        }
    }

    console.log('links', links.length);
    console.log('bad links', links.filter(link => link.status && link.status > 399));

}
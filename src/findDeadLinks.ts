import * as requestPromise from 'request-promise';
import { spawn, Pool, Worker } from 'threads';
import { ILinkObject, getLinks } from './checkLink';


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

    const spawnLinkChecker = () => {
        return spawn(new Worker('./../../../../dist/checkLinkWorker.js'));
    }
    const pool = Pool(spawnLinkChecker, 10);
    for (let i = 0; i < links.length; i++) {
        if (!links[i].status) {
            pool.queue(linkChecker => linkChecker(links[i], domain));
        }
    }

    pool.events().subscribe((event) => {
        if (event.type === 'taskCompleted' && event.returnValue.links) {
            console.log('task completed', new Date());

            // Replace the link we were checking with the completed object
            let linkToReplaceIndex = links.findIndex(linkObject => linkObject.link === event.returnValue.link.link);
            links[linkToReplaceIndex] = event.returnValue.link;

            for (let linkToCheck of event.returnValue.links) {
                // We want to check if we've already checked this link
                if (links.filter(linkObject => linkObject.link === linkToCheck.link).length < 1) {
                    console.log('pushed in ', linkToCheck.link);
                    links.push(linkToCheck);

                    pool.queue(linkChecker => linkChecker(linkToCheck, domain));
                }
            }
        }
    });


    await pool.completed();

    await pool.terminate();

    console.log('links length', links.length);
    console.log('links with no status', links.filter(link => link.status === null).length);
    console.log('bad links', links.filter(link => link.status && link.status > 399));

}
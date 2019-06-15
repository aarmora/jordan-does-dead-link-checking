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
    // const checkLink = await spawn(new Worker('./../../../../dist/checkLinkWorker.js'));

    const spawnLinkChecker = () => {
        return spawn(new Worker('./../../../../dist/checkLinkWorker.js'));
    }
    const pool = Pool(spawnLinkChecker, 4);
    for (let i = 0; i < links.length; i++) {
        if (!links[i].status) {
            const promises: any[] = [];

            // const amountOfThreads = 20;
            // for (let linkToCheckIndex = 0; linkToCheckIndex < amountOfThreads; linkToCheckIndex++) {
            //     if (links[i + linkToCheckIndex]) {
            //         promises.push(checkLink(links[i + linkToCheckIndex], domain));
            //     }
            // }


            pool.queue(linkChecker => linkChecker(links[i], domain));

            // const checkLinkResponses = await Promise.all(promises);

            // for (let index = 0; index < checkLinkResponses.length; index++) {
            //     // Replace the link that doesn't have a status with the link that does
            //     let linkToReplaceIndex = links.findIndex(linkObject => linkObject.link === checkLinkResponses[index].link.link);
            //     links[linkToReplaceIndex] = checkLinkResponses[index].link;

            //     // This part needs to check for duplicate links
            //     // So we can't do it concurrently just in case we miss duplicates
            //     for (let linkToCheck of checkLinkResponses[index].links) {
            //         if (links.filter(linkObject => linkObject.link === linkToCheck.link).length < 1) {
            //             console.log('pushed in ', linkToCheck.link);
            //             links.push(linkToCheck);
            //         }
            //     }
            // }
            // i += amountOfThreads - 1;

            // console.log('after link is checked link', links[i], i);
            // console.log('current links length and current index ***************', links.length, i);

        }
    }

    pool.events().subscribe((event) => {
        // console.log('pool event', event);
        if (event.type === 'taskCompleted' && event.returnValue.links) {
            console.log('task completed', new Date());
            for (let linkToCheck of event.returnValue.links) {
                if (links.filter(linkObject => linkObject.link === linkToCheck.link).length < 1) {
                    console.log('pushed in ', linkToCheck.link);
                    // links.push(linkToCheck);

                    pool.queue(linkChecker => linkChecker(linkToCheck.link, domain));

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
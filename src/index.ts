import { findDeadLinks } from "./findDeadLinks";
import { performance } from 'perf_hooks';
import * as json2csv from 'json2csv';
import * as fs from 'fs';

export async function deadLinkChecker(desiredDomain: string, desiredIOThreads: any, links: any[]) {
    console.log('hit deadLinkChecker', desiredDomain, desiredIOThreads);
    let domain: string = '';
    const fsPromises = fs.promises;
    domain = formatDomain(desiredDomain);

    if (!desiredIOThreads) {
        desiredIOThreads = 4;
    }
    else if (parseInt(desiredIOThreads) === NaN) {
        desiredIOThreads = 4;
        // TODO: Let the user know the IO threads is wrong and we're going to assume 4
        console.log('Invalid desired IO thread format, using 4');
    }
    else {
        desiredIOThreads = parseInt(desiredIOThreads);
    }

    try {

        const startTime = performance.now();

        const badLinks = await findDeadLinks(domain, desiredIOThreads, links);
        if (badLinks.length > 0) {
            const csv = json2csv.parse(badLinks);
            const cleanDomain = domain.replace('http://', '').replace('https://', '');
            const directory = 'results';
            const filePath = `${directory}/${cleanDomain}-bad-link-checking-results.csv`;
            if (!fs.existsSync(directory)) {
                fs.mkdirSync(directory);
            }

            await fsPromises.writeFile(filePath, csv);
        }

        const endTime = performance.now();
        console.log('Completed findingDeadLinks. Total time -', (endTime - startTime));

        return endTime - startTime;

    }
    catch (e) {
        console.log('Error: ', e);
        throw `Error: ${e}`;
    }

}

export function formatDomain(desiredDomain?: string): string {
    let domain: string = '';

    if (desiredDomain) {
        if (!desiredDomain.includes('http')) {
            console.log('\x1b[36m%s\x1b[0m', 'WARN: Http protocol was not included. Prepending http. Hope this works.');
            domain = `http://${desiredDomain}`;
        }
        else {
            domain = desiredDomain;
        }
    }
    else {
        domain = "https://javascriptwebscrapingguy.com";
    }

    return domain;
}
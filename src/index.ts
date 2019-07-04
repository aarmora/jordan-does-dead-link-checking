import { findDeadLinks } from "./findDeadLinks";
import { performance } from 'perf_hooks';
import * as json2csv from 'json2csv';
import * as readline from 'readline';
import * as fs from 'fs';

(async () => {
    let domain: string = '';
    const fsPromises = fs.promises;

    try {
        const desiredDomain = await readLinePromise('Desired website to check links? (https://javascriptwebscrapingguy.com) ');

        domain = formatDomain(desiredDomain);

        let desiredIOThreads = await readLinePromise('Desired I/O threads? (4) ');

        if (!desiredIOThreads) {
            desiredIOThreads = 4;
        }

        const startTime = performance.now();

        const badLinks = await findDeadLinks(domain, desiredIOThreads);
        if (badLinks.length > 0) {
            const csv = json2csv.parse(badLinks);
            const cleanDomain = domain.replace('http://', '').replace('https://', '');
            const filePath = `results/${cleanDomain}-bad-link-checking-results.csv`;

            await fsPromises.writeFile(filePath, csv);
        }

        const endTime = performance.now();
        console.log('Completed findingDeadLinks. Total time -', (endTime - startTime));

    }
    catch (e) {
        console.log('Error: ', e);
        process.exit();
    }


})();

function readLinePromise(question: string): Promise<any> {
    return new Promise((resolve, reject) => {


        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(question, (answer) => {
            resolve(answer);
            rl.close();
        });
    });
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
import puppeteer, { Browser } from 'puppeteer';
import { getPropertyBySelector, setUpNewPage, getPropertyByHandle } from 'puppeteer-helpers';

export async function findDeadLinks(domain: string) {
    const browser = await setUpBrowser();
    const page = await browser.newPage();

    await page.goto(domain);

    const links = await page.$$('a');

    for (let i = 0; i < links.length; i++) {
        const url = await getPropertyByHandle(links[i], 'href');
        console.log('url', url);
        if (url.includes('javascript')) {
            await links[i].click();
        }
        else {
            await page.goto(url);
        }
    }

}



async function setUpBrowser() {
    const cliArgs = process.argv.slice(2);
    let browser: Browser;

    let ubuntu = cliArgs.includes('ubuntu');
    let headless = cliArgs.includes('headless');

    if (!headless && process.env.hasOwnProperty("PPTR_HEADLESS") && String(process.env.PPTR_HEADLESS) === 'true') {
        headless = true;
    }

    console.log('puppeteer: zz');
    console.log(`    headless: ${headless}`);
    console.log(`    ubuntu: ${ubuntu}`);

    if (ubuntu) {
        const pptrArgs: puppeteer.LaunchOptions = {
            headless: true,
            ignoreHTTPSErrors: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-infobars',
                '--window-position=0,0',
                '--ignore-certifcate-errors',
                '--ignore-certifcate-errors-spki-list',
                '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'
            ],
        };

        if (process.env.hasOwnProperty("PPTR_EXEC_PATH")) {
            pptrArgs.executablePath = process.env.PPTR_EXEC_PATH;
        }

        browser = await puppeteer.launch(pptrArgs);
    }
    else {
        const pptrArgs: puppeteer.LaunchOptions = {
            headless,
            args: [`--window-size=${1800},${1200}`],
        };

        if (process.env.hasOwnProperty("PPTR_EXEC_PATH")) {
            pptrArgs.executablePath = process.env.PPTR_EXEC_PATH;
        }

        browser = await puppeteer.launch(pptrArgs);
    }

    return Promise.resolve(browser);
}
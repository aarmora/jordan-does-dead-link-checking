import * as cheerio from 'cheerio';

export interface ILinkObject {
    link: string;
    status: number | null;
    locationOfLink: string;
}


export function domainCheck(link: string, domain: string, newDomain: string) {
    link = link.replace('www.', '');
    domain = domain.replace('www.', '');
    newDomain = newDomain.replace('www.', '');

    return link.includes(domain) && newDomain.includes(domain);
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
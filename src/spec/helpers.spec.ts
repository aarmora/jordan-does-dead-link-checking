import { expect } from 'chai';
import { domainCheck, getLinks, ILinkObject } from './../helpers';
import { testHTMLPage } from './test-page.stub';

describe('domainCheck()', () => {

    it('should return true if the link and newDomain include the original domain', () => {
        const link = 'http://pizzalink.com/whoa';
        const newDomain = 'http://pizzalink.com';
        const domain = 'http://pizzalink.com';

        expect(domainCheck(link, domain, newDomain)).to.equal(true);

    });

    it('should return true if the link and newDomain include the original domain even if the link has www', () => {
        const link = 'http://www.pizzalink.com/whoa';
        const newDomain = 'http://pizzalink.com';
        const domain = 'http://pizzalink.com';

        expect(domainCheck(link, domain, newDomain)).to.equal(true);

    });

    it('should return true if the link and newDomain include the original domain even if the domain has www', () => {
        const link = 'http://pizzalink.com/whoa';
        const newDomain = 'http://pizzalink.com';
        const domain = 'http://www.pizzalink.com';

        expect(domainCheck(link, domain, newDomain)).to.equal(true);

    });

    it('should return true if the link and newDomain include the original domain even if the newDomain has www', () => {
        const link = 'http://pizzalink.com/whoa';
        const newDomain = 'http://www.pizzalink.com';
        const domain = 'http://pizzalink.com';

        expect(domainCheck(link, domain, newDomain)).to.equal(true);

    });

    it('should return false if the link does not include the original domain', () => {
        const link = 'http://pizzalinkerer.com/whoa';
        const newDomain = 'http://pizzalink.com';
        const domain = 'http://pizzalink.com';

        expect(domainCheck(link, domain, newDomain)).to.equal(false);

    });

    it('should return false if the newDomain does not include the original domain', () => {
        const link = 'http://pizzalinker.com/whoa';
        const newDomain = 'http://pizzalinker.com';
        const domain = 'http://pizzalink.com';

        expect(domainCheck(link, domain, newDomain)).to.equal(false);

    });

    it('should return true even if the domains have different http protocols', () => {
        const link = 'http://pizzalink.com/whoa';
        const newDomain = 'https://pizzalink.com';
        const domain = 'http://pizzalink.com';

        expect(domainCheck(link, domain, newDomain)).to.equal(true);

    });
});


describe('getLinks()', () => {

    it('should return an array with a length of 26 if passed in html with 26 a tags in it', async () => {
        const domain = 'https://javascriptwebscrapingguy.com';
        const currentUrl = 'https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/';
        const links = await getLinks(testHTMLPage, domain, currentUrl);

        expect(links.length).to.equal(26);
    });

    it('should have an array filled with ILinkObjects', async () => {
        const domain = 'https://javascriptwebscrapingguy.com';
        const currentUrl = 'https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/';
        const links = await getLinks(testHTMLPage, domain, currentUrl);
        const testLinkObject: ILinkObject = {
            link: 'https://javascriptwebscrapingguy.com/#content',
            status: null,
            locationOfLink: currentUrl
        };

        expect(links[0]).to.deep.equal(testLinkObject);
    });

    it('should not include an href with "javascript:"', async () => {
        const domain = 'https://javascriptwebscrapingguy.com';
        const currentUrl = 'https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/';
        const testHTML = '<a href="javascript:void()">click me </a>';
        const links = await getLinks(testHTML, domain, currentUrl);

        expect(links.length).to.equal(0);
    });

    it('should not include an href with "mailto:"', async () => {
        const domain = 'https://javascriptwebscrapingguy.com';
        const currentUrl = 'https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/';
        const testHTML = '<a href="mailto:bill@pizza.com">click me </a>';
        const links = await getLinks(testHTML, domain, currentUrl);

        expect(links.length).to.equal(0);
    });

    it('should not include an href with "tel:"', async () => {
        const domain = 'https://javascriptwebscrapingguy.com';
        const currentUrl = 'https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/';
        const testHTML = '<a href="tel:1234567890">click me </a>';
        const links = await getLinks(testHTML, domain, currentUrl);

        expect(links.length).to.equal(0);
    });

    it('should not include an href that has "#comment"', async () => {
        const domain = 'https://javascriptwebscrapingguy.com';
        const currentUrl = 'https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/';
        const testHTML = `<a href="${currentUrl}#comment">click me </a>`;
        const links = await getLinks(testHTML, domain, currentUrl);

        expect(links.length).to.equal(0);
    });

    it('should not include an href that has "#respond"', async () => {
        const domain = 'https://javascriptwebscrapingguy.com';
        const currentUrl = 'https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/';
        const testHTML = `<a href="${currentUrl}#respond">click me </a>`;
        const links = await getLinks(testHTML, domain, currentUrl);

        expect(links.length).to.equal(0);
    });

    it('should split off all query parameters if not doing a deep check', async () => {
        const domain = 'https://javascriptwebscrapingguy.com';
        const currentUrl = 'https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/';
        const testHTML = `<a href="${currentUrl}?pizza=true">click me </a>`;
        const links = await getLinks(testHTML, domain, currentUrl);

        expect(links[0].link).to.equal(currentUrl);
    });

    it('should split off the slash at the first character if it is there and then add the domain with a slash', async () => {
        const domain = 'https://javascriptwebscrapingguy.com';
        const currentUrl = 'https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/';
        const testHTML = `<a href="/mysterio-man">click me </a>`;
        const links = await getLinks(testHTML, domain, currentUrl);

        expect(links[0].link).to.equal(`${domain}/mysterio-man`);
    });

    it('should handle multiple links', async () => {
        const domain = 'https://javascriptwebscrapingguy.com';
        const currentUrl = 'https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/';
        const testHTML = `<a href="/mysterio-man">click me </a> <a href="/mysterio-manners">click me again </a>`;
        const links = await getLinks(testHTML, domain, currentUrl);

        expect(links.length).to.equal(2);
    });

    it('should not add the same link twice', async () => {
        const domain = 'https://javascriptwebscrapingguy.com';
        const currentUrl = 'https://javascriptwebscrapingguy.com/jordan-plays-pool-multi-threading-with-a-pool-queue/';
        const testHTML = `<a href="/mysterio-man">click me </a> <a href="/mysterio-man">click me again </a>`;
        const links = await getLinks(testHTML, domain, currentUrl);

        expect(links.length).to.equal(1);
    });

});
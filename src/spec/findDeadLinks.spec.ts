import * as requestPromise from 'request-promise';
import nock from "nock";
import sinon from "sinon";
import { findDeadLinks } from '../findDeadLinks';
import { expect } from 'chai';
import * as helpers from './../helpers';
import * as checkLinkFunction from './../checkLink';

describe('findDeadLinks()', () => {
    let getLinksStub;
    let checkLinkStub;
    const domainToSend = 'https://javascriptwebscrapingguy.com';
    const desiredIOThreadsToSend = 4;

    afterEach(() => {
        if (getLinksStub) {
            getLinksStub.restore();
        }
        if (checkLinkStub) {
            checkLinkStub.restore();
        }
    });

    it('should call getLinks() once', async () => {
        const returnLinks: helpers.ILinkObject[] = [
            { link: 'https://heyBuddy.com', status: 200, locationOfLink: 'https://javascriptwebscrapingguy.com' },
            { link: 'https://heyAnotherBuddy.com', status: 200, locationOfLink: 'https://javascriptwebscrapingguy.com' }
        ];
        getLinksStub = sinon.stub(helpers, 'getLinks').returns(Promise.resolve(returnLinks));

        nock(domainToSend).get('/').reply(200);

        await findDeadLinks(domainToSend, desiredIOThreadsToSend, []);

        expect(getLinksStub.callCount).to.equal(1);

    });

    it('should call checkLink() twice if two links are returned from getLinks()', async () => {
        const returnLinks: helpers.ILinkObject[] = [
            { link: 'https://heyBuddy.com', status: null, locationOfLink: 'https://javascriptwebscrapingguy.com' },
            { link: 'https://heyAnotherBuddy.com', status: null, locationOfLink: 'https://javascriptwebscrapingguy.com' }
        ];
        getLinksStub = sinon.stub(helpers, 'getLinks').returns(Promise.resolve(returnLinks));

        checkLinkStub = sinon.stub(checkLinkFunction, 'checkLink');

        nock(domainToSend).get('/').reply(200);

        await findDeadLinks(domainToSend, desiredIOThreadsToSend, []);

        expect(checkLinkStub.callCount).to.equal(2);

    });

    it('should call checkLink() 0 times if two links are returns from getLinks() but they have a status', async () => {
        const returnLinks: helpers.ILinkObject[] = [
            { link: 'https://heyBuddy.com', status: 200, locationOfLink: 'https://javascriptwebscrapingguy.com' },
            { link: 'https://heyAnotherBuddy.com', status: 200, locationOfLink: 'https://javascriptwebscrapingguy.com' }
        ];
        getLinksStub = sinon.stub(helpers, 'getLinks').returns(Promise.resolve(returnLinks));

        checkLinkStub = sinon.stub(checkLinkFunction, 'checkLink');

        nock(domainToSend).get('/').reply(200);

        await findDeadLinks(domainToSend, desiredIOThreadsToSend, []);

        expect(checkLinkStub.callCount).to.equal(0);

    });

    it('should return the number of bad links (if two 404s, two bad links)', async () => {
        const returnLinks: helpers.ILinkObject[] = [
            { link: 'https://heyBuddy.com', status: null, locationOfLink: 'https://javascriptwebscrapingguy.com' },
            { link: 'https://heyAnotherBuddy.com', status: null, locationOfLink: 'https://javascriptwebscrapingguy.com' }
        ];
        getLinksStub = sinon.stub(helpers, 'getLinks').returns(Promise.resolve(returnLinks));

        nock(domainToSend).get('/').reply(200);
        nock("https://heyBuddy.com").get('/').reply(404);
        nock("https://heyAnotherBuddy.com").get('/').reply(404);

        const links = await findDeadLinks(domainToSend, desiredIOThreadsToSend, []);

        expect(links.length).to.equal(2);

    });

    it('should return the number of bad links (if one 404 and one 500, two bad links)', async () => {
        const returnLinks: helpers.ILinkObject[] = [
            { link: 'https://heyBuddy.com', status: null, locationOfLink: 'https://javascriptwebscrapingguy.com' },
            { link: 'https://heyAnotherBuddy.com', status: null, locationOfLink: 'https://javascriptwebscrapingguy.com' }
        ];
        getLinksStub = sinon.stub(helpers, 'getLinks').returns(Promise.resolve(returnLinks));

        nock(domainToSend).get('/').reply(200);
        nock("https://heyBuddy.com").get('/').reply(404);
        nock("https://heyAnotherBuddy.com").get('/').reply(500);

        const links = await findDeadLinks(domainToSend, desiredIOThreadsToSend, []);

        expect(links.length).to.equal(2);

    });

    it('should return the number of bad links (if one 404 and one 200, one bad link)', async () => {
        const returnLinks: helpers.ILinkObject[] = [
            { link: 'https://heyAnotherBuddy.com', status: null, locationOfLink: 'https://javascriptwebscrapingguy.com' },
            { link: 'https://heyBuddy.com', status: null, locationOfLink: 'https://javascriptwebscrapingguy.com' }
        ];
        getLinksStub = sinon.stub(helpers, 'getLinks').returns(Promise.resolve(returnLinks));

        nock(domainToSend).get('/').reply(200);
        nock("https://heyBuddy.com").get('/').reply(200);
        nock("https://heyAnotherBuddy.com").get('/').reply(400);

        const links = await findDeadLinks(domainToSend, desiredIOThreadsToSend, []);

        expect(links.length).to.equal(1);

    });

    it('should throw an error if the original domain request fails', async () => {

        nock(domainToSend).get('/').reply(500);

        try {
            await findDeadLinks(domainToSend, desiredIOThreadsToSend, []);
        }
        catch (e) {
            expect(e).to.equal(`Error requesting base domain - ${domainToSend}, 500`);
        }
    });
})

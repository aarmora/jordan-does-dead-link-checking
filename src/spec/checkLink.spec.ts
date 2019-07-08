import { expect } from 'chai';
import * as helpers from './../helpers';
import nock from "nock";
import sinon from "sinon";
import * as checkLinkFunction from "../checkLink";


describe('checkLink()', () => {
    let domainCheckStub;
    let domainCheckSpy;
    let getLinksSpy;
    let getLinksStub;
    let checkLinkSpy;

    afterEach(() => {
        if (domainCheckStub) {
            domainCheckStub.restore();
        }
        if (domainCheckSpy) {
            domainCheckSpy.restore();
        }
        if (getLinksSpy) {
            getLinksSpy.restore();
        }
        if (getLinksStub) {
            getLinksStub.restore();
        }
        if (checkLinkSpy) {
            checkLinkSpy.restore();
        }
    });

    it('should return an object with an ILinkObject with a status of 200 if request is successful', async () => {
        const originalLinkObject: helpers.ILinkObject = {
            link: 'https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/',
            status: null,
            locationOfLink: 'https://javascriptwebscrapingguy.com'
        };
        const originalLinks = [];
        const domain = 'https://javascriptwebscrapingguy.com';
        const desiredIOThreads = 4;

        nock('https://javascriptwebscrapingguy.com').get('/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/').reply(200, '');

        const checkLinkResponse = await checkLinkFunction.checkLink(originalLinkObject, originalLinks, domain, desiredIOThreads);

        expect(checkLinkResponse.link.status).to.equal(200);

    });

    it('should return an object with an ILinkObject with a status of 404 if request returns 404', async () => {
        const originalLinkObject: helpers.ILinkObject = {
            link: 'https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/',
            status: null,
            locationOfLink: 'https://javascriptwebscrapingguy.com'
        };
        const originalLinks = [];
        const domain = 'https://javascriptwebscrapingguy.com';
        const desiredIOThreads = 4;

        nock('https://javascriptwebscrapingguy.com').get('/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/').reply(404, '');

        const checkLinkResponse = await checkLinkFunction.checkLink(originalLinkObject, originalLinks, domain, desiredIOThreads);

        expect(checkLinkResponse.link.status).to.equal(404);

    });

    it('should return an object with an ILinkObject with a status of 999 if request takes longer than 10000ms', async () => {
        const originalLinkObject: helpers.ILinkObject = {
            link: 'https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/',
            status: null,
            locationOfLink: 'https://javascriptwebscrapingguy.com'
        };
        const originalLinks = [];
        const domain = 'https://javascriptwebscrapingguy.com';
        const desiredIOThreads = 4;

        nock('https://javascriptwebscrapingguy.com').get('/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/').delayConnection(10050);

        const checkLinkResponse = await checkLinkFunction.checkLink(originalLinkObject, originalLinks, domain, desiredIOThreads);

        expect(checkLinkResponse.link.status).to.equal(999);

    });

    it('should call domainChecK()', async () => {
        const originalLinkObject: helpers.ILinkObject = {
            link: 'https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/',
            status: null,
            locationOfLink: 'https://javascriptwebscrapingguy.com'
        };
        const originalLinks = [];
        const domain = 'https://javascriptwebscrapingguy.com';
        const desiredIOThreads = 4;

        nock('https://javascriptwebscrapingguy.com').get('/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/').reply(200, '<button>click me</button>');

        domainCheckSpy = sinon.spy(helpers, 'domainCheck');

        await checkLinkFunction.checkLink(originalLinkObject, originalLinks, domain, desiredIOThreads);

        expect(domainCheckSpy.callCount).to.equal(1);

    });

    it('should not call domainCheck() if there is no html', async () => {
        const originalLinkObject: helpers.ILinkObject = {
            link: 'https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/',
            status: null,
            locationOfLink: 'https://javascriptwebscrapingguy.com'
        };
        const originalLinks = [];
        const domain = 'https://javascriptwebscrapingguy.com';
        const desiredIOThreads = 4;

        // '' will count as no html
        nock('https://javascriptwebscrapingguy.com').get('/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/').reply(200, '');

        domainCheckSpy = sinon.spy(helpers, 'domainCheck');

        await checkLinkFunction.checkLink(originalLinkObject, originalLinks, domain, desiredIOThreads);

        expect(domainCheckSpy.callCount).to.equal(0);

    });

    it('should call getLinks() if domainCheck() returns true and there is html', async () => {
        const originalLinkObject: helpers.ILinkObject = {
            link: 'https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/',
            status: null,
            locationOfLink: 'https://javascriptwebscrapingguy.com'
        };
        const originalLinks = [];
        const domain = 'https://javascriptwebscrapingguy.com';
        const desiredIOThreads = 4;

        nock('https://javascriptwebscrapingguy.com').get('/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/').reply(200, '<button>click me</button>');

        domainCheckStub = sinon.stub(helpers, 'domainCheck').returns(true);
        getLinksSpy = sinon.spy(helpers, 'getLinks');

        await checkLinkFunction.checkLink(originalLinkObject, originalLinks, domain, desiredIOThreads);

        expect(getLinksSpy.callCount).to.equal(1);

    });

    it('should not call getLinks() if there is no html', async () => {
        const originalLinkObject: helpers.ILinkObject = {
            link: 'https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/',
            status: null,
            locationOfLink: 'https://javascriptwebscrapingguy.com'
        };
        const originalLinks = [];
        const domain = 'https://javascriptwebscrapingguy.com';
        const desiredIOThreads = 4;

        // '' will count as no html
        nock('https://javascriptwebscrapingguy.com').get('/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/').reply(200, '');

        domainCheckStub = sinon.stub(helpers, 'domainCheck').returns(true);
        getLinksSpy = sinon.spy(helpers, 'getLinks');

        await checkLinkFunction.checkLink(originalLinkObject, originalLinks, domain, desiredIOThreads);

        expect(getLinksSpy.callCount).to.equal(0);

    });

    it('should not call getLinks() if there is html but domainCheck returns false', async () => {
        const originalLinkObject: helpers.ILinkObject = {
            link: 'https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/',
            status: null,
            locationOfLink: 'https://javascriptwebscrapingguy.com'
        };
        const originalLinks = [];
        const domain = 'https://javascriptwebscrapingguy.com';
        const desiredIOThreads = 4;

        nock('https://javascriptwebscrapingguy.com').get('/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/').reply(200, '<button>click me</button>');

        domainCheckStub = sinon.stub(helpers, 'domainCheck').returns(false);
        getLinksSpy = sinon.spy(helpers, 'getLinks');

        await checkLinkFunction.checkLink(originalLinkObject, originalLinks, domain, desiredIOThreads);

        expect(getLinksSpy.callCount).to.equal(0);

    });

    it('should call checkLink() x amount of times if there are two new links', async () => {
        const originalLinkObject: helpers.ILinkObject = {
            link: 'https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/',
            status: null,
            locationOfLink: 'https://javascriptwebscrapingguy.com'
        };
        const originalLinks = [];
        const domain = 'https://javascriptwebscrapingguy.com';
        const desiredIOThreads = 4;

        nock('https://javascriptwebscrapingguy.com').get('/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/').reply(200, '<button>click me</button>');

        domainCheckStub = sinon.stub(helpers, 'domainCheck').returns(true);
        const returnLinks: helpers.ILinkObject[] = [
            { link: 'https://heyBuddy.com', status: 200, locationOfLink: 'https://javascriptwebscrapingguy.com' },
            { link: 'https://heyAnotherBuddy.com', status: 200, locationOfLink: 'https://javascriptwebscrapingguy.com' }
        ];
        getLinksStub = sinon.stub(helpers, 'getLinks').returns(Promise.resolve(returnLinks));
        checkLinkSpy = sinon.spy(checkLinkFunction, 'checkLink');

        await checkLinkFunction.checkLink(originalLinkObject, originalLinks, domain, desiredIOThreads);

        expect(checkLinkSpy.callCount).to.equal(3);

    });

    it('should return an expected ILinkObject and links', async () => {
        const originalLinkObject: helpers.ILinkObject = {
            link: 'https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/',
            status: null,
            locationOfLink: 'https://javascriptwebscrapingguy.com'
        };
        const originalLinks = [];
        const domain = 'https://javascriptwebscrapingguy.com';
        const desiredIOThreads = 4;

        nock('https://javascriptwebscrapingguy.com').get('/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/').reply(200, '<button>click me</button>');
        nock('https://heyBuddy.com').get('/').reply(200);
        nock('https://heyAnotherbuddy.com').get('/').reply(200);

        domainCheckStub = sinon.stub(helpers, 'domainCheck').returns(true);
        const returnLinks: helpers.ILinkObject[] = [
            { link: 'https://heyBuddy.com', status: 200, locationOfLink: 'https://javascriptwebscrapingguy.com' },
            { link: 'https://heyAnotherBuddy.com', status: 200, locationOfLink: 'https://javascriptwebscrapingguy.com' }
        ];
        getLinksStub = sinon.stub(helpers, 'getLinks').returns(Promise.resolve(returnLinks));
        const expectedResponse = {
            link: {
                link: "https://javascriptwebscrapingguy.com/jordan-takes-advantage-of-multithreaded-i-o-in-nodejs/",
                locationOfLink: "https://javascriptwebscrapingguy.com",
                status: 200,
            },
            links: [
                {
                    link: "https://heyBuddy.com",
                    locationOfLink: "https://javascriptwebscrapingguy.com",
                    status: 200
                },
                {
                    link: "https://heyAnotherBuddy.com",
                    locationOfLink: "https://javascriptwebscrapingguy.com",
                    status: 200
                }
            ]
        };

        const checkLinkResponse = await checkLinkFunction.checkLink(originalLinkObject, originalLinks, domain, desiredIOThreads);

        expect(checkLinkResponse).to.deep.equal(expectedResponse);

    });

});
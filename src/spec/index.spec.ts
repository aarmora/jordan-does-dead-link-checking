import { describe } from "mocha";
import { expect } from 'chai';
import { formatDomain } from "..";


describe('formatDomain()', () => {

    it('should properly format a domain without an http protocol', () => {
        let domain = 'aarmora.com';
        domain = formatDomain(domain);

        expect(domain).to.equal('http://aarmora.com');
    });

    it('should return the domain if it includes an http protocol', () => {
        let domain = 'https://aarmora.com';
        domain = formatDomain(domain);

        expect(domain).to.equal('https://aarmora.com');
    });

    it('should return https://javascriptwebscrapingguy.com if nothing is passed in', () => {
        const domain = formatDomain();

        expect(domain).to.equal('https://javascriptwebscrapingguy.com');
    });

});
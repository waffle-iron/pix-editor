'use strict';

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Server = require('../index');

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('routes', () => {

    it('should greet URL', (done) => {
        // when
        Server.inject({ method: 'GET', url: '/random-route' }, (response) => {

            // then
            expect(response.statusCode).to.equal(200);
            expect(response.result).to.equal('Hello, random-route!');
            done();
        });
    });
});


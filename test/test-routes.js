'use strict';

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Server = require('../index');

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const expect = Code.expect;

describe('routes', () => {

    let options = {};

    describe('GET /', () => {

        before((done) => {

            // given
            options = { method: 'GET', url: '/' };
            done();
        });

        it('should render login page', (done) => {
            // when
            Server.inject(options, (response) => {

                // then
                expect(response.statusCode).to.equal(200);
                expect(response.result).to.contain('<div class="login-page">');
                expect(response.result).to.contain('<title>PIX/Ed - Connexion</title>');
                done();
            });
        });

    });

    describe('GET /{name}', () => {

        before((done) => {

            // given
            options = { method: 'GET', url: '/random-route' };
            done();
        });

        it('should return "Hello random-route!"', (done) => {
            // when
            Server.inject(options, (response) => {

                // then
                expect(response.statusCode).to.equal(200);
                expect(response.result).to.equal('Hello, random-route!');
                done();
            });
        });

    });

    describe('GET /epreuves', () => {

        before((done) => {

            // given
            options = { method: 'GET', url: '/epreuves' };
            done();
        });

        it('should render challenge list page', (done) => {
            // when
            Server.inject(options, (response) => {

                // then
                expect(response.statusCode).to.equal(200);
                expect(response.result).to.contain('<div class="challenges-page">');
                expect(response.result).to.contain('<title>PIX/Ed - Épreuves</title>');
                done();
            });
        });

    });

    describe('GET /tests', () => {

        before((done) => {

            // given
            options = { method: 'GET', url: '/tests' };
            done();
        });

        it('should render test list page', (done) => {
            // when
            Server.inject(options, (response) => {

                // then
                expect(response.statusCode).to.equal(200);
                expect(response.result).to.contain('<div class="tests-page">');
                expect(response.result).to.contain('<title>PIX/Ed - Tests</title>');
                done();
            });
        });

    });

    describe('GET /formations', () => {

        before((done) => {

            // given
            options = { method: 'GET', url: '/formations' };
            done();
        });

        it('should render course list page', (done) => {
            // when
            Server.inject(options, (response) => {

                // then
                expect(response.statusCode).to.equal(200);
                expect(response.result).to.contain('<div class="courses-page">');
                expect(response.result).to.contain('<title>PIX/Ed - Formations</title>');
                done();
            });
        });

    });

    describe('GET /reglages', () => {

        before((done) => {

            // given
            options = { method: 'GET', url: '/reglages' };
            done();
        });

        it('should render settings page', (done) => {
            // when
            Server.inject(options, (response) => {

                // then
                expect(response.statusCode).to.equal(200);
                expect(response.result).to.contain('<div class="settings-page">');
                expect(response.result).to.contain('<title>PIX/Ed - Réglages</title>');
                done();
            });
        });

    });

    describe('GET /activite', () => {

        before((done) => {

            // given
            options = { method: 'GET', url: '/activite' };
            done();
        });

        it('should render timeline page', (done) => {
            // when
            Server.inject(options, (response) => {

                // then
                expect(response.statusCode).to.equal(200);
                expect(response.result).to.contain('<div class="timeline-page">');
                expect(response.result).to.contain('<title>PIX/Ed - Activité</title>');
                done();
            });
        });

    });

    describe('GET /deconnexion', () => {

        before((done) => {

            // given
            options = { method: 'GET', url: '/deconnexion' };
            done();
        });

        it('should redirect to login page', (done) => {
            // when
            Server.inject(options, (response) => {

                // then
                expect(response.statusCode).to.equal(302);
                done();
            });
        });

    });

});


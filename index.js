'use strict';

const Hapi = require('hapi');
const Good = require('good');
const Path = require('path');
const Hoek = require('hoek');
const Blipp = require('blipp');
const Inert = require('inert');
const Vision = require('vision');
const Handlebars = require('handlebars');
const Routes = require('./src/routes');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([
    Blipp,
    Inert,
    Vision, {
        register: Good,
        options: {
            reporters: {
                console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        response: '*',
                        log: '*'
                    }]
                }, {
                    module: 'good-console'
                }, 'stdout']
            }
        }
    }
], (err) => {

    Hoek.assert(!err, err);

    server.views({
        engines: {
            html: Handlebars
        },
        relativeTo: Path.join(__dirname, 'src'),
        path: './views',
        layoutPath: './views/layout',
        partialsPath: './views/partials',
        helpersPath: './views/helpers',
        layout: 'connected'
    });

    server.route(Routes);

    server.start((startError) => {

        Hoek.assert(!startError, startError);
        server.log('info', `Server running at: ${server.info.uri}`);
    });
});

module.exports = server;


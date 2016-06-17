'use strict';

const Hapi = require('hapi');
const Good = require('good');
const Path = require('path');
const Hoek = require('hoek');
const Blipp = require('blipp');
const Inert = require('inert');
const Vision = require('vision');
const Handlebars = require('handlebars');
const Routes = require('./server/routes');

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
        relativeTo: Path.join(__dirname, 'server'),
        path: './views', // the directory that contains your main templates
        layoutPath: './views/layout', // the directory that contains layout templates
        partialsPath: './views/partials', // the directory that contains your partials (ex: header, footer, navbar, etc.)
        helpersPath: './views/helpers', // the directory that contains your template helpers (ex: JS files)
        layout: 'connected'
    });

    server.route(Routes);

    server.start((err) => {

        Hoek.assert(!err, err);
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
'use strict';

const Hapi = require('hapi');
const Good = require('good');
const Path = require('path');
const Hoek = require('hoek');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([
    require('blipp'),
    require('inert'),
    require('vision'), {
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
            html: require('handlebars')
        },
        relativeTo: Path.join(__dirname, 'server'),
        path: 'views'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: {
            view: 'index'
        }
    });

    server.route({
        method: 'GET',
        path: '/{name}',
        handler: (request, reply) => {

            reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
        }
    });

    server.route({
        method: 'GET',
        path: '/assets/{param*}',
        handler: {
            directory: {
                path: 'public',
                listing: true
            }
        }
    });

    server.start((err) => {

        Hoek.assert(!err, err);
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
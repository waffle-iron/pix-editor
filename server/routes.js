module.exports = [{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {

        let data = {
            title: 'Index'
        };
        return reply.view('index', data, { layout: 'disconnected' });
    }
}, {
    method: 'GET',
    path: '/epreuves',
    handler: (request, reply) => {

        let data = {
            title: 'Épreuves'
        };
        return reply.view('challenges', data);
    }
}, {
    method: 'GET',
    path: '/tests',
    handler: (request, reply) => {

        let data = {
            title: 'Tests'
        };
        return reply.view('tests', data);
    }
}, {
    method: 'GET',
    path: '/formations',
    handler: (request, reply) => {

        let data = {
            title: 'Formations'
        };
        return reply.view('courses', data);
    }
}, {
    method: 'GET',
    path: '/reglages',
    handler: (request, reply) => {

        let data = {
            title: 'Réglages'
        };
        return reply.view('settings', data);
    }
}, {
    method: 'GET',
    path: '/activite',
    handler: (request, reply) => {

        let data = {
            title: 'Activité'
        };
        return reply.view('timeline', data);
    }
}, {
    method: 'GET',
    path: '/{name}',
    handler: (request, reply) => {

        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
}, {
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
        directory: {
            path: 'public',
            listing: true
        }
    }
}];


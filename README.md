# PIX-Editor
Application de gestion des tests et des épreuves de la plateforme PIX.

## Pré-requis

- Git (~2.6.4)
- Node (~6.2.1) & NPM (~3.1.0)
- Docker (~1.11.2)

## Installation

```
$ git clone git@github.com:sgmap/pix-editor.git
$ cd pix-editor
$ npm install
$ npm start
```

L'application est accessible à l'URL : [http://localhost:3000](http://localhost:3000)


## Anatomie de l'application

```
pix-editor
 └ build                    → (unversionned) Generated sources or output
    └ coverage.html         → HTML report of Lab testing tool (tests status + code coverage + linting results)
 └ node_modules             → (unversionned) Downloaded Node dependencies
 └ public                   → Public resources (accessed by /assets/{param*} route in Hapi server)
    └ css                   → Style resources
    └ fonts                 → Font resources
    └ img                   → Image resources
    └ js                    → App client-side scripts
    └ lib                   → Vendor Client-side scripts
 └ src                      → Application sources
    └ controllers           → Controller classes defining routes, handlers and requests/responses schema validation
    └ middlewares           → Middleware classes such as API (ex: AskBob or AWS S3) or DB clients
    └ models                → Model objects containing business and persistance intelligence
    └ views                 →
        └ layout            → Page layouts templates (ex: connected.html, disconnected.html, etc.)
        └ partials          → Partials & components templates (ex: header.html, footer.html, etc.)
        └ {*}.html          → Views templates (ex: login.html, challenges.html, settings.html, etc.)
    └ routes.js             → Routes definition
 └ test                     → Source folder for unit, integration or functional tests
 └ .eslintignore            → ESLint ignored files configuration
 └ .eslintrc                → ESLint configuration (used especially for Intellij IDEA)
 └ .gitignore               → Git ignored files configuration
 └ circle.yml               → CircleCI configuration file
 └ index.js                 → Application main entry point
 └ package.json             → Node scripts & dependencies declaration
 └ README.md                → Project documentation
```


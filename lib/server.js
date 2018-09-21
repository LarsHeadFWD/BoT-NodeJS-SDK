const ConfigurationService = require('./configuration-service');
const Controller = require('./controller');

const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');

const PORT = 3001;

const server = {};

server.startServer = () => {
    const app = express();

    app.use(bodyParser.json());

    app.use((request, response, next) => {
        log('Incoming request: ' + request.method + ' ' + request.url);
        next();
    });

    app.get('/pairing', (request, response) => {
        Controller.getPairing(request, response);
    });

    app.get('/actions', (request, response) => {
        Controller.getActions(request, response);
    });

    app.post('/actions', (request, response) => {
        Controller.postActions(request, response);
    });

    app.use((request, response) => {
        throw new HttpError(
            404,
            'Invalid Route: ' + request.method + ' ' + request.url
        );
    });

    app.use(errorHandler);

    app.listen(PORT, () => {
        log('Started listening on http://localhost:' + PORT + '/');
        ConfigurationService.resumeConfiguration();
    });
};

function errorHandler (error, request, response, next) {
    logError(error.statusCode + ' ' + error.message);
    response.status(error.statusCode).json({message: error.message});
}

function log (message) {
    console.log('Server:', message);
}

function logError (message) {
    console.log('\x1b[31mServer:', message, '\x1b[39m');
}

module.exports = server;
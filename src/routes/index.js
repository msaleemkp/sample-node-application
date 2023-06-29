const appConfigs = require('../../package.json');
const carsRoutes = require('./commodities/cars');
const routes = (expApp) => {
    carsRoutes(expApp);
    expApp.get('/', (request, response) => response.end('Hello World!') );
    expApp.get('/app-config', (request, response) => {
            const message = `
            Application Name: ${appConfigs.name}
            Application Version: ${appConfigs.version}`;
            return response.end(message);
        }
    );
};

module.exports = routes;
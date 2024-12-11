
const carsRoutes = require('./commodities/cars');
const choicesRoutes = require('./choices');

const routes = (expApp) => {
  carsRoutes(expApp);
  choicesRoutes(expApp);
  expApp.get('/', (request, response) => response.end('Hello World!') );
  expApp.get('/app-config', (request, response) => {
    const message = `
    Application Name: ${appSettings.name}
    Application Version: ${appSettings.version}`;
    return response.end(message);
  });
};

module.exports = routes;
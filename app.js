const express = require('express');
const routes = require('./src/routes');
const appConfigs = require('./package.json');

global.appSettings = {
    name: appConfigs.name,
    version: appConfigs.version,
}
const app = express();
app.use(express.json());
routes(app);
app.listen(3000, () => console.log('Application is running listening to 3000'));
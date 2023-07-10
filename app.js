const express = require('express');
const routes = require('./src/routes');
const appConfigs = require('./package.json');

global.appSettings = {
    name: appConfigs.name,
    version: appConfigs.version,
}
const app = express();
app.use(express.json()); //Allows JSON data as request body
app.use('/static', express.static('public'))
routes(app);
app.listen(3000, () => console.log('Application is running listening to 3000'));
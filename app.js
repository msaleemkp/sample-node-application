const express = require('express');
const config = require('config');
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
app.listen(config.get('app.port'), () => console.log(config.get('app.startUpMessage') + ' in ' + config.get('app.env') + ' mode listening to port ' + config.get('app.port')));
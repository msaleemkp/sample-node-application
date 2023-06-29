const express = require('express');
const routes = require('./src/routes');
const routes = require('./routes');

const app = express();
global.appSetting = {
    basePath: __dirname,
}

app.use(express.json());
routes(app);

app.listen(3000, () => console.log('Application is running listening to 3000'));
const express = require('express');
const routes = require('./src/routes');
const { resolve } = require('path');
const basePath = resolve(__dirname);

global.appSetting = {
    basePath: basePath,
}

const app = express();
app.use(express.json());
routes(app);
app.listen(3000, () => console.log('Application is running listening to 3000'));
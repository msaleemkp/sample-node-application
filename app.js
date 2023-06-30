const express = require('express');
const routes = require('./src/routes');

global.appSetting = {
    basePath: __dirname,
}

const app = express();
app.use(express.json());
routes(app);
app.listen(3000, () => console.log('Application is running listening to 3000'));
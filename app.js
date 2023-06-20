const express = require('express');
const routes = require('./routes');
const app = express();
routes(app);

app.listen(3000, () => console.log('Application is running listening to 3000'));
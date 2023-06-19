const express = require('express');
const app = express();
app.get('/', (request, response) => response.end('Hello World!')
);
app.listen(3000, () => console.log('Application is running listening to 3000'));
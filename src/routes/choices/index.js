const listChoices = require('../../lib/capability');

const choicesRoutes = (expApp) => {
    expApp.get('/choice', (request, response) => {
        listChoices((data, error) => {
            if (error) {
                console.log('Error: ', error);
                return response.status(500).json({
                    statusCode: 500,
                    message: 'Application Error!',
                });
            }

            return response.json(data);
        });
    })
};

module.exports = choicesRoutes;
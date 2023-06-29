const { listCars, addCar } = require('../../../lib/car');
const carsRoutes = (expApp) => {
    expApp.get('/car', (request, response) => {
        listCars((data, error) => {
            if (error) {
                console.log('Error', error);
                return response.status(500).json({
                    statusCode: 500,
                    message: 'Applicaiton Error',
                });
            }
            return response.json(data);
        });
    });

    expApp.post('/car', (request, response) => {
        addCar(request, (error, data) => {
            if (error) {
                console.log('Error', error);
                return response.status(500).json({
                    statusCode: 500,
                    message: 'Applicaiton Error',
                });
            } else {
                return response.status(200).json({
                    statusCode: 200,
                    message: 'Successfully added',
                    data,
                });
            }
        });
    });
};

module.exports = carsRoutes;
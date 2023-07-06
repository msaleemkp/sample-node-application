const fs = require('fs');
const { resolve } = require('path');

const getDataFilePath = () => {
    return resolve('./data/cars/stock.json');
};

const listCars = (cb) => {
    fs.readFile(getDataFilePath(), (err, data) => {
        if (err) {
            cb(null, err);
        } else {
            const carList = JSON.parse(data);
            cb(carList, null);
        }
    });
};

const addCar = (request, cb) => {
    listCars((data, error) => {
        if (error) {
            cb(error, null);
        } else {
            const updatedData = [...data.items, request.body].map((car, index) => {
                return { 
                    id: index +1,
                    ...car, 
                }
            });
            const updatedStock = {"name": "Cars list", "items": updatedData};
            const requestData = JSON.stringify(updatedStock, null, 2);
            fs.writeFile(getDataFilePath(), requestData, (err) => {
                if (err) {
                    cb(err, null);
                } else {
                    cb(null, updatedStock);
                }  
            });
        }
    });
}

module.exports = {
    listCars,
    addCar,
};
const fs = require('fs');
const { resolve } = require('path');

const getDataFilePath = () => {
    return resolve('./data/choices/capabilities.json');
}

const listChoices = (cb) => {
    fs.readFile(getDataFilePath(), (err, data) => {
        if (err) {
            cb(null, err);
        } else {
            const lstChoices = JSON.parse(data);
            cb(lstChoices, null);
        }
    });
}

module.exports = listChoices;
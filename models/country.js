const Sequelize = require('sequelize');
const configDatabase = require('../config/database');

const db = new Sequelize(configDatabase);

async function getCountries() {
    const response = await db.query('SELECT * FROM country;', {
        type: Sequelize.QueryTypes.SELECT
    });
    return response;
}

async function getCountryByCode(code) {
    const response = await db.query('SELECT * FROM country WHERE code = :code', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
            code: code
        }
    });
    return response;
}

module.exports = {
    getCountries: getCountries,
    getCountryByCode: getCountryByCode
}
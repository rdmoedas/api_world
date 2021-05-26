const Sequelize = require('sequelize');
const configDatabase = require('../config/database');

const db = new Sequelize(configDatabase);

async function getCities() {
    const response = await db.query('SELECT * FROM city;', {
        type: Sequelize.QueryTypes.SELECT
    });
    return response;
}

async function getCitiesByCode(code) {
    const response = await db.query('SELECT * FROM city WHERE CountryCode = :code', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
            code: code
        }
    });
    return response;
}

module.exports = {
    getCities: getCities,
    getCitiesByCode: getCitiesByCode
}
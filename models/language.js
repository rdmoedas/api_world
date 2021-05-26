const Sequelize = require('sequelize');
const configDatabase = require('../config/database');

const db = new Sequelize(configDatabase);

async function getLanguages() {
    const response = await db.query('SELECT * FROM countrylanguage;', {
        type: Sequelize.QueryTypes.SELECT
    });
    return response;
}

async function getLanguagesByCode(code) {
    const response = await db.query('SELECT * FROM countrylanguage WHERE CountryCode = :code', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
            code: code
        }
    });
    console.log(code)
    return response;
}

module.exports = {
    getLanguages: getLanguages,
    getLanguagesByCode: getLanguagesByCode
}
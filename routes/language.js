const express = require('express');
const router = express.Router();
const model = require('../models/language');

router.get('/', async function(req, res) {
    const response = await model.getLanguages();
    res.json({
        success: true, 
        response: response
    })
})

router.get('/:code', async function(req, res) {
    const code = req.params.code;
    const response = await model.getLanguagesByCode(code);
    res.json({
        success: true, 
        response: response
    })
});

module.exports = router;
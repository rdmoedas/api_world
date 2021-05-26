const express = require('express');
const router = express.Router();
const model = require('../models/city');

router.get('/', async function(req, res) {
    const response = await model.getCities();
    res.json({
        success: true, 
        response: response
    })
})

router.get('/:code', async function(req, res) {
    const code = req.params.code;
    const response = await model.getCitiesByCode(code);
    res.json({
        success: true, 
        response: response
    })
});

module.exports = router;
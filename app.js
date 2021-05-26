const express = require('express');
const cors = require('cors');
const countryRoutes = require('./routes/country');
const cityRoutes = require('./routes/city');
const languageRoutes = require('./routes/language');


const app = express();

app.use(cors());
app.use('/countries', countryRoutes);
app.use('/cities', cityRoutes);
app.use('/languages', languageRoutes);


app.listen(5000, function() {
    console.log("Escutando a porta 5000");
})


'use strict';

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const apiRoutes = require('./routes/routes.js');
// const port = 3000
app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("Robert's Journal")
})
//Routing for API 
apiRoutes(app);
//need connection string to connect to MongoDb database
const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("connection established successfully");
})

app.listen(process.env.PORT, () => {
    console.log("Robert's App Is Listening On Port " + process.env.PORT);
})

(function(){
    'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conexão BD
mongoose.connect('mongodb+srv://SrNeitan:neitandk2011@cluster0.lvfbe.gcp.mongodb.net/apiNode?retryWrites=true&w=majority');

//Carrega os models
const Product = require('./models/product');

//carrega as rotas 
const indexRoutes = require('./routes/index-route');
const productRoute = require('./routes/product-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));



app.use('/', indexRoutes);
app.use('/products', productRoute)


module.exports = app;
})()
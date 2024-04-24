const express = require('express');
const CuisineController = require('../Controller/cuisine');
const productController = require('../Controller/productDetails');

const route = express.Router();

route.get('/cuisine', CuisineController.getCuisine);     
route.get('/product', productController.getProductDetails);      

module.exports = route;

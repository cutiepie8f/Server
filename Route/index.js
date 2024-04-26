const express = require('express');
const CuisineController = require('../Controller/cuisine');
const productController = require('../Controller/productDetails');
const productsController = require('../Controller/product');
const productDetailsController = require('../Controller/productDetails');
const userDetailsController = require('../Controller/userDetails');

const route = express.Router();

route.get('/cuisine', CuisineController.getCuisine);     
route.get('/product', productController.getProductDetails);   
route.get('/product/:id', productsController.getProductDetailsById);      
route.get('/productDetails/:id', productDetailsController.getProductDetailsById);   
route.post('/userdetails', userDetailsController.postUserDetails);   

module.exports = route;

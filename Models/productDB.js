const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const productsSchema = new Schema({
    restraunt_id : {
        type : Number,
        required : true
    },
    _id : {
        type : Number,
        required : true
    }


   
    
    
});

module.exports = mongoose.model('productDetailsById' , productsSchema , 'cusine');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const productSchema = new Schema({
    _id : {
        type : Number,
        required : true
    }

   
    
    
});

module.exports = mongoose.model('productDetails' , productSchema , 'productDetails');
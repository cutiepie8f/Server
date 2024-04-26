const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userDetailsSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    mobile_number : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    subtotal : {
        type : Number,
        required : true
    }
    
    
});

module.exports = mongoose.model('user_Details' , userDetailsSchema , 'userDetails');
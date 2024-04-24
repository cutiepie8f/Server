const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cuisineSchema = new Schema({
    _id : {
        type : Number,
        required : true
    }

   
    
    
});

module.exports = mongoose.model('cuisineDetails' , cuisineSchema , 'cuisineDetails');
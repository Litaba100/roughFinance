const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    Name:{
        type:String
    },
    Cartegory:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
 }
, {timestamps:true});

const budget = mongoose.model('budget' , budgetSchema);

module.exports = budget;
const mongoose = require('mongoose');


//create schema
const productSchema = new mongoose.Schema({
    name:{
type: String,
required:[true,'Name is mandatory'],

    },
   country:{
    type: String,
    required:[true,'Country is mandatory'],
    },
    slogan:{
        type: String,
    required:[true,'Slogan is mandatory'],
    },
    established:{
        type: Number
        
        },
        logo:{
            type:String
        },
   
})

//set model:
const Product = mongoose.model('detail', productSchema, 'details')

module.exports ={Product} 
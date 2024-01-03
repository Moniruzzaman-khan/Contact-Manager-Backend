const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    ContactName:{
        type:String,
        required:true
    },
    ContactEmail:{
        type:String,
        unique:true
    },
    Phone:{
        type:Number,
		required:true,
    },
    Address:{
        type:String
    },
    Pic:{
        type:String
    },
    CreatedDate:{
        type:Date,
        default:Date.now()
    },
},{versionKey:false})

const Contact = mongoose.model('Contact',contactSchema)
module.exports = Contact
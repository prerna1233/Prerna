const mongoose = require('mongoose');
const MongoString = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
    },
    password:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('Data',MongoString)
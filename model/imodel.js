var mongoose = require('mongoose')

var ischema = new mongoose.Schema({
    name:{
        type : String
    }    
})

module.exports = mongoose.model("i-data",ischema)
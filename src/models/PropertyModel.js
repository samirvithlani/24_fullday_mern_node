const mongoose = require("mongoose")
const Schema = mongoose.Schema

const propertySchema = new Schema({
    name:{
        type:String
    },
    propertyPhoto:{
        type:String
    },
    propertyImages:{
        type:[String]
    }
})
module.exports = mongoose.model("property",propertySchema)
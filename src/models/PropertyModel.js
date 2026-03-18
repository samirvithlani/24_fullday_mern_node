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
    },
    ownerId:{
        type:mongoose.Types.ObjectId,
        ref:"usersv2"
    }
})
module.exports = mongoose.model("property",propertySchema)
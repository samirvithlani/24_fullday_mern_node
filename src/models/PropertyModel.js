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
    },
    type:{
        type:String,
        enum:["sale","rent"]
    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    description:{
        type:String
    },
    area:{
        type:Number,

    },
    //city state -->model -->fk -->
    //create bulk insrt state api
    //create city bulk api
    propertyType:{
        type:String,
        enum:["apartment","house","villa","commercial"]
    }

    
},{timestamps:true})
module.exports = mongoose.model("property",propertySchema)
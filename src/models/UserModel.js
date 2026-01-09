//model --> connected database -->collection bind....
//require mongoose..
const mongoose  = require("mongoose")
const Schema = mongoose.Schema
//create an object of Schema class

const userSchema = new Schema({
    //in future will add fileds, variable names...
})
//connect userSchema with users collection in connected database

//model("collectionName",schemaObject)
mongoose.model("users",userSchema)
//if users collection is not available it will create it self..
//to use userSchema in other files we need to export..
module.exports = userSchema
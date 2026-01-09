//require package mongoose
const mongoose = require("mongoose")

const dbConnection = ()=>{

    //127.0.0.1 == localhost
    //24_full_day_node -->if database is avaialble it will connect with it
    //if databas is not avaialable it will create it self and then connect
    mongoose.connect("mongodb://127.0.0.1:27017/24_full_day_node").then(()=>{
        console.log("database connected...")
    }).catch(()=>{
        console.log("database not conneted...")
    })

}
//i need to call this function in app.js -->app is your main file..
//so i need to export this function from this file..
module.exports = {
    dbConnection
}
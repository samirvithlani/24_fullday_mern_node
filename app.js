const express = require("express")
//create object | referance of express
const app = express()
//required dbConnection file and get connection here...
const dbConnection = require("./src/utils/dbConnection")
//call dbConnection function
dbConnection.dbConnection()

//require userSchema

const userSchema = require("./src/models/UserModel") // db.users.find() userSchema.find()
//api --> database record fetch..


app.get("/users",async(req,res)=>{

    //query
    //db.users.find() ==> userSchema.find()
    const users = await userSchema.find() // find funcntion will return promise 

    res.json({
        message:"user api called...",
        data:users
    })
})





//server create...|| call
//express server api create || node native ---> http
//http --> own... || express create...
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on PORT ${PORT}`)
})
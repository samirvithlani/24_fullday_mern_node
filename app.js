const express = require("express")
//create object | referance of express
const app = express()

//API CREATE..

//localhost:3000/test

app.get("/test",(req,res)=>{

    console.log("test api called...")
    res.send("test api called..")

})
const users = [
    {id:1,name:"amit",age:23},
    {id:2,name:"raj",age:25},
    {id:3,name:"jay",age:22},
]
//localhost:3000/users
app.get("/users",(req,res)=>{

    res.json({
        message:"user api called....",
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
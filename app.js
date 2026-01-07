const express = require("express")
//create object | referance of express
const app = express()




//server create...|| call
//express server api create || node native ---> http
//http --> own... || express create...
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on PORT ${PORT}`)
})
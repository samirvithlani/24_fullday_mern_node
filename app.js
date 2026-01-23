const express = require("express")
//create object | referance of express
const app = express()
app.use(express.json()) //global middleware apply json accept 

//required dbConnection file and get connection here...
const dbConnection = require("./src/utils/dbConnection")
//call dbConnection function
dbConnection.dbConnection()

const userRoutes = require("./src/routes/UserRoutes")
//app.use(userRoutes)
app.use("/user",userRoutes)





//server create...|| call
//express server api create || node native ---> http
//http --> own... || express create...
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on PORT ${PORT}`)
})
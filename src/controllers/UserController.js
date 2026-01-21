const userSchema = require("../models/UserModel")

// app.get("/users",async(req,res)=>{

//     //query
//     //db.users.find() ==> userSchema.find()
//     const users = await userSchema.find() // find funcntion will return promise 

//     res.json({
//         message:"user api called...",
//         data:users
//     })
// })

//functions..

const getUsers =async(req,res)=>{


        const users = await userSchema.find()
        res.json({
            message:"user fetched successfully!!",
            data:users
        })
}
module.exports = {
    getUsers
}

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

const addUser = async(req,res)=>{

    //req -->subobjects -->req.body,req.params,req.query,req.headers
    //object -->body
    //url -->params,query
    //auth -->headers
    console.log("rq.body....",req.body)
    //userSchema.insertOne
    const savedUser = await userSchema.create(req.body)
    res.json({
        message:"user addedd",
        data:savedUser
    })


}
module.exports = {
    getUsers,
    addUser
}

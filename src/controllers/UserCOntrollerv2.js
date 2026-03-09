const userSchema = require("../models/UserModelv2")
const bcrypt = require("bcrypt")

const registerUser = async(req,res)=>{

    //req.body
    try{

        const hashedPassword = await bcrypt.hash(req.body.password,10)

        //const savedUser = await userSchema.create(req.body)
        const savedUser = await userSchema.create({...req.body,password:hashedPassword})
        res.status(201).json({
            message:"user saved successfully!!",
            data:savedUser
        })

    }catch(err){
        res.status(500).json({
            message:"error while creating user",
            err:err
        })
    }
}

module.exports = {
    registerUser
}
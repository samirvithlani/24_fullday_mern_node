const userSchema = require("../models/UserModelv2")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "secret"

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
const loginUser = async(req,res)=>{


    const {email,password}=req.body;
    const foundUserFromEmail = await userSchema.findOne({email:email})
    if(foundUserFromEmail){

        const isMatch = await bcrypt.compare(password,foundUserFromEmail.password)
        console.log(isMatch)
        if(isMatch){
            //token gen
            //const token = jwt.sign(foundUserFromEmail.toObject(),secret)
            const token = jwt.sign(foundUserFromEmail.toObject(),secret,{expiresIn:60})
            res.status(200).json({
                message:"login success",
                //data:foundUserFromEmail,
                //role:foundserFromEmail.role
                token:token,
                role:"owner"
            })
        }
        else{
            res.status(401).json({
                message:"invalid credentials",
                
                //role:foundserFromEmail.role
            })
        }

    }
    else{
        res.status(404).json({
            message:"user not found",
        })
    }


}

module.exports = {
    registerUser,
    loginUser
}
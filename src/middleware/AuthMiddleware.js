//controller first --> token ??? yes --> No -->res..
const jwt = require("jsonwebtoken")
const secret = "secret"

const validateToken = (req,res,next)=>{

    const token = req.headers.authorization;
    console.log(token)
    try{

        if(token){

            //Bearer token..
            if(token.startsWith("Bearer ")){

                const tokenValue = token.split(" ")[1] //Bearer amsasoifkdndodnd
                const decodedData = jwt.verify(tokenValue,secret)
                console.log(decodedData)
                next()
            }
            else{
                res.status(401).json({
                    message:"token is not Bearer Token"
                })
            }

        }else{
            res.status(401).json({
                message:"token is missing.."
            })
        }
        
    }catch(err){
        res.status(500).json({
            err:err
        })
    }


}
module.exports = validateToken
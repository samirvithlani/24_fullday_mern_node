const validatioMiddleware = (schema)=>(req,res,next)=>{
    //userValidationSchema

    try{
        schema.parse(req.body)
        next()
    }catch(err){
        res.json({
            err:err.issues
        })
    }
}
module.exports = validatioMiddleware
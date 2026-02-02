//filter(req,res,next)

const testingMiddleware=(req,res,next)=>{

    //req.body
    //req.params
    //req.query
    //req.header
    const token = req.headers.token;
    console.log("token",token)
    if(token){
        next()
    }
    else{
        res.json({
            message:"token is missing !!!"
        })
    }

}
module.exports = {
    testingMiddleware
}
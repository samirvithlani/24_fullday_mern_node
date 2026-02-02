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
const testingMiddleware1=(req,res,next)=>{

    //req.body
    //req.params
    //req.query
    //req.header
    const token = req.headers.token1;
    console.log("token1",token)
    if(token){
        next()
    }
    else{
        res.json({
            message:"token1 is missing !!!"
        })
    }

}
module.exports = {
    testingMiddleware,
    testingMiddleware1

}
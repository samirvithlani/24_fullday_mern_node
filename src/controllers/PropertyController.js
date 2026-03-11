const propertySchema = require("../models/PropertyModel")

const createProperty =async(req,res)=>{

    //const filepath = req.file.path
    console.log(req.files)
    var propImage = req.files.map((file)=>file.path)
    console.log(propImage)
    try{
        //single
    //const savedProperty = await propertySchema.create({...req.body,propertyPhoto:req.file.path})
    //any
    const savedProperty = await propertySchema.create({...req.body,propertyImages:propImage})
    res.status(201).json({
        message:"property created..",
        data:savedProperty
    })
    }catch(err){
        res.status(500).json({
            message:"error while creating property",
            err:err
        })
    }


}
module.exports = {
    createProperty
}
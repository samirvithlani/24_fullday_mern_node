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
const getAllProperties = async(req,res)=>{

    const size = req.query.size;    
    //if size is given find only those
    if(size){
        const property = await propertySchema.find({}).sort("-createdAt").limit(size)
        res.status(200).json({
            message:"properties fetched successfully",
            data:property
        })
    }
    else{
    const property = await propertySchema.find({}).sort("-createdAt")
    res.status(200).json({
        message:"properties fetched successfully",
        data:property
    })
}

}

const searchProperty = async(req,res)=>{

    const { location, type, propertyType, minPrice, maxPrice, minArea, maxArea } = req.query
    try {
        const query = {};
        if (location) query.location = {$regex:location,$options:"i"};
        if (type) query.type = {$regex:type,$options:"i"};
        if (propertyType) query.propertyType = {$regex:propertyType,$options:"i"};
        
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }
        
        if (minArea || maxArea) {
            query.area = {};
            if (minArea) query.area.$gte = Number(minArea);
            if (maxArea) query.area.$lte = Number(maxArea);
        }

        const foundProperties = await propertySchema.find(query).sort("-createdAt")
        res.status(200).json({
            message: "properties fetched successfully",
            data: foundProperties
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"error while finding property"
        })
    }
    


}
module.exports = {
    createProperty,
    getAllProperties,
    searchProperty
}
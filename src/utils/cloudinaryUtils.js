const cloundinary = require("cloudinary").v2;

const uploadToCloud = async(path)=>{

    cloundinary.config({
        api_key:"",
        cloud_name:"",
        api_secret:""
    })

    // const res =  await cloundinary.uploader.upload(path)
    // return res
    return await cloundinary.uploader.upload(path)

} 

module.exports ={uploadToCloud}
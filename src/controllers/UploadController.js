const multer = require("multer")

const storage = multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage:storage,
    //filtr
}).single("file") //filedName


//api
const uploadFile = (req,res)=>{

    upload(req,res,(err)=>{
        if(err){
            res.json({
                message:"error while upload file.."
            })
        }
        else{
            res.json({
                message:"file uploaded successfully..",
                data:req.file
            })
        }
    })


}
module.exports ={
    uploadFile
}

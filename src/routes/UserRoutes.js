const router = require("express").Router()
const userController = require("../controllers/UserController")
const testMiddleware = require("../middleware/TestMiddleware")
const validatioMiddleware = require("../middleware/zodValidationMiddleware")
const userValidationSchema = require("../validationschema/UserValidationSchema")
const uploadMiddleware = require("../middleware/UploadMiddleware")
const validateToken = require("../middleware/AuthMiddleware")

// app.get("/users",async(req,res)=>{
//app --->alter-->router
router.get("/users",validateToken,userController.getUsers)
//router.post("/user",validatioMiddleware(userValidationSchema),userController.addUser)

router.post("/user",uploadMiddleware.upload.single("file"),userController.addUser)
router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)
router.put("/addhobby/:id",userController.addHobby)
module.exports = router
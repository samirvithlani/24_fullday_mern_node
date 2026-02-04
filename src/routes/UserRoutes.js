const router = require("express").Router()
const userController = require("../controllers/UserController")
const testMiddleware = require("../middleware/TestMiddleware")
const validatioMiddleware = require("../middleware/zodValidationMiddleware")
const userValidationSchema = require("../validationschema/UserValidationSchema")

// app.get("/users",async(req,res)=>{
//app --->alter-->router
router.get("/users",testMiddleware.testingMiddleware,testMiddleware.testingMiddleware1,userController.getUsers)

router.post("/user",validatioMiddleware(userValidationSchema),userController.addUser)
router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)
router.put("/addhobby/:id",userController.addHobby)
module.exports = router
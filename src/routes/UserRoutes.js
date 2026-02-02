const router = require("express").Router()
const userController = require("../controllers/UserController")
const testMiddleware = require("../middleware/TestMiddleware")
// app.get("/users",async(req,res)=>{
//app --->alter-->router
router.get("/users",testMiddleware.testingMiddleware,userController.getUsers)

router.post("/user",userController.addUser)
router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)
router.put("/addhobby/:id",userController.addHobby)
module.exports = router
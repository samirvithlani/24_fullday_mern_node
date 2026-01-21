const router = require("express").Router()
const userController = require("../controllers/UserController")
// app.get("/users",async(req,res)=>{
//app --->alter-->router
router.get("/users",userController.getUsers)
module.exports = router
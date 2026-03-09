const router = require("express").Router()
const userController = require("../controllers/UserCOntrollerv2")
router.post("/register",userController.registerUser)
module.exports = router
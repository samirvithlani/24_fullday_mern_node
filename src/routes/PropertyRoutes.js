const router = require("express").Router()
const propertyController = require("../controllers/PropertyController")
const upload = require("../middleware/uploadMiddlewarev2")
//router.post("/add",upload.single("propertyImage"),propertyController.createProperty)
router.post("/add",upload.any("propertyImage"),propertyController.createProperty)
router.get("/all",propertyController.getAllProperties)
router.get("/search",propertyController.searchProperty)
module.exports = router
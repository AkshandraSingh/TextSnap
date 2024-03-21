const express = require("express")

const mainController = require("../controllers/mainController")
const { upload } = require("../middlewares/userImageStorage")

const mainRouter = express.Router()

mainRouter.post("/extractText", upload.single("image"), mainController.extractText)

module.exports = mainRouter

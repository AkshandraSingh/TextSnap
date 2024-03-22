const express = require("express")

const mainController = require("../controllers/mainController")
const { upload } = require("../middlewares/userImageStorage")

const mainRouter = express.Router()

mainRouter.post("/extractText", upload.single("image"), mainController.extractText)
mainRouter.post("/extractTextSave", upload.single("image"), mainController.extractTextSave)
mainRouter.post("/extractTextSaveTxt", upload.single("image"), mainController.extractTextSaveTxt)

module.exports = mainRouter

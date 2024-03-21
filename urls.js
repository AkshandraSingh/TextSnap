const express = require("express")

const mainRouter = require("./routes/mainRoute")

const commonRouter = express.Router()

commonRouter.use("/textSnap", mainRouter)

module.exports = commonRouter

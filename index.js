require("dotenv").config()
const express = require("express")

require("./config/modelConfig")
const urls = require("./urls")

const app = express()

app.use(express.json())
app.use("/", urls)

const PORT = process.env.PORT || 9001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

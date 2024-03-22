const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/TextSnap")

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB ✅")
})

mongoose.connection.on("error", (err) => {
    console.log("Error While connecting mongoDB ❌")
})

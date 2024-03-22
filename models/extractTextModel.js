const mongoose = require("mongoose")

const extractTextSchema = new mongoose.Schema({
    extractText: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
})

extractTextSchema.set('timestamps', true)

module.exports = mongoose.model('extractText', extractTextSchema)


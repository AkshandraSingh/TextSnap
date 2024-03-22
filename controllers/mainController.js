const { createWorker } = require('tesseract.js');

const extractTextSchema = require("../models/extractTextModel")

module.exports = {
    extractText: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).send({
                    success: false,
                    message: 'Missing image in request'
                });
            }
            const imageData = req.file.path;
            const worker = await createWorker("eng");
            const output = await worker.recognize(imageData);
            await worker.terminate();
            res.status(200).send({
                success: true,
                message: "Text extracted successfully ✅",
                extractText: output.data.text,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                success: false,
                message: 'Error extracting text',
            });
        }
    },

    extractTextSave: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).send({
                    success: false,
                    message: 'Missing image in request'
                });
            }
            const imageData = req.file.path;
            const worker = await createWorker("eng");
            const output = await worker.recognize(imageData);
            const extractTextData = new extractTextSchema({
                extractText: output.data.text,
                filePath: imageData,
            })
            await extractTextData.save();
            await worker.terminate();
            res.status(200).send({
                success: true,
                message: "Text extracted and saved successfully ✅",
                extractTextData: extractTextData
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                success: false,
                message: 'Error extracting text',
            });
        }
    }
};

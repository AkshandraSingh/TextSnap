const tesseract = require("tesseract.js")

module.exports = {
    extractText: async (req, res) => {
        try {
            const { image } = req.file
            const worker = await tesseract.createWorker('eng');
            const ret = await worker.recognize(image);
            console.log(ret)
            await ret.terminate()
            res.status(200).send({
                success: true,
                message: "Text extracted successfully ✅",
                extractText: ret.data.text,
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.message
            })
        }
    }
}
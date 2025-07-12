
// const aiService = require("../services/ai.service");

// module.exports.getReview = async (req, res) => {
//     try {
//         const code = req.body.code;

//         if (!code) {
//             return res.status(400).json({ error: "code is missing" });
//         }

//         const response = await aiService(code); // Direct function call
//         res.json({ response });
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error", details: error.message });
//     }
// };
const aiService = require("../services/ai.service")


module.exports.getReview = async (req, res) => {

    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(code);


    res.send(response);

}
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });




const apicall = async (userPrompt) => {
  try {
    const result =await model.generateContent(userPrompt);
    return result.response.text();
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
  }
};


module.exports = apicall
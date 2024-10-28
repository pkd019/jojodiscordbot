const express = require('express');
const apiroutes = express.Router();
require("dotenv").config();
const apicall = require("./funcai.")
// require("dotenv").config();
apiroutes.post("/ai", async (req, res) => {
  const userPrompt = req.body.userPrompt;
  try {
    const result = await apicall(userPrompt);
    res.json({
      success: true,
      response: result,
    });
    console.log("API Response:", result);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ success: false, error: "API call failed" });
  }
});

module.exports = apiroutes;

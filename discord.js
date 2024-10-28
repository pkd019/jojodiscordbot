const { Client, GatewayIntentBits } = require('discord.js');
const apicall = require("./funcai.")
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageTyping
  ]
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; 

  if (message.content.toLowerCase().includes("jojo")){ try {
    message.channel.sendTyping();
    const response = await apicall(message.content); 
    if (response) {

      await message.channel.send(response); 
      console.log(response);
    } else {
      console.log("No response received from apicall");
    }
  } catch (error) {
    console.error("Error in apicall:", error);
  }}
});

module.exports = client;

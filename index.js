const express = require("express");
const routes =  require("./route");
const client = require("./discord")

require("dotenv").config();

const app = express();
app.use(express.json());




app.use("/chat",routes);

client.login(process.env.DISCORD_TOKEN).then(() => {
  console.log("Discord bot logged in.");
}).catch(console.error);



app.listen(4000, () => {
  console.log(process.env.API_KEY);
  console.log("app run at 4000");
});

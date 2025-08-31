
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');
    console.log('Connected to MongoDB');

    let chat1 = new Chat({
      from: "Alice",
      to: "Bob",
      msg: "Hello, Bob!",
      created_at: new Date()
    });

    await chat1.save();
    console.log('Chat message saved');
  } catch (err) {
    console.log(err);
  }
}

main().then(() => {
  app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
  });

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(8080, () => {
    console.log('Server is running on port 8080');
  });
}).catch(err => console.log(err));
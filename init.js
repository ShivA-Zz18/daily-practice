const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Chat = require('./models/chat.js');

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

main();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

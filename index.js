const express = require('express');
const app = express();
const port =  3000;

app.get("/register", (req, res) => {
  res.send('Hello World!');
});


app.post("/register", (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

let posts = [
    {
        id: 1,
        username: "shiva",
        content: "i love watching movie"
    },
    {
        id: 2,
        username: "aman",
        content: "i love watching coding"
    },
    {
        id: 3,
        username: "samnth",
        content: "my goal is to get a job in a good company"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts: posts });
});

app.listen(port, () => {
    console.log("Listening to port:", port);
});

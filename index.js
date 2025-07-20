const { log } = require("console");
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
        id: "1a",
        username: "shiva",
        content: "i love watching movie"
    },
    {
        id: "2b",
        username: "aman",
        content: "i love watching coding"
    },
    {
        id: "3c",
        username: "samnth",
        content: "my goal is to get a job in a good company"
    }   
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts: posts });
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})

app.post("/posts",(req,res)=>{
let {username,content} = req.body;
posts.push({username,content});
res.redirect("/posts")

}); 

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    // Render the page and send the final response
    res.render("show.ejs", { post: post }); 
});



app.listen(port, () => {
    console.log("Listening to port:", port);
});

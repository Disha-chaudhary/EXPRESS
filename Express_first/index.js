// const express = require("express");
// const app = express();

// app.get("/",(req,resp)=>{
//     resp.send("hello!! welcome to page");
// })

// app.get("/home",(req,resp)=>{
//     resp.send("hello!! welcome from home page");
// })

// app.get("/about",(req,resp)=>{
//     resp.send("hello!! welcome from about page");
// })

// app.get("/search",(req,res)=>{
//     const searchKey = req.query.key;

//     if(!searchKey){
//         return res.send("<h1>No search key provided</h1>");
//     }

//     res.send(`<h1>Search results for: ${searchKey}</h1>`);
//     //http://localhost:5200/search?name=disha&age=21
    
// });


// app.use((req,resp)=>{
//     resp.status(404).send("<h1>Page not found</h1>");
// })
// app.listen(5200);

const express = require('express');
const app = express();
const path = require('path');

const path2 = path.join(__dirname, "Components");

app.use(express.static(path2));

app.get("/", (req, res) => {
    res.send(path.join(__dirname, "Components", Home.html));
});

app.get("/about", (req, res) => {
    res.send(path.join(__dirname, "Components", about.html));
});

app.get("/signup",(req,res)=>{
    res.send(path,join(__dirname,"Components", signup.html));
})
app.listen(5200, () => {
    console.log('Server is running on port 5200');
});

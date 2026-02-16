const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(publicPath,"signup.html"));
})

//submit from GET
//postman
//vercel or render ke thorugh project ko live 
//mongoDB-compass
a

app.get("/submit",(req,res)=>{
    const {Firstname,Lastname,gender}= req.query});

    res.send(
        `<h2>Form Submitted Successfully!!</h2>
        <p>Firstname : ${Firstname}</p>`
    )
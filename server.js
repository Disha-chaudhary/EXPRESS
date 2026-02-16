const express = require("express");
const path = require("path");
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname,'public')));



//submit from GET
//postman
//vercel or render ke thorugh project ko live 
//mongoDB-compass


app.post("/submit",(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const gender = req.body.gender;

    const data = `name:${name},email:${email}\n`;
    
    fs.appendFile("data.txt",data,(err)=>{
        if(err){
            console.log("Error saving data");
            res.send("Error saving data");
        }
        else{
            console.log("Data saved Successfullyy!!!");
        }
    });
});
app.listen(5600,()=>{
    ("server running on port 5400");
})
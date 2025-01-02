const express = require("express");
const app = express();
const path = require("path");


const port = 8080;

app.listen(port,()=>{
    console.log("listening on")
})

app.set("views", path.join(__dirname, "/views"))
app.set("view engine ","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/hellow",(req,res)=>{
    res.send("hellow");
});
app.get("/rolldice",(req,res)=>{
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{ num: diceValue});
});

app.get("/ig/:username",(req,res)=>{
    let { username } = req.params; 
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("home.ejs",{ data });
    }else{
        res.render("error.ejs");
    }   
});
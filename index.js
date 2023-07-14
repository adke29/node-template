//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

//setup express
const app = express();
app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//setup mongoose
const dbName = "testDB";
mongoose.connect("mongodb://127.0.0.1:27017/" + dbName);
const mySchema = new mongoose.Schema({
    title:{type: String,required:true},
    content: String
})

const MyModels =mongoose.model("collectionsName",mySchema);


app.get("/",(req,res)=>{
    res.send("Hello world");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log("Server is running in port " + PORT);
})
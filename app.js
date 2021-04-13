//jshint esversion:6

const express = require("express");
const request = require("request");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));


//TODO
app.get("/", (req,res) => {
    res.render("home");
});

app.get("/chapter1", (req,res) => {
  res.render("chapter1");
});

app.get("/chapter2", (req,res) => {
  res.render("chapter2");
});

app.get("/chapter3", (req,res) => {
  res.render("chapter3");
});

app.get("/chapter4", (req,res) => {
  res.render("chapter4");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
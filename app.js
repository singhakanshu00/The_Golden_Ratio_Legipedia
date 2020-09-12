const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/goldenDB", {useNewUrlParser: true, useUnifiedTopology: true });


const feedSchema = {
  firstName: String,
  lastName: String,
  email: String,
  subject: String,
  feedBack: String
}

const Feed = mongoose.model("Feed", feedSchema);

app.get("/", (req, res)=>{
    res.render("home");
});

app.get("/examples", (req,res)=>{
    res.render("examples");
});

app.get("/examples/:alt", (req,res)=>{
    let page = req.params.alt;
    if(page == "logo"){
        res.render("logo");
    }
    if(page=="flowers"){
        res.render("flowers");
    }
    if(page=="animals"){
        res.render("animals");
    }
    if(page=="art"){
        res.render("art");
    }
    if(page=="real"){
        res.render("reaLife");
    }
});


app.get("/contacts", (req,res)=>{
    res.render("contacts");
});

app.post("/contacts", (req,res)=>{
    const fName = req.body.FName;
    const lName = req.body.LName;
    const email = req.body.email;
    const sub = req.body.subject;
    const feedback = req.body.feedback;

    const feed = new Feed({
        firstName: fName,
        lastName: lName,
        email: email,
        subject: sub,
        feedBack: feedback   
    });

    feed.save();
    
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
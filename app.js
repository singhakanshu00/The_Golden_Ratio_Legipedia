const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


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

mongoose.connect("mongodb+srv://akanshu00:7699662622@2000@cluster0.rh9q5.mongodb.net/goldenDb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true })
    //.set("useCreateIndex", true)
    .then(()=>{
        let port = 3000;
        
        app.listen(port, function(){
            console.log("app successfully started");
        });
    })
    .catch(err => {
        console.log(err);
    });
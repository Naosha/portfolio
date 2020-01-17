var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));



app.get("/", function(req, res){
    res.render("landing");
});

app.get("/home", function(req, res){
    res.render("home", {page: 'home'});
});

app.get("/about", function(req, res){
    res.render("about", {page: 'about'});
});

app.get("/portfolio", function(req, res){
    res.render("portfolio", {page: 'portfolio'});
});

app.get("/tech", function(req, res){
    res.render("tech", {page: 'tech'});
});

app.get("/contact", function(req, res){
    res.render("contact", {page: 'contact'});
});



app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Server listening")
});
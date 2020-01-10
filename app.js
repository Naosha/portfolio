var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/home", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/portfolio", function(req, res){
    res.render("portfolio");
});

app.get("/tech", function(req, res){
    res.render("tech");
});

app.get("/contact", function(req, res){
    res.render("contact");
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Server listening")
});
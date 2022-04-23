/*jshint esversion: 6 */
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const app = express();
const ejs = require("ejs");
var val = [];
var log_user = "";
var data ;
app.use(express.static('public'));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: "blogwebsitesession",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb://localhost:27017/regDB",{useNewUrlParser: true});
const regSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter the required value']
  }
});

const catSchema = new mongoose.Schema({
  username: String,
  categories: {
    type: [String], default: []
  }
});

const blogSchema = new mongoose.Schema({
  username: String,
  date: Date,
  title: String,
  blog: String,
  label: String
});

regSchema.plugin(passportLocalMongoose);

const user = mongoose.model("users",regSchema);
const user_choices = mongoose.model("user_choices", catSchema);
const user_blogs = mongoose.model("user_blogs", blogSchema);

passport.use(user.createStrategy());
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());



app.listen(3000, function(){
  console.log("The server is running at port 3000");
});
app.get('/',function(req,res){
  res.render("homepage");
});
app.post('/reg',function(req,res){
  user.register({
    username: req.body.username,
  }, req.body.password, function(err,user){
    if(err){
      console.log(err);
      res.redirect("/");
    }
    else{
      passport.authenticate("local")(req,res,function(){
      res.redirect("/blog_page");
      });
    }
    if(req.isAuthenticated()){
      log_user = req.body.username;
    }
  });
});
app.post('/login',function(req,res){
  const user_acc = new user({
    username: req.body.username,
    password: req.body.password
  });
  req.login(user_acc,function(err,user){
    if(err){
      console.log(err);
      res.redirect("/");
    }
    else{
      passport.authenticate("local")(req,res,function(){
      res.redirect("/blog_page");
      });
    }
  });
  if(req.isAuthenticated()){
    log_user = req.body.username;
  }
});


app.post('/blog_page',function(req,res){
  val = req.body.choices;
  var arr = [];
  val.forEach(item => arr.push(item));

  if(val.length >= 3){
    const user_choice = new user_choices({
      username: log_user,
      categories: arr
    });
    user_choice.save();
    res.redirect("/mainpage");
  }
});


app.get("/blog_page",function(req,res){
  if(req.isAuthenticated()){
    res.render("blog_page");
  }
  else{
    res.redirect("/login");
  }
});

app.get("/ss.html",function(req,res){
  res.sendFile(__dirname +  '/ss.html');
});

app.get("/compose",function(req,res){
  res.render("compose");
});

app.get("/read_blogs",function(req,res){
  res.render("read_blogs");
});

app.post("/ss.html",function(req,res){
  const user_choice = new user_choices({
    username: "hams",
    categories: []
  });
  user_choice.save();
});

app.get('/reg',function(req,res){
  res.render("reg");
});

app.get('/mainpage',function(req,res){
  user_choices.findOne({"username": log_user},function(err,user){
    if(err){
      console.log(err);
    }
    else{
      val = user.categories;
    }
  });
  user_blogs.find({"label":val},function(err,user_data){
    if(err){
      console.log(err);
    }
    else{
      console.log(user_data);
      data = user_data;
    }
  });
  res.render("mainpage",{btn_length: val, usr_data: data});
});

app.get('/login',function(req,res){
  res.render("login");
});

// module.exports = {val};

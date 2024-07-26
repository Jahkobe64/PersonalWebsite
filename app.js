const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/test').
  catch(error => handleError(error));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/projects', (req, res) => {
  res.render('projects.ejs');
});

app.get('/aboutme', (req, res) => {
  res.render('aboutme.ejs');
});


app.listen(3000, (req, res) => {
    console.log("port 3000 active!");
})
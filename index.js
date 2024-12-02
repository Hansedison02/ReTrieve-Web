const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded());
//layouts


//routes
const homeRoute = require('./routes/index');
app.use('/', homeRoute)

app.listen(process.env.PORT || 4000, function(){
  console.log("server is active");
});

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config.js');
var routes = require('./routes/index');
var User = require('./models/users');
var Proj = require('./models/projects')

var app = express();

var port = process.env.PORT || 80;
//DATABASE INIT
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

console.log('Magic happens at http://localhost:' + port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*app.get('/setup', function(req, res) {
  var nick = new User({
    name: 'tournevis',
    password: 'C est le meme que le 1er du travail',
    admin: true
  });
  nick.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
    res.json({ success: true });
  });
}); */

app.post('/project',function(req,res){
  console.log("got a post \n");
  //console.log(req);
  User.findOne({
    name: req.body.name,
    //pass: r eq.body.pass
  },function(err, proj) {
    if (err) throw err;
    if (!proj) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else{
      var yeah = new Proj({
        title: req.body.title,
        content: req.body.content,
        url: req.body.url,
        imgPath: req.body.imgPath
      });
      yeah.save(function(err){
        if (err) throw err;
        console.log('Project Saved');
        res.json({ success: true });
      });
    }
  });
});

app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;

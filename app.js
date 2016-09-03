var express = require('express');
var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
require('./config/passport');

var app = express();

/*
 *  Database connection
 */

require('./models/posts');
require('./models/Comments');
require('./models/Users');
require('./models/Gear');
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/news');

/*
 *  Middleware
 */

// login setup
app.use(passport.initialize());

// logger
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
// setup the logger
app.use(logger('combined', {stream: accessLogStream}))
app.use(logger('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// TODO: add favicon
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
 *  Routes
 */

var router = require('./router/index');
var gear = require('./router/gear-routes');
var users = require('./router/users');
var posts = require('./router/post-routes');
var comments = require('./router/comment-routes');

app.use('/', router);
app.use('/gear', gear);
app.use('/user', users);
app.use('/posts', posts);
app.use('/posts/:post/comments', posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/*
 *  Error Handlers
 */

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
// don't print stacktraces for user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

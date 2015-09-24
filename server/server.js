require('node-monkey').start({host: "127.0.0.1", port:"50500"});
var util = require("util");

var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config');

var routes = require('./routes/index');

var app = express();

app.use(express.static(process.env.NODE_PATH + '/public'));

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  console.log(util.inspect({message: err.message, error: err, file: req.originalUrl}));
  //next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    //res.render('error', {
    //  message: err.message,
    //  error: err
    //});
    console.log(util.inspect({message: err.message, error: err, stack: err.stack}))
    next(err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  //res.render('error', {
  //  message: err.message,
  //  error: {}
  //});
});

module.exports = app;

var server = app.listen(3000, function () {
  //var host = server.address().address;
  //var port = server.address().port;

  var host = process.env.IP || config.hostname || "127.0.0.1";
  var port = process.env.PORT || config.port || 3000;

  console.log('The Slide Guy app listening at http://%s:%s', host, port);
});

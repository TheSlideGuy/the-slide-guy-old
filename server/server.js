/**
 * The application starts here!
 *
 * @see README.md
 */

var express = require('express');
var path = require('path');

var morgan = require('morgan');
var util = require('util');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config');


var app = express();

app.use(express.static(process.env.NODE_PATH + '/public'));

//view engine setup

app.set('views', process.env.NODE_PATH + '/server/views');
app.set('view engine', 'jade');

//log HTTP requests
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//use router
var routes = require('./routes/index');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = Error('Not Found');
  err.status = 404;
  console.log(util.inspect({message: err.message, error: err, file: req.originalUrl}));
  //next(err);
  res.render('error.jade', {
    message: err.message,
    error: err
  });
  //res.send('404 Not Found Error');
});

//error handler

var error = require('./lib/error');

if (app.get('env') === 'development') {

  require('node-monkey').start({
    host: '127.0.0.1',
    port: '50500'
  });

  app.use(error.showError);
}

app.use(error.logErrors);

// ====== start listening for HTTP requests!

var server = app.listen(3000, function() {

  var host = process.env.IP || config.hostname || '127.0.0.1';
  var port = process.env.PORT || config.port || 3000;

  console.log('The Slide Guy app listening at http://%s:%s', host, port);
});

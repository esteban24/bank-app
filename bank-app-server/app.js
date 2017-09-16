var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require(__dirname + '/db');

var api = require(__dirname + '/routes/api');

var app = express();

/**
 * Database sync
 */
db.sync();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send(404, { status: '404', message: 'not found' });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('Internal server error');
});

module.exports = app;

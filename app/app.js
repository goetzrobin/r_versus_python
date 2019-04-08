var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var menuModel = require('./models/menu');

var indexRouter = require('./route_controllers/index');
var techRouter = require('./route_controllers/technique');
var teamRouter = require('./route_controllers/team');
var comparisonRouter = require('./route_controllers/comparison');
var apiRouter = require('./route_controllers/api');

var menuMiddleware = function(req,res,next){
  var menu = menuModel.getMenu();
  req.data = {...req.data, menu};
  next();
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// CUSTOM MIDDLEWARE
app.use(menuMiddleware);

app.use('/', indexRouter);
app.use('/technique', techRouter);
app.use('/comparison', comparisonRouter);
app.use('/api', apiRouter);
app.use('/team', teamRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{data: req.data});
});

module.exports = app;

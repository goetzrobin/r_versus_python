var express = require('express');
var router = express.Router();
var menuModel = require('../models/menu')
/* GET home page. */
router.get('/menu', function(req, res, next) {
  var menu = menuModel.getMenu();
  res.send(menu);
});

module.exports = router;

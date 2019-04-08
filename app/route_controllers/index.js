var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./sites/index', {data: req.data});
});

module.exports = router;

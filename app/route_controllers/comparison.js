var express = require('express');
var router = express.Router();
var comparisonModel = require('../models/comparison');
var techniqueModel = require('../models/detail_view');
/* GET home page. */
router.get('/', function (req, res, next) {
  var scores = comparisonModel.getScores();
  for (var key in scores) {
    if (scores.hasOwnProperty(key)) {
      scores[key] = {
        ...scores[key],
        url: "/technique/" + key
      };
      console.log(scores[key])
    }
  }
  req.data.techniques = techniqueModel.getAllTechniques(true);
  req.data.scores = scores;
  res.render('./sites/comparison', {
    data: req.data
  });
});

router.get('/raw', function (req, res, next) {
  var scores = comparisonModel.getScores();
  for (var key in scores) {
    if (scores.hasOwnProperty(key)) {
      scores[key] = {
        ...scores[key],
        url: "/technique/assoc_rule"
      };

    }
  }
  res.json(scores);
})


module.exports = router;
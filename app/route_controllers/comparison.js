var express = require('express');
var router = express.Router();
var comparisonModel = require('../models/comparison');
var techniqueModel = require('../models/detail_view');
/* GET home page. */
router.get('/', function (req, res, next) {
  var scores = comparisonModel.getScores();
  var average_r = 0.0;
  var average_py = 0.0;
  var count = 0;
  for (var key in scores) {
    if (scores.hasOwnProperty(key)) {
      scores[key] = {
        ...scores[key],
        url: "/technique/" + key
      };
      average_r += parseFloat(scores[key].total_r);
      average_py += parseFloat(scores[key].total_python);
      count++;
    }
  }

  req.data.final_score_r = Math.round(average_r * 10.0 / count) / 10.0;
  req.data.final_score_py = Math.round(average_py * 10.0 / count) / 10.0;
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
        url: "/technique/"+key
      };

    }
  }
  res.json(scores);
})


module.exports = router;
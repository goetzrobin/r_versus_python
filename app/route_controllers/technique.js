var express = require('express');
var router = express.Router();
var gdv = require('../models/detail_view').getDetailView;
var pug = require('pug');

/* GET home page. */
router.get('/:technique_id', function (req, res, next) {
  var technique = gdv(req.params.technique_id);

  var total_r = 0.0;
  var total_python = 0.0;

  var jupyter_url = "http://"+"localhost"+":8888/notebooks";
  technique.scores.forEach((score) => {
    total_r += (parseFloat(score.total_r)*score.weight);
    total_python += (parseFloat(score.total_python)*score.weight);
  })

  total_r = (Math.round(total_r * 10.0) /10.0).toFixed(1);;
  total_python = (Math.round(total_python * 10.0) /10.0).toFixed(1);
  console.log(total_r)
  console.log(total_python)

  
  r_source = jupyter_url + technique.code.r;
  py_source = jupyter_url + technique.code.py;


  technique = {
    ...technique,
    total_r,
    total_python,
    r_source,
    py_source
  };
  var data = {
    ...req.data,
    technique
  };
  console.log(technique)
  res.render('./sites/technique', {
    data: data,
    rationale: pug.renderFile('./views/rationales/' + technique.rationale + '.pug')
  });

});

module.exports = router;
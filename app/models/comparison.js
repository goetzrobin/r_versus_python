
var technique = require("./detail_view");


function getScores() {
    var techniques = technique.getAllTechniques();
    var techniques_with_scores = {};
    for (var key in techniques) {
        if (techniques.hasOwnProperty(key)) 
        {
            var current_technique = techniques[key];
            techniques_with_scores = {...techniques_with_scores, [key]: getTechniqueScore(current_technique)}
        }
    }
    return techniques_with_scores;
    }
 
function getTechniqueScore(technique){
    var total_python = 0;
    var total_r = 0;
    technique.scores.forEach((score) => {
        total_r += (parseInt(score.total_r)*score.weight);
        total_python += (parseInt(score.total_python)*score.weight);
      });
      total_r = (Math.round(total_r * 10.0) /10.0).toFixed(1);
      total_python = (Math.round(total_python * 10.0) / 10.0).toFixed(1);
    return {
        name: technique.name,
        total_r,
        total_python,
    }
}

  module.exports.getScores = getScores;
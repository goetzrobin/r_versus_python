$(() => {
    $.getJSON(window.location.href + "/raw",function(scores) {
        console.log(scores);
        var labels = [];
        var datasets =  [{
            label: "R",
            data: [],
            backgroundColor: 'rgba(164,30,53,0.8)' 
        },
        {
            label: "Python",
            data: [],
            backgroundColor: 'rgba(34,34,34,0.6)'
        }]
        for (var key in scores) {
            if (scores.hasOwnProperty(key)) {
              labels = [...labels, scores[key].name];
              var r_set = datasets[0];
              var py_set = datasets[1];

              r_set.data = [...r_set.data,scores[key].total_r];
              py_set.data = [...py_set.data,scores[key].total_python];
        
            }
          }
        var data = {
            labels,
            datasets
        };
        console.log(data)
        buildChart(data);
    });
   
})


function buildChart(data) {
    var ctx = document.getElementById('comparison_chart').getContext('2d');
    var options = {
        scale: {
            display: true,
            ticks: {
                beginAtZero: true,
                stepSize: 1,
                max: 5
            }
        },
        tooltips: {
            custom: function(tooltip) {
              if (!tooltip) return;
              // disable displaying the color box;
              tooltip.displayColors = false;
            },
        }
    };
    var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
    })
}
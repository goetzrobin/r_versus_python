$(document).ready(function () {
    showSpinnerWhileIFrameLoads();
});

function showSpinnerWhileIFrameLoads() {
    var iframes = $('iframe');
    if (iframes.length) {
        for(var i =0 ; i< iframes.length ; i++){
            $(iframes[i]).before('<div class=\'spinner\'><i class=\'fa fa-spinner fa-spin fa-3x fa-fw\'></i></div>');
            $(iframes[i]).on('load', function() {
                $(".spinner").hide();
            });
        }
    }
}
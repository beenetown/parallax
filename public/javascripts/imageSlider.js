
function timedSlider(images, time) {
  var i = 0;
  setInterval(function(){
    i ++;
    if(i >= images.length) {
      i = 0;
    };
    $('#home').css('background', "url('/public/images/large/" + images[i] + "') no-repeat center center fixed");
  }, time);
}

$(document).ready(function(){
  timedSlider(['acoustic_1920.png', 'desk_1920.png', 'drums_1920.png', 'mics_1920.png', 'speakers_1920.png', 'home_1300.png'], 7000);
});
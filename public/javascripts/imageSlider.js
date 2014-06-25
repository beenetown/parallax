
var firstTimeThrough = true;
function timedSlider(images, time) {
  var i = 0;
  setInterval(function () {
    i++;
    if (i >= images.length) {
      i = 0;
      firstTimeThrough = false;
    }
    if (firstTimeThrough) {
      $('head').append('<img style="display: none;" src="/public/images/large/' + images[i + 1] + '">');
    }
    $('#home').css({'background': "url('/public/images/large/" + images[i] + "') no-repeat center center fixed",
                    "-webkit-background-size": "cover",
                    "-moz-background-size": "cover",
                    "-o-background-size": "cover",
                    "background-size": "cover"});
  }, time);
}

$(document).ready(function () {
  if (!matchMedia('only screen and (max-device-width: 700px)').matches) {
    timedSlider(['acoustic_1920.png', 'desk_1920.png', 'drums_1920.png', 'mics_1920.png', 'speakers_1920.png', 'home_1920.png'], 7000);
  }
});
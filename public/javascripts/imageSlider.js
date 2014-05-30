
function timedSlider(images, time) {
  var i = 0;
  $('#timedSlider').html("<img src='public/images/carousel" + images[i] + "'>"); 

  setInterval(function(){
    i ++;
    if(i >= images.length) {
      i = 0;
    };
    $('#timedSlider').html("<img src='public/images/carousel" + images[i] + "'>"); 
  }, time);
}

$(document).ready(function(){
  timedSlider(['photo.png', 'photo-2.png'], 5000);
});
var myScroll;
function loaded () {
  // if (matchMedia('only screen and (max-device-width: 700px)').matches) {
    myScroll = new IScroll('#scroller', {
      mouseWheel: false,
      momentum: false,
      probeType: 2
    });

    alert('loaded');

    myScroll.on('scroll', function () {
      $('#position').html('position: ' + this.y);
    });
  // }   
}
$(document).ready(function () {
  loaded();
});
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

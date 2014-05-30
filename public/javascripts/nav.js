$(document).ready(function() {
  $('.nav-li').hover(function() {
    id = $(this).attr('id');
    $('#popup-' + id).toggle();
  });
});
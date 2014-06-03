function setNav() {
  var pageHeight = $('.page').outerHeight();
  var dividerHeight = $('.divider').outerHeight();
  var totalHeight = pageHeight + dividerHeight;

  var page = Math.ceil(($(window).scrollTop() - (pageHeight-200))/totalHeight) + 1;
  if (('#'+ page) != $('.active').attr('id')) {
    $('.nav-li').removeClass('active');
    $('#' + page).addClass('active');     
  };
};

function navPointer() {
  var visited = sessionStorage["visited"]
  if(!visited) {
    sessionStorage["visited"] = true
    window.setTimeout(function() {
      $('#nav-pointer').fadeIn(2000);
      $('#nav-pointer').fadeOut(5000);
    }, 5000);
  };
};

function popup() {
  $('.nav-li').hover(function() {
    id = $(this).attr('id');
    $('#popup-' + id).toggle();
  });
}

$(document).ready(function() {
  popup();
  navPointer();
  $(window).scrollTop();
  $(window).scroll(setNav);
  $('#home h1').fadeOut(7000);
  $('#menu').fadeIn(7000);
});
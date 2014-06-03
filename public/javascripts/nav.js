function setNavandFade() {
  var pageHeight = $('.page').outerHeight();
  var dividerHeight = $('.divider').outerHeight();
  var totalHeight = pageHeight + dividerHeight;

  var page = Math.ceil(($(window).scrollTop() - (pageHeight*0.995))/totalHeight) + 1;
  if (('#'+ page) != $('.active').attr('id')) {
    $('.nav-li').removeClass('active');
    $('#' + page).addClass('active');
    // console.log((page * pageHeight)/$(window).scrollTop());
    $('.' + page).css({'opacity':(((page * totalHeight)-$(window).scrollTop())/600)});
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
  $(window).scroll(setNavandFade);
  $('#home h1').fadeOut(7000);
  $('#menu').fadeIn(7000);
  $('.nav-li').click(function() {
    $('.page').css({'opacity': '1'});
  });
});
function fadeActivePage() {

}

function numberPages() {
  if (!$('page_1')[0]) {
    $('.page').each(function(index) {
      $(this).addClass("page_" + (index + 1));
      // console.log("page_" + (index + 1));
    });
  }
};

function setNavandFade() {
  //this dynamically sets a page height
  var pages = [0]
  $('.page').each(function(index) {
    pages[index+1] = $(this).outerHeight() + pages[index];
    // console.log(pages[index+1]);
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() < pages[1]) {
      if($('#home') != $('.active').attr('id')){
        $('.nav-li').removeClass('active');
        $('#1').addClass('active');
      };
    } else if ($(window).scrollTop() < pages[2] && $(window).scrollTop() >= pages[1]) {
      if($('#studio-page') != $('.active').attr('id')){
        $('.nav-li').removeClass('active');
        $('#2').addClass('active');
      };
    } else if ($(window).scrollTop() < pages[3] && $(window).scrollTop() >= pages[2]) {
      if($('#gear-page') != $('.active').attr('id')){
        $('.nav-li').removeClass('active');
        $('#3').addClass('active');
      };
    } else if ($(window).scrollTop() < pages[4] && $(window).scrollTop() >= pages[3]) {
      if($('#live-page') != $('.active').attr('id')){
        $('.nav-li').removeClass('active');
        $('#4').addClass('active');
      };
    } else if ($(window).scrollTop() < pages[5] && $(window).scrollTop() >= pages[4]) {
      if($('#about-page') != $('.active').attr('id')){
        $('.nav-li').removeClass('active');
        $('#5').addClass('active');
      };
    } else if ($(window).scrollTop() < pages[6] && $(window).scrollTop() >= pages[5]) {
      if($('#contact-page') != $('.active').attr('id')){
        $('.nav-li').removeClass('active');
        $('#6').addClass('active');
      };
    };

  });



  // var pageHeight = $('.page').outerHeight();
  // var dividerHeight = $('.divider').outerHeight();
  // var totalHeight = pageHeight + dividerHeight;

  // var page = Math.ceil(($(window).scrollTop() - (pageHeight*0.995))/pageHeight) + 1;
  // if (('#'+ page) != $('.active').attr('id')) {
  //   $('.nav-li').removeClass('active');
  //   $('#' + page).addClass('active');
    // $('.' + page).css({'opacity':(((page * totalHeight)-$(window).scrollTop())/600)});
  // };
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

  numberPages();
  setNavandFade();
  if (!matchMedia('only screen and (max-device-width: 700px)').matches) {
    popup();
  } else {
    $('nav-popup').click(function(e) {
      // e.preventDefault();
      id = /\d/.exec($(this).attr('id'));
      // alert('#' + id);
      $('li#' + id + ' a').click();
    });
  };
  navPointer();
  // $(window).scrollTop();
  // $(window).scroll(setNavandFade);
  // $('#home h1').fadeOut(7000);
  // $('#menu').fadeIn(7000);
  $('.nav-li').click(function() {
    $('.page').css({'opacity': '1'});
  });

  $('#show-navbar').click(function() {
    $('.navbar').toggle();
  });
});
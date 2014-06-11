function numberPages() {
  $('.page').each(function(index) {
    $(this).addClass("page-" + (index + 1));
  });
};

function numberNavs() {
  $('.nav-li').each(function(index) {
    $(this).addClass("nav-" + (index + 1));
  });
};

// should fire on resize, too. Currently, does not.
function setNavandFade() {
  // this dynamically sets a page height
  var pages = [0]
  $('.page').each(function(index) {
    pages[index+1] = $(this).outerHeight() + pages[index];
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() < pages[1]) {
        $('.nav-li').removeClass('active');
        $('.nav-1').addClass('active');
        $('.page-1').css('opacity', (pages[1] - $(window).scrollTop())/600);
    } else if ($(window).scrollTop() < pages[2] && $(window).scrollTop() >= pages[1]) {
        $('.nav-li').removeClass('active');
        $('.nav-2').addClass('active');
        $('.page-2').css('opacity', (pages[2] - $(window).scrollTop())/600);
    } else if ($(window).scrollTop() < pages[3] && $(window).scrollTop() >= pages[2]) {
        $('.nav-li').removeClass('active');
        $('.nav-3').addClass('active');
        $('.page-3').css('opacity', (pages[3] - $(window).scrollTop())/600);
    } else if ($(window).scrollTop() < pages[4] && $(window).scrollTop() >= pages[3]) {
        $('.nav-li').removeClass('active');
        $('.nav-4').addClass('active');
        $('.page-4').css('opacity', (pages[4] - $(window).scrollTop())/600);
    } else if ($(window).scrollTop() < pages[5] && $(window).scrollTop() >= pages[4]) {
        $('.nav-li').removeClass('active');
        $('.nav-5').addClass('active');
        $('.page-5').css('opacity', (pages[5] - $(window).scrollTop())/600);
    } else if ($(window).scrollTop() < pages[6] && $(window).scrollTop() >= pages[5]) {
        $('.nav-li').removeClass('active');
        $('.nav-6').addClass('active');
        $('.page-6').css('opacity', (pages[6] - $(window).scrollTop())/600);
    };
  });
};

// this should also fire on resize
function setColumnHeight() {
  var tallest;
  $('.page').each(function() {
    tallest = 0;
    $(this).children('.section').each(function() {
    console.log($(this).attr('id'));
      if ($(this).innerHeight() > tallest) {
        tallest = $(this).innerHeight();
      };
    })
    $(this).children('.section').css('height', tallest + 'px');
  });
};

$(document).ready(function() {
  setColumnHeight();
  numberPages();
  numberNavs();
  setNavandFade();

  if (!matchMedia('only screen and (max-device-width: 700px)').matches) {
    $('#show-navbar').click(function() {
      $('.navbar').toggle();
    });
  };

  $('.nav-li').click(function() {
    $('.page').css({'opacity': '1'});
  });
});
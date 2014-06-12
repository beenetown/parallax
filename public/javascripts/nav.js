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
    for (var i = 0 ; i < pages.length ; i++ ) {
      if ($(window).scrollTop() >= pages[i] && $(window).scrollTop() < pages[i+1]) {
        console.log(i+1)
        $('.nav-li').removeClass('active');
        $('.nav-' + (i + 1)).addClass('active');
        $('.page-' + (i + 1)).css('opacity', (pages[i+1] - $(window).scrollTop())/600);
      };
    }
  });
};  

// this should also fire on resize
function setColumnHeight() {
  var tallest;
  $('.page').each(function() {
    tallest = 0;
    $(this).children('.section').each(function() {
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
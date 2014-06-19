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
      if ($(window).scrollTop() >= pages[i] - 10 && $(window).scrollTop() < pages[i+1]) {
        $('.nav-li').removeClass('active');
        $('.nav-' + (i + 1)).addClass('active');
        if (!matchMedia('only screen and (max-device-width: 700px)').matches) {
          $('.page-' + (i + 1)).css('opacity', (pages[i+1] - $(window).scrollTop())/600);
        };
      };
    }
  });
};  

// this should also fire on resize
// function setColumnHeight() {
//   var tallest;
//   $('.container').each(function() {
//     tallest = 0;
//     $(this).children('.section').each(function() {
//       if ($(this).innerHeight() > tallest) {
//         tallest = $(this).innerHeight();
//       };
//     })

//     $(this).children('.section').css('height', (tallest - $('.sub-divider').height()) + 'px');
//   });
// };


$(document).ready(function() {
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

  if (window.matchMedia("only screen and (min-device-width: 700px) and (min-width: 60em)").matches) {
    $("div.lazy").lazyload({
      data_attribute: "large",
      threshold: 1000
    });
  };

  if (window.matchMedia('only screen and (min-device-width: 700px) and (max-width: 59.999em)').matches) {
    $("div.lazy").lazyload({
      data_attribute: "small",
      threshold: 1000
    });
  };
});
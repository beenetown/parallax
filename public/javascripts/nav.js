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

var pages = [0]
function setPageHeight() {
  $('.page').each(function(index) {
    pages[index+1] = $(this).outerHeight() + pages[index];
  });
};

function setActive(i) {
  $('.nav-li').removeClass('active');
  $('.nav-' + (i + 1)).addClass('active');
};

function fade(i) {
  // This only happens on desktop/laptop. 
  // It looks terrible on mobile.
  var fadeThreshold = $(window).height() * 0.7;
  if (!matchMedia('only screen and (max-device-width: 700px)').matches) {
    $('.page-' + (i + 1)).css('opacity', (pages[i+1] - $(window).scrollTop())/fadeThreshold);
  };
};

function setActiveandFade() {
  var activeThreshold = 200;
  $(window).on("resize scroll load", function() {
    for (var i = 0 ; i < pages.length ; i++ ) {
      if ($(window).scrollTop() >= pages[i] - activeThreshold && $(window).scrollTop() < pages[i+1]) {
        setActive(i);
        fade(i);
      };
    }
  });
};  

$(window).resize(setPageHeight);
$(window).on("orientationchange", setPageHeight);

$(document).ready(function() {
  setPageHeight();
  numberPages();
  numberNavs();
  setActiveandFade();

  $('.close').click(function() {
    $(this).parent().parent().parent().hide();
    $('#show-gear-list').show();
    setPageHeight();
  });

  $('#show-gear-list').click(function() {
    $(this).hide();
    $('#gear-list').toggle();
    setPageHeight();
  });

  $('.gear-category h2').click(function() {
    $(this).next().toggle();
    setPageHeight();
  });  

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
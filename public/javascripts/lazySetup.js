$(document).ready(function () {
  if (window.matchMedia("only screen and (min-device-width: 700px) and (min-width: 60em)").matches) {
    $("div.lazy").lazyload({
      data_attribute: "large",
      threshold: 1000
    });
  }

  if (window.matchMedia('only screen and (min-device-width: 700px) and (max-width: 59.999em)').matches) {
    $("div.lazy").lazyload({
      data_attribute: "small",
      threshold: 1000
    });
  }
});
(function(){
  $(document).ready(function () {
    if (window.matchMedia("only screen and (min-device-width: 700px)").matches) {
      $("div.lazy").lazyload({
        data_attribute: "large",
        threshold: 1000
      });
    }
  });
})();
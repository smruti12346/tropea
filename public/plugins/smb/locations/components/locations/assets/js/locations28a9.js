+function ($) {
  "use strict";

  $(window).load(function () {

     var lazyLoadImg = false;
     $('.lazyLoadImg').length ? lazyLoadImg = true : lazyLoadImg = false;
     function triggerScroll() { setTimeout(function () { $(window).trigger("scroll"); }, 600); }

     $('.locations .flexslider').flexslider({
      animation: "slide",
      slideshowSpeed: 5000,
      animationDuration: 700,
      smoothHeight: false,
      controlNav: true,
      directionNav: false,
      allowOneSlide: true,
      before: function () {
        if (lazyLoadImg) triggerScroll();
      }
    });

    if (lazyLoadImg) {
      $('.location__image-wrapper .lazy').lazy({
        effect: "fadeIn",
        effectTime: 2000,
        threshold: 0
      });
    }

  });

}(window.jQuery);

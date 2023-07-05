+function ($) {
    "use strict";

    $(window).load(function () {
        var lazyLoadImg = false;
        $('.lazyLoadImg').length ? lazyLoadImg = true : lazyLoadImg = false;

        if (lazyLoadImg) {
            $('.staff-member__image.lazy').add('.staff-member__img.lazy').lazy({
                effect: "fadeIn",
                effectTime: 2000,
                threshold: 0
            });
        }
    });

}(window.jQuery);
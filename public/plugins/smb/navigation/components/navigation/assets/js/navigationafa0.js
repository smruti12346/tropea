+function ($) { "use strict";

    //SMBWMGR-7625- hide mmenu before init on theme level
    var navStyle = $('<style type="text/css">.mm-menu.mm-offcanvas { display: none; }</style>');
    $('html > head').append(navStyle);

    // New instance
    $(document).ready(function(){
    	//sticky nav 
        $("[data-sticky-header]").closest('.js-sticky-nav').sticky({topSpacing:0});

        $('.navigation__item.more').click(function(e){
            e.preventDefault();
        });

        // Add title attribute to mm-menu no text links - SMBWMGR-3784
        $("nav.mm-menu a.mm-prev").each(function() {
            var title = $(this).parent().find("a.mm-title").text();
            $(this).attr("title", title);
        });

        $("nav.mm-menu a.mm-next").each(function() {
            var title = $("> a[data-title]",$(this).parent()).data('title');
            $(this).attr("title", title);
        });
        
        if ($("nav.mm-menu a.mm-close").length > 0) {
            $("nav.mm-menu a.mm-close").attr("title", 'Close');
        }

        var $moreNavLoading = $('.more_nav--loading');
        if ($moreNavLoading.length) {
            $moreNavLoading.removeClass('more_nav--loading');
        }
    });

    /* Add sub item class if too close to edges */
    $(window).load(function () {
        var $navA = $('.navigation-a');
        if ($navA.length) {
            $('.navigation-a > .navigation__list > .navigation__item.has-drop-down').on('mouseenter mouseleave', function (e) {

                var $navListChildItem = $(this).find('> .navigation__list--sub'),
                    $navListChildSubItem = $navListChildItem.find('> .navigation__item.has-drop-down > .navigation__list--sub'),
                    $navListGrandChildSubItem = $navListChildSubItem.find('> .navigation__item.has-drop-down > .navigation__list--sub'),
                    widthChildItem = $navListChildItem.outerWidth(true),
                    navListSub_offsetLeft = $(this).offset().left,
                    buffer = 60,
                    navListSub_width = 0;

                var maxWidthChildSubItem = 0;
                $($navListChildSubItem).each(function () {
                    var thisW = $(this).outerWidth(true);
                    if (thisW > maxWidthChildSubItem) { maxWidthChildSubItem = thisW; }
                });

                var maxWidthGrandChildSubItem = 0;
                $($navListGrandChildSubItem).each(function () {
                    var thisW = $(this).outerWidth(true);
                    if (thisW > maxWidthGrandChildSubItem) { maxWidthGrandChildSubItem = thisW; }
                });

                navListSub_width = (widthChildItem + maxWidthChildSubItem + maxWidthGrandChildSubItem) - $(this).outerWidth(true);

                var offsetRight = ($(document).width() - (navListSub_offsetLeft + $(this).outerWidth(true) + buffer)),
                    isEntirelyVisible = (offsetRight > navListSub_width);

                (!isEntirelyVisible) ? $(this).addClass('near-edge') : $(this).removeClass('near-edge');
            });
        }
    });

}(window.jQuery);
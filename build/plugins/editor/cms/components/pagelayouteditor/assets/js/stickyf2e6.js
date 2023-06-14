$(document).ready(function () {

    (function StickySection() {

        var isIExplorer = typeof document !== 'undefined' && !!document.documentMode,
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            $stickySections = $(".ple_module_sticky"), $isEditor = $(".isEditor"), isEditorMode, isLiveSite, stickyMaxHeight, stickyOpacity;

        $isEditor.length ? isEditorMode = true : isEditorMode = false;
        isEditorMode == false ? isLiveSite = true : isLiveSite = false;
        if (isLiveSite) { stickyMaxHeight = '0'; stickyOpacity = '0'; };
        $stickySections.css({ 'max-height': stickyMaxHeight, opacity: stickyOpacity });

        $(window).scroll(function () {
            var $stickySection = $(".ple_module_sticky"),
                scrollTop = $(this).scrollTop();

            if (scrollTop <= 0) {

                var opacity = "", maxHeight = "", transition = "";
                if (isLiveSite) { opacity = '0'; maxHeight = '0'; transition = 'opacity 0s linear'; };

                $stickySection.css({
                    position: "relative",
                    'z-index': "auto",
                    'max-height': maxHeight,
                    transition: transition,
                    opacity: opacity,
                    top: "0px",
                    width: "100%"
                });

            } else {
                $stickySection.each(function (index, $el) {

                    var $curSticky = $($stickySection).eq(index),
                        curTop = $curSticky.offset().top,
                        curHeight = $curSticky.height(),
                        isRelative = ($el.isSticky && scrollTop <= $el.exTop),
                        isSticky = (curTop <= scrollTop),
                        position = "",
                        maxHeight = "",
                        transition = "",
                        opacity = "",
                        zindex = 1,
                        top = 0;

                    if (isLiveSite) { opacity = '0'; maxHeight = '0'; };

                    if (isRelative) {

                        position = "relative";
                        zindex = 1;
                        top = 0;
                        $el.isSticky = false;
                        if (isLiveSite) { opacity = '0'; maxHeight = '0'; };

                    } else if (isSticky) {

                        zindex = 103;
                        switch (true) {
                            case isIExplorer:
                                position = "fixed";
                                break;
                            case isSafari:
                                position = "-webkit-sticky";
                                break;
                            default:
                                // we have issues with css sticky not working in edit mode
                                // position = "sticky";
                                position = "fixed";
                        }

                        if (isLiveSite) {
                            position = "fixed";
                            opacity = "1";
                            maxHeight = "99999px";
                            transition = "opacity 0.3s linear";
                        };

                        if (0 < index) {
                            for (var i = 0; i < index; i++) {
                                top += $($stickySection).eq(i).height();
                            }
                        }

                        scrollTop += curHeight;
                        if (!$el.isSticky) {
                            $el.isSticky = true;
                            $el.exTop = curTop;
                        }
                    }

                    $($el).css({
                        position: position,
                        'z-index': zindex,
                        'max-height': maxHeight,
                        transition: transition,
                        opacity: opacity,
                        top: top + "px",
                        width: "100%"
                    });
                });
            }
        });
    })();

});

$(window).load(function () {
    // disable sticky sections
    $('button[data-ple-id="$stickyBtnDisable"]').click(function () {
        var $section = $(".section:not(.ple_module_sticky)");
        $section.each(function (index, el) {
            $(el).removeAttr("style");
        });
    });
});
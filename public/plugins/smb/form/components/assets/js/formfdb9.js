+(function ($) {
    "use strict";

    $(document).ready(function () {
        $("body").on("SMBLeadsFormReady", function () {
            var $formSection =  $('[data-control="form"]');
            if ($formSection.length) {
                $formSection.each(function () {
                    if ($(this).data('mhorgid') != '') {
                        $('<input>').attr({
                            type: 'hidden',
                            name: 'mh_orgId',
                            value: $(this).data('mhorgid')
                        }).appendTo($('form', $(this)));
                        $('<input>').attr({
                            type: 'hidden',
                            name: 'mh_template_id',
                            value: $(this).data('templateId')
                        }).appendTo($('form', $(this)));
                    }
                });
            }
        });

        // add section-form class if there is form inside pagecontent section
        var $formIsPle = $('.form.isPleForm');
        if ($formIsPle.length) {
            $formIsPle.each(function () {
                var $parentSection = $(this).closest('.section');
                if(!$parentSection.hasClass('section-form')) {
                    $parentSection.addClass('section-form');
                };
            });
        };

        // target section form without these section class and if it's only ple
        var $formSectionClean = $('.section-form:not(.newsletter-2-fields):not(.newsletter-3-fields):not(.contact-us-im):not(.appointment-request):not(.exclusive-offer):not(.pet-memorial):not(.form-default)');

        if ($formSectionClean.length && $formIsPle.length) {

            $formSectionClean.each(function () {

                $(this).find($formIsPle).addClass('form-themeExtras');
                $("body").on("SMBLeadsFormReady", function () {
                    var $form2colSection = $('.forms--2col-textarea:not(.newsletter-2-fields):not(.newsletter-3-fields):not(.contact-us-im):not(.appointment-request):not(.exclusive-offer):not(.pet-memorial):not(.form-default)'),
                        $formLabelOptionB = $('.forms-option--b .leadForm .form__group:not(.checkbox__group):not(.radio__group)');

                    $form2colSection.find($formIsPle).each(function () {
                        var formGroup = $(this).find(".form__group").not(".form-input-comments");
                        formGroup.wrapAll("<div class='groupWrap' />");
                    });

                    $formLabelOptionB.each(function () {
                        if ($(this).hasClass('hasLabel')) {
                            $(this).addClass('optionB-enabled');
                        }
                    });
                });

            });
        }
    });

})(window.jQuery);
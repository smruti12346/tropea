+(function ($) {
	// This isn't actually a redactor plug in. I'm not sure why it's here -- FRG 2022-1-22
	"use strict";

	/** @interface StickyHTMLElement
	 * @extends HTMLElement
	 * @property {boolean} isSticky
	 * @description ( ._.) This is, unfortunately, set to the document object in
	 *  plugins/editor/cms/components/pagelayouteditor/assets/js/sticky.js
	 *  This is not part of Core Dom API, and may break on some browsers
	 *  -FRG 2022-1-24
	 * */


	/** @class */
	function LinkToSection($el) {
		this.$el = $el;
		this.init();
	}

	LinkToSection.prototype.init = function () {
		this.bindToOffsetToAnchors();
	};

	LinkToSection.prototype.bindToOffsetToAnchors = function () {
		var self = this;
		this.$el.on('click', 'a[href^="#"]', function (event) {
			var target = event.target, hash, targetEl;
			if (target && (hash = decodeURI(target.hash).slice(1)) && (targetEl = document.getElementById(hash))) {
				self.animateToAnchor($(targetEl));
			}
		});
	};

	LinkToSection.prototype.animateToAnchor = function ($linkEl, stickyHeight) {
		stickyHeight != null || (stickyHeight  = this.getStickySectionsHeight());
		$('html, body').animate({
			scrollTop: $linkEl.offset().top - stickyHeight
		}, 'slow');
	};

	LinkToSection.prototype.getStickySectionsHeight = function () {
		/** @const */ var selfStatic = this.constructor, editMode = !!$(".isEditor").length;
		// calculating and returning the sticky sections total height
		var moduleStickyHeight = 0;
		$(selfStatic.stickySectionSelector).filter(/** @this StickyHTMLElement */function () {

			var containerEl = $(this).find(selfStatic.containerSelector);
			if(!this.isSticky){
				// check if the sticky section is visible in the viewport, if yes set offset and sticky true
				var bounding = this.getBoundingClientRect();
				if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
					containerEl[0].dataset.inViewport = 'true';
					this.exTop = $(this).offset().top;
					this.isSticky = true;
				}
			} else {
				delete containerEl[0].dataset.inViewport;
			}

			return this.isSticky;
			
		}).find(selfStatic.containerSelector).each(function () {
			// when the browser scroll is triggered, get only the sticky sections that are visible in the view
			moduleStickyHeight += $(this).outerHeight(true);

			// for the in viewport sticky elements but still not in sticky mode double the element offset height 
			// only in Editor Mode for the Live Preview sticky sections are hidden by default
			
			if(this.dataset.inViewport === 'true' && editMode) {
				moduleStickyHeight += $(this).outerHeight(true);
			}
		});

		if (moduleStickyHeight === 0) {
			moduleStickyHeight = $('.mobileHeader-container').height();
		} else {
			moduleStickyHeight += $('.se__navbar-fixed .nav-bar').outerHeight(true);
		}

		return moduleStickyHeight;
	};

	LinkToSection.dataAttribute = 'linkToSection';
	LinkToSection.stickySectionSelector = '.ple_module_sticky';
	LinkToSection.containerSelector = '.container';

	$(function () {
		var $editableSection = $('.editable__container');
		$editableSection.each(function () {
			/** @const */ var $el = $(this);
			$el.data(LinkToSection.dataAttribute, new LinkToSection($el));
		});
	});
})(window.jQuery);

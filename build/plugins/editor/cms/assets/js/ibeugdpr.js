window.IBEUGDPR = {};
window.IBEUGDPR.displayBanner = function(userConfig)
{
	/*
	 * Parameter documentation. Any of these can be overridden in the userConfig object when calling
	 * IBEUGDPR.displayBanner. All parameters have default values and are optional.
	 *
	 *
	 * apiUrl           string   URL to the Geolocation API server. The expected return value of the API call
	 *                           is a JSON formatted string containing one element "isoCode" which
	 *                           contains the two-letter uppercase ISO code for the country that
	 *                           the current request came from.
	 * cookieName       string   The name for the cookie which is used to only show this banner
	 *                           once every {cookieExpireDays} days.
	 * cookieExpireDays int      The number of days to store the cookie on this device, after which
	 *                           the user will be asked for their consent again.
	 * bannerClass      string   A single CSS class name used for the banner element. If an
	 *                           element with this class already exists in the DOM, it will be used
	 *                           for the banner instead, and no element will be created.
	 * overlayClass     string   A single CSS class name used for the page overlay element. If an
	 *                           element with this class already exists in the DOM, it will be used
	 *                           for the overlay instead, and no element will be created.
	 * addBannerClass   string   One or more space-seprarated CSS class names to add to the GDPR
	 *                           banner element.
	 * addOverlayClass  string   One or more space-seprarated CSS class names to add to the page
	 *                           overlay element.
	 * onConsent        function A callback function that will be called after the user clicks "I Agree". No
	 *                           parameters are passed to the callback.
	 * bannerPosition   string   This can be "top", "center", or "bottom" and determines where the
	 *                           banner is positioned in the viewport.
	 * bodyText         string   HTML text to be shown
	 */

	var defaultConfig = {
		apiUrl: '//geocoding.internetbrands.com/geocoding/api/v1/getIsoCode',
		cookieName: 'ibeugdpr',
		cookieExpireDays: 3650,
		bannerClass: 'ibeugdpr-banner',
		overlayClass: 'ibeugdpr-overlay',
		addBannerClass: '',
		addOverlayClass: '',
        bodyText:'',
		onConsent: function(){},
		bannerPosition: 'center'
	};

	function setCookie(cookieName, cookieValue, expireDays)
	{
		var d = new Date(),
			expires;

		d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
		expires = 'expires=' + d.toUTCString();
		document.cookie = cookieName + '=' + cookieValue + '; ' + expires + '; path=/';
	}

	function getCookie(cookieName)
	{
		var searchName = cookieName + '=',
			cookieArray = document.cookie.split(';'),
			i,
			thisCookie;

		for(i = 0; i < cookieArray.length; ++i)
		{
			thisCookie = cookieArray[i];
			while (thisCookie.charAt(0) == ' ')
			{
				thisCookie = thisCookie.substring(1);
			}
			if (thisCookie.indexOf(searchName) != -1)
			{
				return thisCookie.substring(searchName.length, thisCookie.length);
			}
		}

		return '';
	}

	/**
	 * Logs an error message to the console if possible
	 *
	 * @param	string	Error message to log
	 */
	function logError(logMessage)
	{
		if (console && console.log && typeof console.log == 'function')
		{
			console.log('IBEUGDPR: ' + logMessage);
		}
	}

	/**
	 * Inserts CSS rules into the DOM.
	 *
	 * @param	array	This is an array of objects. Each object contains two
	 *			elements: 'selector' and 'rules'.
	 */
	function addCss(css)
	{
		var style = document.createElement('style'),
			i,
			j = 0;

		style.appendChild(document.createTextNode('')); // keep webkit happy
		document.head.appendChild(style);

		for (i in css)
		{
			if (typeof css[i].selector == 'undefined')
			{
				continue;
			}

			if('insertRule' in style.sheet)
			{
				style.sheet.insertRule(css[i].selector + '{' + css[i].rules + '}', j);
			}
			else if('addRule' in style.sheet)
			{
				style.sheet.addRule(css[i].selector, css[i].rules, j);
			}

			++j;
		}
	}

	function getBannerPositionClass()
	{
		switch (config.bannerPosition)
		{
			case 'top':
			case 'center':
			case 'bottom':
			case 'cover':
				return 'ibeugdpr--' + config.bannerPosition;
		}

		return '';
	}

	/**
	 * Creates the banner in the DOM
	 */
	function createBannerElement()
	{
		addCss([
			{
				selector: '.ibeugdpr--hide',
				rules: 'display:none;'
			},
			{
				selector: '.' + config.bannerClass,
				rules: 'position:fixed;' +
					'padding:0.5em 1em;' +
					'box-sizing:border-box;' +
					'background:#565656;' +
					'background:rgba(86, 86, 86, 0.95);' +
					'font-family:Helvetica,Arial,sans-serif;' +
					'font-size:1rem;' +
					'font-weight:normal;' +
					'text-shadow:0 -1px 0 rgba(0, 0, 0, 0.35);' +
					'z-index:999999999;' +
					'text-align:center;' +
					'color:#fff;' +
					// undo the effects of .ibeugdpr-disabled
					'overflow:visible;' +
					'pointer-events:auto;' +
					'-webkit-touch-callout:default;' +
					'-webkit-user-select:text;' +
					'-khtml-user-select:text;' +
					'-moz-user-select:text;' +
					'-ms-user-select:text;' +
                     'overflow-y:scroll;' +
                    'overflow-x:hidden;' +
					'user-select:text;'
			},
			{
				selector: '.ibeugdpr--top',
				rules: 'left:0px;' +
					'top:0px;' +
					'width:100%;'
			},
			{
				selector: '.ibeugdpr--center',
				rules: 'left:50%;' +
					'top:50%;' +
					'transform:translate(-50%, -50%);'
			},
			{
				selector: '.ibeugdpr--bottom',
				rules: 'left:0px;' +
					'bottom:0px;' +
					'width:100%;'
			},
			{
				selector: '.ibeugdpr--cover',
				rules: 'left:0px;' +
					'right:0px;' +
					'top:0px;' +
					'bottom:0px;' +
					'width:100%;' +
					'height:100%;' +
					// allow scrolling when banner is full screen
					// and still doesn't fit in viewport
					'overflow:auto;'
			},
			{
				selector: '.' + config.bannerClass + ' p',
				rules: 'margin:1.25rem 0;'
			},
			{
				selector: '.' + config.bannerClass + ' a, .' + config.bannerClass + ' a:visited',
				rules: 'color:#fff;' +
					'text-decoration:underline;' +
					'font-weight:normal;'
			},
			{
				selector: '.' + config.bannerClass + ' a:hover',
				rules: 'text-decoration:none;'
			},
			{
				selector: '.' + config.bannerClass + ' .ibeugdpr-consent-button',
				rules: 'display:inline-block;' +
					'cursor:pointer;' +
					'padding:6px 12px;' +
					'text-decoration:none;' +
					'font-size:1.25rem;' +
					'border:1px solid #fff;' +
					'background:#00bef5;' +
					'color:#fff;'
			},
			{
				selector: '.' + config.bannerClass + ' .ibeugdpr-consent-button:hover',
				rules: 'text-decoration: none;' +
					'background:rgb(64, 64, 64);' +
					'color:#fff;'
			}
		]);

		var bannerEl = document.createElement('div');
		bannerEl.className = config.bannerClass + ' ibeugdpr--hide' + (config.addBannerClass ? ' ' + config.addBannerClass : '');
		bannerEl.className += ' ' + getBannerPositionClass();
		// bannerEl.innerHTML = '\
		// 	<p>We process personal data about users of our site, through the use of cookies and other technologies, to deliver our services, personalize advertising, and to analyze site activity. We may share certain information about our users with our advertising and analytics partners. For additional details, refer to our <a href="https://www.internetbrands.com/privacy/privacy-main.html" target="_blank" class="ibeugdpr-privacy">Privacy Policy</a>.</p>\
		// 	<p>By clicking "<b>I AGREE</b>" below, you agree to our <a href="https://www.internetbrands.com/privacy/privacy-main.html" target="_blank" class="ibeugdpr-privacy">Privacy Policy</a> and our personal data processing and cookie practices as described therein. You also consent to the transfer of your data to our servers in the United States, where data protection laws may be different from those in your country.</p>\
		// 	<p><a href="#" class="ibeugdpr-consent-button">I AGREE</a></p>\
		// ';
        bannerEl.innerHTML=config.bodyText+'<p><a href="#" class="ibeugdpr-consent-button">I AGREE</a></p>';
		document.body.appendChild(bannerEl);
	}

	/**
	 * Creates the overlay in the DOM
	 */
	function createOverlayElement()
	{
		addCss([
			{
				selector: '.' + config.overlayClass,
				rules: 'position:fixed;' +
					'left:0;' +
					'top:0;' +
					'right:0;' +
					'bottom:0;' +
					'width:100%;' +
					'height:100%;' +
					'background:rgba(86, 86, 86, 0.5);' +
					'z-index:999999998;'
			},
			{
				selector: '.ibeugdpr-disabled, .ibeugdpr-disabled a:not(.ibeugdpr-consent-button):not(.ibeugdpr-privacy)',
				rules: 'overflow:hidden;' +
					'pointer-events:none;' +
					'-webkit-touch-callout:none;' +
					'-webkit-user-select:none;' +
					'-khtml-user-select:none;' +
					'-moz-user-select:none;' +
					'-ms-user-select:none;' +
					'user-select:none;'
			}
		]);

		var overlayEl = document.createElement('div');
		overlayEl.className = config.overlayClass + ' ibeugdpr--hide' + (config.addOverlayClass ? ' ' + config.addOverlayClass : '');
		document.body.appendChild(overlayEl);
	}

	/**
	 * Simple wrapper for adding a class. Naive implementation, but it'll
	 * work for what we're doing here
	 *
	 * @param	object	The DOM element to add the class to
	 * @param	string	The class name to add
	 */
	function addClass(el, className)
	{
		if (typeof el == 'undefined')
		{
			return;
		}

		if (typeof el.classList != 'undefined')
		{
			el.classList.add(className);
		}
		else
		{
			el.className += ' ' + className;
		}
	}

	/**
	 * Simple wrapper for removing a class. Naive implementation, but it'll
	 * work for what we're doing here
	 *
	 * @param	object	The DOM element to remove the class from
	 * @param	string	The class name to remove
	 */
	function removeClass(el, className)
	{
		if (typeof el == 'undefined')
		{
			return;
		}

		if (typeof el.classList != 'undefined')
		{
			el.classList.remove(className);
		}
		else
		{
			el.className = el.className.replace(className, '');
		}
	}

	/**
	 * Check if the element has a CSS class. Naive implementation, but it'll
	 * work for what we're doing here
	 *
	 * @param	object	The DOM element to check
	 * @param	string	The class name to check
	 */
	function hasClass(el, className)
	{
		if (typeof el == 'undefined')
		{
			return false;
		}

		if (typeof el.classList != 'undefined')
		{
			return el.classList.contains(className);
		}
		else
		{
			// replace multiple whitespace chars with single space,
			// ensure there is a space at beginning and end.
			var classes = (' ' + el.className + ' ').replace(/\s+/g, ' ');

			return classes.indexOf(' ' + className + ' ') > -1;
		}
	}

	/**
	 * Initiates a CORS request
	 *
	 * @param string   URL to call
	 * @param function Callback function.
	 */
	function corsRequest(url, callback)
	{
		var xhr = new XMLHttpRequest();

		if ('withCredentials' in xhr)
		{
			// has CORS support
			xhr.open('get', url, true);
		}
		else if (typeof XDomainRequest != 'undefined')
		{
			// IE CORS support
			xhr = new XDomainRequest();
			xhr.open('get', url);
		}
		else
		{
			// No CORS support
			error('No CORS support');
			return;
		}

		// some versions of webkit choke on this so we'll skip
		// it if it throws an exception and manually try to
		// handle a string response below
		// http://stackoverflow.com/q/9845401
		try
		{
			xhr.responseType = 'json';
		}
		catch(e){}

		xhr.onload = function()
		{
			callback(xhr);
		};

		xhr.send();
	}

	/**
	 * Applies basic responsive behavior (full screen banner) if applicable
	 *
	 * @param object Banner DOM element
	 */
	function applyResponsive(bannerEl)
	{
		// Basic responsive behavior - show banner full screen for small
		// viewport sizes.

		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

		if (
			// Phone size - One dimension (width or height) is 415px or narrower.
			// (Most phone screens seem to be between 375-415px wide)
			// Normally, you'd just check width, but for landscape mode, you need
			// to check height, so we'll accept either.
			((w && w <= 415) || (h && h <= 415))
			||
			// Generic small viewport. If both dimensions are 650px or less, we'll
			// use responsive to ensure that the whole banner (along with the message
			// and button) is all visible. Otherwise, they may not be able to see
			// the Accept button.
			(w && h && w <= 650 && h <= 650)
		)
		{
			removeClass(bannerEl, 'ibeugdpr--top');
			removeClass(bannerEl, 'ibeugdpr--center');
			removeClass(bannerEl, 'ibeugdpr--bottom');
			addClass(bannerEl, 'ibeugdpr--cover');
		}
		else
		{
			removeClass(bannerEl, 'ibeugdpr--cover');
			addClass(bannerEl, getBannerPositionClass());
		}
	}

	/**
	 * Shows the banner. Creates and inserts the notice into the DOM
	 * if it doesn't already exist. This allows individual sites to change the
	 * style and/or the message by creating a hidden element with this name.
	 * It must contain the correct message and a link with the .ibeugdpr-consent-button
	 * class for the "I agree" button.
	 */
	function showBanner()
	{
		function displayBanner()
		{
			var bannerEl = document.querySelector('.' + config.bannerClass),
				overlayEl = document.querySelector('.' + config.overlayClass);

			applyResponsive(bannerEl);

			removeClass(bannerEl, 'ibeugdpr--hide');
			removeClass(overlayEl, 'ibeugdpr--hide');

			addClass(document.querySelector('html'), 'ibeugdpr-disabled');
			addClass(document.body, 'ibeugdpr-disabled');

			disableTouchScroll(true);
			handleWindowResize(true);
		}

		function removeBanner()
		{
			var bannerEl = document.querySelector('.' + config.bannerClass),
				overlayEl = document.querySelector('.' + config.overlayClass);

			bannerEl.parentNode.removeChild(bannerEl);
			overlayEl.parentNode.removeChild(overlayEl);

			removeClass(document.querySelector('html'), 'ibeugdpr-disabled');
			removeClass(document.body, 'ibeugdpr-disabled');

			disableTouchScroll(false);
			handleWindowResize(false);
		}

		function onTouchmove(e)
		{
			// I don't anticipate IE8 running with Touch, but who knows (e.srcElement)
			var targ = e.target || e.srcElement || null,
				i,
				inBanner = false;

			if (targ && targ.nodeType == 3 && targ.parentNode)
			{
				// safari needs this sometimes
				targ = targ.parentNode;
			}

			for (i = 0; i < 10; ++i)
			{
				if (hasClass(targ, config.bannerClass))
				{
					inBanner = true;
					break;
				}

				if (targ && targ.parentNode)
				{
					targ = targ.parentNode;
				}
			}

			if (!inBanner)
			{
				try
				{
					e.preventDefault();
				}
				catch (e) {}
			}
		}

		function disableTouchScroll(disable)
		{
			if (disable)
			{
				// trap exceptions from really old browsers that don't have addEventListener
				try
				{
					// use capture to trigger the handler on the capture phrase
					// so it happens as soon as possible
					// make sure it's not passive (even though that's the default)
					// to ensure we can use preventDefault
					document.addEventListener('touchmove', onTouchmove, {
						capture: true,
						passive: false
					});
				}
				catch (e) {}
			}
			else
			{
				try
				{
					document.removeEventListener('touchmove', onTouchmove, {
						capture: true,
						passive: false
					});
				}
				catch (e) {}
			}
		}

		// inspiration from https://davidwalsh.name/javascript-debounce-function
		function debounce(func, waitTime)
		{
			var timeout;

			return function()
			{
				var that = this,
					args = arguments;

				function doLater()
				{
					timeout = null;
					func.apply(that, args);
				}

				clearTimeout(timeout);
				timeout = setTimeout(doLater, waitTime);
			};
		}

		var onWindowResize = debounce(function(e)
		{
			var bannerEl = document.querySelector('.' + config.bannerClass);
			applyResponsive(bannerEl);

		}, 100);

		function handleWindowResize(disable)
		{
			if (disable)
			{
				// trap exceptions from really old browsers that don't have addEventListener
				try
				{
					window.addEventListener('resize', onWindowResize);
					window.addEventListener('orientationchange', onWindowResize);
				}
				catch (e) {}
			}
			else
			{
				try
				{
					window.removeEventListener('resize', onWindowResize);
					window.removeEventListener('orientationchange', onWindowResize);
				}
				catch (e) {}
			}
		}

		function trapClicks(e)
		{
			try
			{
				e.stopPropagation();
			}
			catch (e) {}
		}

		function handleConsentButton()
		{
			// save consent in cookie
			var timestamp = Math.round((new Date()).getTime() / 1000);
			setCookie(config.cookieName, 'INEUCONSENTED:' + timestamp, config.cookieExpireDays);

			// remove banner
			removeBanner();

			// send event to clickstream
			window.ibtracker = window.ibtracker || [];
			window.ibtracker.push(['GDPRAcceptance', {
				eventText: this.innerText
			}]);

			// callback
			config.onConsent();

			return false;
		}

		function _doDisplayBanner()
		{
			// create banner & overlay elements if needed
			if (!document.querySelector('.' + config.bannerClass))
			{
				createBannerElement();
			}
			if (!document.querySelector('.' + config.overlayClass))
			{
				createOverlayElement();
			}

			// attach event handlers
			try
			{
				document.querySelector('.' + config.bannerClass + ' .ibeugdpr-consent-button').onclick = handleConsentButton;
				document.querySelector('.' + config.bannerClass).onclick = trapClicks;
				document.querySelector('.' + config.overlayClass).onclick = trapClicks;
			}
			catch(e)
			{
				logError('Unable to set event handlers: ' + e);
			}

			// show the banner & overlay
			displayBanner();
		}

		_doDisplayBanner();
	}

	/**
	 * Determines if the banner is needed based on the user's location.
	 * Currently, this means that users in the EU need the banner.
	 *
	 * @param	object	Object containing two functions-- one to call if the banner is needed, and one when it's not needed.
	 */
	function isBannerNeeded(callbacks)
	{
		function success(result)
		{
			// check result and if we're in the EU, then call callback
			// from http://europa.eu/about-eu/countries/index_en.htm
			var EUCountryCodes = [
				// EU member countries
				'AT', //Austria
				'BE', //Belgium
				'BG', //Bulgaria
				'HR', //Croatia
				'CY', //Cyprus
				'CZ', //Czech Republic
				'DK', //Denmark
				'EE', //Estonia
				'FI', //Finland
				'FR', //France
				'DE', //Germany
				'GR', //Greece
				'HU', //Hungary
				'IE', //Ireland
				'IT', //Italy
				'LV', //Latvia
				'LT', //Lithuania
				'LU', //Luxembourg
				'MT', //Malta
				'NL', //Netherlands
				'PL', //Poland
				'PT', //Portugal
				'RO', //Romania
				'SK', //Slovakia
				'SI', //Slovenia
				'ES', //Spain
				'SE', //Sweden
				'GB', //United Kingdom
				// EU candidate countries
				'AL', //Albania
				'ME', //Montenegro
				'RS', //Serbia
				'MK', //The former Yugoslav Republic of Macedonia
				'TR', //Turkey
				// Other European countries
				'IS', //Iceland
				'LI', //Liechtenstein
				'MC', //Monaco
				'NO', //Norway
				'CH', //Switzerland
				'UA', //Ukraine
				// Miscellaneous
				'EU' //Europe, see https://dev.maxmind.com/faq/what-are-the-eu-europe-and-ap-asia-pacific-entries/
				// no trailing comma on last item to avoid issues in ancient versions of IE.
			];

			if (result)
			{
				var isoCode = (result + '').toUpperCase();
				if (EUCountryCodes.indexOf(isoCode) != -1)
				{
					// banner is needed, call callback
					callbacks.bannerNeeded(isoCode);
				}
				else
				{
					//banner is not needed, call callback
					callbacks.bannerNotNeeded(isoCode);
				}
			}
			else
			{
				// there was an error, since we don't know if we're in the EU
				// the err on the safe side and show the message
				callbacks.bannerNeeded('');
			}
		}

		function error(e)
		{
			// there was an error, since we don't know if we're in the EU
			// the err on the safe side and show the message
			logError(e);
			callbacks.bannerNeeded('');
		}

		function getIsoCode(url)
		{
			corsRequest(url, function(xhr)
			{
				var status = xhr.status;
				if (status == 200)
				{
					var response = xhr.response;

					// if we weren't able to set xhr.responseType above,
					// we may get a string response here
					if (typeof response == 'string' && typeof JSON == 'object' && typeof JSON.parse == 'function')
					{
						response = JSON.parse(response);
					}

					if (response.status == "success" && typeof response.isoCode != 'undefined' && response.isoCode)
					{
						success(response.isoCode);
					}
					else
					{
						error('API Message: ' + response.message);
					}
				}
				else
				{
					error('HTTP Status: ' + status);
				}
			});
		};

		getIsoCode(config.apiUrl);
	}

	/**
	 * Attempt to mimic jQuery $.extend functionality
	 */
	function extendObject()
	{
		var i = 1, j;

		for(i = 1; i < arguments.length; ++i)
		{
			for(j in arguments[i])
			{
				if(arguments[i].hasOwnProperty(j))
				{
					arguments[0][j] = arguments[i][j];
				}
			}
		}

		return arguments[0];
	}

	/**
	 * Handles showing the IB EU banner if needed.
	 */
	function runIt()
	{
		if (!getCookie(config.cookieName))
		{
			isBannerNeeded({
				bannerNeeded: function(isoCode)
				{
					// show banner, but don't set cookies until they consent
					showBanner();
				},
				bannerNotNeeded: function(isoCode)
				{
					// Don't show notice but set the cookie that the user
					// was checked so we don't need to check it over and over again
					var timestamp = Math.round((new Date()).getTime() / 1000);
					setCookie(config.cookieName, 'NOTINEU:' + timestamp, config.cookieExpireDays);
				}
			});
		}
	}

	// Run the code
	// Use try/catch to help keep any errors in this code from breaking
	// Javascript on the pages this is included in.
	try
	{
		var config = extendObject({}, defaultConfig, userConfig);
		runIt();
	}
	catch(e)
	{
		logError(e);
	}
};

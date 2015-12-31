/* jshint strict: true */

var bgImgArry = [
  '/assets/img/bg-01.jpg',
  '/assets/img/bg-02.jpg'
  //'/assets/img/bg-03.jpg'
  //'/assets/img/bg-05.jpg',
  //'/assets/img/bg-06.jpg',
  //'/assets/img/bg-07.jpg',
  //'/assets/img/bg-08.jpg'
];

var colorsArray = [
  { // blue
    light: '#00b1d4',
    dark: '#009bba',
    class: 'primary'
  },
  { // green
    light: '#4ac883',
    dark: '#41b073',
    class: 'secondary'
  },
  { // yellow
    light: '#efd45c',
    dark: '#d2ba51',
    class: 'tertiary'
  },
  { // orange
    light: '#eb904c',
    dark: '#ce7e43',
    class: 'quaternary'
  },
  { // red
    light: '#e74c3c',
    dark: '#cb4335',
    class: 'quinary'
  },
  { //violet
    light: '#9b59b6',
    dark: '#884ea0',
    class: 'senary'
  }
];

colorsArray.sort(function() {
  return (0.5 - Math.random());
});

document.getElementsByTagName('body')[0].classList.add('color-' + colorsArray[0].class);

var post = document.body.className.match(/(\bcategories-[Bb]log\b|\bcategories-[Ww]ork\b)/g);
var randomNum = Math.floor(Math.random() * bgImgArry.length);
var imgSrc = bgImgArry.splice(randomNum, 1);

(function() {
  var element = document.querySelector('[data-js="full-screen"]');

  element.style.height = window.innerHeight + 'px';

  if (!post) {
    var bgImg = 'url(' + imgSrc + ')';

    element.style.backgroundImage = bgImg;
  }
}(window));

var onScroll = function() {
  var element = document.querySelector('[data-js="sidebar-toggle"]');
  var scrollBarPosition = window.pageYOffset || document.body.scrollTop;
  var screenHeight = window.innerHeight;

  if (scrollBarPosition >= screenHeight - 32) {
    element.classList.add('scrolled');
  } else {
    element.classList.remove('scrolled');
  }
};

function fadeIn(el) {
  var element = document.querySelector(el);

  element.style.transition = 'opacity .35s linear 0';
  element.style.opacity = 1;
};

function navToggle(el) {
  var browser = document.querySelector('html');
  var element = document.querySelector(el);

  element.addEventListener('click', function() {
    browser.classList.toggle('active');
    this.classList.toggle('active');
  });
};

function logoAnimate(el, bg) {
  var element = document.querySelector(el);
  var sibling = document.querySelector(bg);

  sibling.style.background = colorsArray[0].light;

  element.addEventListener('mouseenter', function(e) {
    var parent = e.target.parentNode;
    e.target.classList.add('animate');
    parent.classList.add('hovered');
  }, false);

  element.addEventListener('mouseleave', function(e) {
    var parent = e.target.parentNode;
    parent.classList.remove('hovered');
  }, false);
};

function locationColors(el, nEl) {
  var element = document.querySelector(el);
  var nextElement = document.querySelector(nEl);

  if (element) {
    element.style.background = colorsArray[0].light;
    nextElement.style.borderColor = colorsArray[0].light;
    nextElement.style.background = colorsArray[0].dark;
  }
};

addEventListener

function postHover(el) {
  [].forEach.call(document.querySelectorAll(el), function (els) {
    els.addEventListener('mouseenter', function(e) {
      var parent = e.target.parentElement;
      var grandparent = parent.parentElement;
      grandparent.classList.add('post-hovered');
    }, false);

    els.addEventListener('mouseleave', function(e) {
      var parent = e.target.parentElement;
      var grandparent = parent.parentElement;
      grandparent.classList.remove('post-hovered');
    }, false);
  });
}

function init() {
  fadeIn('body');
  navToggle('[data-js="sidebar-toggle"]');
  logoAnimate('[data-js="logo"]', '[data-js="logo-clip"]');
  locationColors('[data-js="location"]', '[data-js="pin"]');
  postHover('[data-js="post"]')
  fitVids('[data-js="fitvid"]');
};

window.onload = function() {
  init();
  window.onscroll = onScroll;
};

window.onresize = function() {
  var masthead = document.querySelector('[data-js="full-screen"]');

  masthead.style.height = window.innerHeight + 'px';
  window.onscroll = onScroll;
};

/*
* Vanilla FitVids v0.1.0
* Let your videos be fluid.
* http://github.com/rosszurowski/vanilla-fitvids/
*
* Licensed under the WTFPL license
*/
(function(w, undefined) {

	'use strict';

	w.fitVids = function(selector, options) {

		// get the video container, and stop if it doesn't exist.
		var container = document.querySelectorAll(selector);
		if (!container) {
      return;
    }

		var settings = {
			customSelector: null
		};

		var div = document.createElement('div');
		var ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

		div.className = 'fit-vids-style';

		ref.parentNode.insertBefore(div,ref);

		// sneaky way to emulate $.extend
		if (options) {
      settings = (JSON.parse(JSON.stringify(options)));
    }

		var selectors = [
			'iframe[src*="player.vimeo.com"]',
			'iframe[src*="youtube.com"]',
			'iframe[src*="youtube-nocookie.com"]',
			'iframe[src*="kickstarter.com"]',
			'object',
			'embed'
		];

		if (settings.customSelector) {
      selectors.push(settings.customSelector);
    }

		var allVideos = [];

		// loop through container matches and grab all the videos.
		for (var i = 0; i < container.length; i++) {
			var element = container[i],
				videos = element.querySelectorAll(selectors.join(','));

			if (videos.length > 0) {
				for (var j = 0; j < videos.length; j++) {
					allVideos.push(videos[j]);
				}
			}
	 	}

		// loop through all the videos and
		for (var i = 0; i < allVideos.length; i++) {
			var element = allVideos[i];
			if (element.tagName.toLowerCase() === 'embed' && element.parentNode.tagName === 'object' || /fluid-width-video-wrapper/.test(element.parentNode.className)) {
        return;
      }
			var height = (element.tagName.toLowerCase() === 'object' || (element.getAttribute('height') && !isNaN(parseInt(element.getAttribute('height'), 10)))) ? parseInt(element.getAttribute('height'), 10) : element.clientHeight;
			var width = !isNaN(parseInt(element.getAttribute('width'), 10)) ? parseInt(element.getAttribute('width'), 10) : element.clientWidth,
				aspectRatio = height / width;

      if (!element.getAttribute('id')) {
				var videoID = 'fitvid' + Math.floor(Math.random() * 999999);
				element.setAttribute('id', videoID);
			}

			element.removeAttribute('height');
			element.removeAttribute('width');

			var wrapper = document.createElement('div');
			wrapper.className = 'fluid-width-video-wrapper';
			wrapper.appendChild(element.cloneNode(true));
			element.parentNode.replaceChild(wrapper,element);
			wrapper.style.paddingTop = '' + (aspectRatio * 100) + '%';
		}
	}
}(window));

// Disqus
var disqus_shortname = 'cdunn';

(function () {
  var s = document.createElement('script'); s.async = true;
  s.type = 'text/javascript';
  s.src = '//cdunnio.disqus.com/count.js';
  (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());

// Google Analytics
(function () {
  var toggle = document.querySelector('[data-js="sidebar-toggle"]');
  var logo = document.querySelector('[data-js="logo"]');
  var smLogo = document.querySelector('[data-js="logo-sm"]');
  var socialGithub = document.querySelector('[data-js="github"]');
  var socialInstagram = document.querySelector('[data-js="instagram"]');
  var socialTwitter = document.querySelector('[data-js="twitter"]');
  var socialCodepen = document.querySelector('[data-js="codepen"]');
  var socialDribbble = document.querySelector('[data-js="dribbble"]');
  var socialSpotify = document.querySelector('[data-js="spotify"]');
  //var socialBitbucket = document.querySelector('[data-js="bitbucket"]');
  //var socialSlack = document.querySelector('[data-js="slack"]');
  var socialAirbnb = document.querySelector('[data-js="airbnb"]');
  //var socialRSS = document.querySelector('[data-js="rss"]');
  var footerNav = document.querySelectorAll('.footer-nav-item');
  var menuEmail = document.querySelector('[data-js="menu-email"]');
  var menuNav = document.querySelectorAll('.sidebar-nav-item');
  var postName = document.querySelectorAll('.post-name');
  var postMore = document.querySelectorAll('.post-more');
  var instagramPost = document.querySelector('.instagram-post');
  var instagramAvatar = document.querySelector('.instagram-avatar');
  var instagramLogo = document.querySelector('.icn-instagram');
  addListener(toggle, 'click', function() {
    ga('send', 'event', 'toggle', 'click', 'menu-toggle');
  });
  addListener(logo, 'click', function() {
    ga('send', 'event', 'logo', 'click', 'header-logo');
  });
  addListener(logo, 'click', function() {
    ga('send', 'event', 'logo', 'click', 'footer-logo');
  });
  addListener(socialGithub, 'click', function() {
    ga('send', 'event', 'button', 'click', 'social-github');
  });
  addListener(socialInstagram, 'click', function() {
    ga('send', 'event', 'button', 'click', 'social-bitbucket');
  });
  addListener(socialTwitter, 'click', function() {
    ga('send', 'event', 'button', 'click', 'social-twitter');
  });
  addListener(socialCodepen, 'click', function() {
    ga('send', 'event', 'button', 'click', 'social-codepen');
  });
  addListener(socialDribbble, 'click', function() {
    ga('send', 'event', 'button', 'click', 'dribbble-spotify');
  });
  addListener(socialSpotify, 'click', function() {
    ga('send', 'event', 'button', 'click', 'social-spotify');
  });
  addListener(socialAirbnb, 'click', function() {
    ga('send', 'event', 'button', 'click', 'social-airbnb');
  });
  addListener(footerNav, 'click', function() {
    ga('send', 'event', 'link', 'click', 'footer-link');
  });
  addListener(menuEmail, 'click', function() {
    ga('send', 'event', 'link', 'click', 'menu-email');
  });
  addListener(menuNav, 'click', function() {
    ga('send', 'event', 'link', 'click', 'menu-link');
  });
  addListener(postName, 'click', function() {
    ga('send', 'event', 'link', 'click', 'post-name');
  });
  addListener(postMore, 'click', function() {
    ga('send', 'event', 'link', 'click', 'post-more');
  });
  addListener(instagramPost, 'click', function() {
    ga('send', 'event', 'link', 'click', 'instagram-post');
  });
  addListener(instagramAvatar, 'click', function() {
    ga('send', 'event', 'link', 'click', 'instagram-avatar');
  });
  addListener(instagramLogo, 'click', function() {
    ga('send', 'event', 'link', 'click', 'instagram-logo');
  });

  /**
   * Utility to wrap the different behaviors between W3C-compliant browsers
   * and IE when adding event handlers.
   *
   * @param {Object} element Object on which to attach the event listener.
   * @param {string} type A string representing the event type to listen for
   *     (e.g. load, click, etc.).
   * @param {function()} callback The function that receives the notification.
   */
  function addListener(element, type, callback) {
   if (element.addEventListener) element.addEventListener(type, callback);
   else if (element.attachEvent) element.attachEvent('on' + type, callback);
  }
});

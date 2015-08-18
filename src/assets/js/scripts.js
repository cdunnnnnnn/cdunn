/* jshint strict: true */

var bgImgArry = [
  '/assets/img/bg-01.jpg',
  '/assets/img/bg-02.jpg',
  '/assets/img/bg-03.jpg',
  '/assets/img/bg-04.jpg',
  '/assets/img/bg-05.jpg',
  '/assets/img/bg-06.jpg',
  '/assets/img/bg-07.jpg',
  '/assets/img/bg-08.jpg'
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
    class: '9b59b6'
  }
];

colorsArray.sort(function() {
  return (0.5 - Math.random());
});

document.getElementsByTagName('body')[0].classList.add('color-' + colorsArray[0].class);

/*
var bgGrdntArry = [
  '45deg, #eb904c 0%, #e74c3c 33%, #9b59b6 100%',
  '-45deg, #efd45c 0%, #eb904c 66%, #e74c3c 100%',
  '45deg, #00b1d4 0%, #efd45c 66%, #eb904c 100%',
  '-45deg, #00b1d4 0%, #9b59b6 100%',
  '45deg, #4ac833 0%, #00b1d4 66%, #9b59b6 100%'
];

function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
*/

var post = document.body.className.match(/(\bcategories-notes\b|\bcategories-work\b)/g);
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

/*
(function() {
  var links = document.getElementsByTagName('a');
  var img = document.createElement('img');

  if (!post) {
    img.setAttribute('src', imgSrc);
  }

  img.addEventListener('load', function() {
    var links = document.querySelector('.content').getElementsByTagName('a');
    var tags = document.querySelector('.post-hero-tag');
    var colorThief = new ColorThief();
    var rgbColor = colorThief.getColor(img);
    var hexColor = rgbToHex(rgbColor[0], rgbColor[1], rgbColor[2]);

    for (var i = 0; i < links.length; i++) {
      if (links[i].href) {
        links[i].style.color = hexColor;
      }
    }
    tags.style.backgroundColor = hexColor;
  });
}(window));
*/

/*
else if (post) {
 var img = document.createElement('img');
 var getImg = document.querySelector('[data-js="full-screen"]');
 var style = getImg.currentStyle || window.getComputedStyle(getImg, false);
 var imgSrc = style.backgroundImage.slice(4, -1);

 console.log(imgSrc);
 img.setAttribute('src', imgSrc);
}
*/

/*
(function() {
  var element = document.querySelector('[data-js="gradient-overlay"]');
  var randomNum = Math.floor(Math.random() * bgGrdntArry.length);
  var bgGrdnt = 'linear-gradient(' + bgGrdntArry.splice(randomNum, 1) + ')';

  if (!post) {
    element.style.backgroundImage = bgGrdnt;
  }
}(window));
*/

var onScroll = function() {
  var element = document.querySelector('[data-js="sidebar-toggle"]');
  var scrollBarPosition = window.pageYOffset | document.body.scrollTop;
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

function logoAnimate(el) {
  var element = document.querySelector(el);
  var child = element.childNodes[1];

  child.style.background = colorsArray[0].light;

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

/*
function shareUrlEncode(el) {
  var element = document.querySelector(el);
  var children = element.getElementsByTagName('A');
  for (var i = 0; i < children.length; i++) {
    var url = children[i].getAttribute('href').split('?');
    var baseUrl = url[0]
    var encodedUrl = encodeURIComponent(url[1]);
    children[i].setAttribute('href', baseUrl + encodedUrl);
  }
};
*/

function init() {
  fadeIn('body');
  navToggle('[data-js="sidebar-toggle"]');
  logoAnimate('[data-js="logo"]');
  //shareUrlEncode('[data-js="share"]');
  locationColors('[data-js="location"]', '[data-js="pin"]');
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

/*
// Google Maps
var map;
var latitude = 41.967086;
var longitude = -87.656555;
var chicago = new google.maps.LatLng(latitude, longitude);
var cdunnMap = 'custom_style';
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: chicago,
    scrollwheel: false,
    draggable: true,
    zoomControl: false,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeId: [google.maps.MapTypeId.ROADMAP, cdunnMap]
    },
    mapTypeId: cdunnMap
  };
  var featureOpts = [
    {
      stylers: [
        { visibility: 'simplified' },
        { color: '#44474c' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#00b1d4' }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { visibility: 'on' },
        { color: '#5c6067' }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'labels',
      stylers: [
        { color: '#eaeaea' }
      ]
    }
  ];
  map = new google.maps.Map(document.querySelector('[data-js="map-home"]'),
      mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map: map,
    visible: true,
    title: 'Serving the Chicagoland area'
  });
  var styledMapOptions = {
    name: 'Custom Style'
  };
  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
  map.mapTypes.set(cdunnMap, customMapType);
}
google.maps.event.addDomListener(window, 'load', initialize);
*/

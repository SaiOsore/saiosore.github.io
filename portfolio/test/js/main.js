"use strict";

var dropdownFunc = function dropdownFunc(items, dropdown, dropdownActiveClass) {
  items = document.querySelectorAll(items);
  items.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var dropdownList = item.querySelector(dropdown);
      var noLinkJs = document.querySelector('.noLinkJs');

      if (dropdownList) {
        if (this.contains(noLinkJs)) {
          e.preventDefault();
        }

        dropdownList.classList.toggle(dropdownActiveClass);
      }
    });
  });
};

dropdownFunc('.header__mobile-nav-item', '.header__mobile-dropdown', 'active-block');
dropdownFunc('.header__menu-call', '.header__menu-call-dropdown', 'active-block');
dropdownFunc('.property-filters-tab-list__item-main', '.property-filters-tab-list__dropdown', 'active-block');
"use strict";
"use strict";

new SimpleLightbox({
  elements: '.certificatesGalleryJs a'
});
new SimpleLightbox({
  elements: '.cardGalleryJs a'
});
"use strict";

var headerBtn = document.querySelector('.headerBtnMenuJs'),
    headerMenu = document.querySelector('.headerMenuJs'),
    body = document.body,
    dropdownMobileLink = document.querySelectorAll('.header__mobile-dropdown-link');
headerBtn.addEventListener('click', function (e) {
  e.preventDefault();
  headerBtn.classList.toggle('header__btn-menu-active');
  headerMenu.classList.toggle('active-block');
  body.classList.toggle('body-fixed');
});
dropdownMobileLink.forEach(function (link) {
  link.addEventListener('click', function () {
    body.classList.remove('body-fixed');
    headerBtn.classList.remove('header__btn-menu-active');
    headerMenu.classList.remove('active-block');
  });
});
"use strict";

var locationPathName = location.pathname;

function scrollIt(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeInQuad';
  var callback = arguments.length > 3 ? arguments[3] : undefined;
  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };
  var header = 145;

  if (window.matchMedia("(min-width: 425px)").matches) {
    header = 115;
  }

  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset - header);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);

    if (callback) {
      callback();
    }

    return;
  }

  function scroll() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }

      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

if (locationPathName === '/') {
  //logo
  var logoLinkJs = document.querySelector('.logoLinkJs');
  logoLinkJs.href = 'javascript:void(0);'; //anchors

  var linkNav = document.querySelectorAll('[href^="./#"]');

  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
      var hash = this.href.replace(/[^#]*(.*)/, '$1');
      scrollIt(document.querySelector(hash), 400, 'easeOutQuad');
    });
  }
}

if (locationPathName === '/property.html') {
  var propertyLink = document.getElementById('propertyLinkAnchor');
  propertyLink.addEventListener('click', function (e) {
    var hash = this.href.replace(/[^#]*(.*)/, '$1');
    scrollIt(document.querySelector(hash), 500, 'easeOutQuad');
  });
}
"use strict";
"use strict";

var popupToggle = function popupToggle(link, myclass) {
  link = document.querySelector(link);
  link.classList.toggle(myclass);
};

var popupFunc = function popupFunc(closeBtn, link, myclass) {
  closeBtn = document.querySelectorAll(closeBtn);
  closeBtn.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.toggle('body-fixed');
      popupToggle(link, myclass);
    });
  });
};

popupFunc('.feedbackCloseJS', '.feedbackJS', 'feedback-popup--active');
popupFunc('.propertyPopupCloseJs', '.feedbackJS', 'feedback-popup--active');
"use strict";

var sliderAuto = function sliderAuto(slider, miliseconds) {
  slider.isLastSlide = function () {
    return slider.page >= slider.dots.childElementCount - 1;
  };

  var slide = function slide() {
    slider.slideTimeout = setTimeout(function () {
      var slideTo = function slideTo() {
        return slider.isLastSlide() ? 0 : slider.page + 1;
      };

      slider.scrollItem(slideTo(), true);
    }, miliseconds);
  };

  slider.ele.addEventListener('glider-animated', function (event) {
    window.clearInterval(slider.slideTimeout);
    slide();
  });
  slide();
};

window.addEventListener('load', function () {
  var teamSlider = new Glider(document.querySelector('.team-slider'), {
    slidesToShow: 1,
    dots: '.dots',
    draggable: true,
    dragVelocity: 4,
    responsive: [{
      breakpoint: 498,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: true
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3
      }
    }]
  });
  sliderAuto(teamSlider, 4000);
});
window.addEventListener('load', function () {
  var expertsSlider = new Glider(document.querySelector('.experts-slider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.dots',
    draggable: true,
    dragVelocity: 4,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3
      }
    }]
  });
});
"use strict";

var TabsFunc = function TabsFunc(tabNav, tabNavActive, tabContent, tabContentActive) {
  tabNav = document.querySelectorAll(tabNav);
  tabContent = document.querySelectorAll(tabContent);
  var tabs, tabName;
  tabNav.forEach(function (item) {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach(function (item) {
      item.classList.remove(tabNavActive);
    });
    this.classList.add(tabNavActive);
    tabName = this.getAttribute('data-tab');
    selectTabContent(tabName);
  }

  function selectTabContent(tab) {
    tabContent.forEach(function (item) {
      tabs = item.getAttribute('data-tab');

      if (tabs === tab) {
        item.classList.add(tabContentActive);
      } else {
        item.classList.remove(tabContentActive);
      }
    });
  }
};

TabsFunc('.property-filters-tab-list__item-main', 'active-color');
TabsFunc('.property-filters-tab-list__item', 'active-color', '.property-filters-tab-content', 'active-flex');
TabsFunc('.property-filters__main-btn', 'active-btn');
TabsFunc('.property-cards-filter__btn', 'active-btn');
TabsFunc('.personal-area-tab-list__btn', 'active-btn-br', '.personal-area-tab-content', 'active-flex');
//# sourceMappingURL=maps/main.js.map

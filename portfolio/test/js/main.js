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
dropdownFunc('.personal-area-section__item', '.personal-area-section__clients-dropdown', 'active-block');

new SimpleLightbox({
  elements: '.certificatesGalleryJs a'
});
new SimpleLightbox({
  elements: '.cardGalleryJs a'
});
new SimpleLightbox({
  elements: '.footerMapGalleryJs a'
});

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

var locationPathName = location.pathname;

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

popupFunc('.feedbackCloseJS', '.feedbackJS', 'active-flex');
popupFunc('.propertyPopupCloseJs', '.feedbackJS', 'active-flex');
popupFunc('.PASEditCloseJs', '.PASEditJS', 'active-block');

var showContent = function showContent(elements, howToDisplay) {
  var element, index;
  elements = elements.length ? elements : [elements];

  for (index = 0; index < elements.length; index++) {
    element = elements[index];

    if (isElementHidden(element)) {
      element.style.display = '';

      if (isElementHidden(element)) {
        element.style.display = howToDisplay || 'block';
      }
    } else {
      element.style.display = 'none';
    }
  }

  function isElementHidden(element) {
    return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
  }
};

var aboutBtn = document.querySelector('.about__btn');

if (aboutBtn) {
  aboutBtn.addEventListener('click', function () {
    showContent(document.querySelector('.activity'));
  });
}

var otherBtn = document.querySelector('.display-other');

if (otherBtn) {
  otherBtn.addEventListener('click', function () {
    showContent(document.querySelector('.other'), 'flex');
  });
}

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

var teamSliderVar = document.querySelector('.team-slider');
var expertsSliderVar = document.querySelector('.experts-slider');
var partnersSliderVar = document.querySelector('.partners-slider');

if (teamSliderVar) {
  var teamSlider = new Glider(teamSliderVar, {
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
}

if (expertsSliderVar) {
  var expertsSlider = new Glider(expertsSliderVar, {
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
}

if (partnersSliderVar) {
  var partnersSlider = new Glider(partnersSliderVar, {
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
        slidesToShow: 5,
        slidesToScroll: 3
      }
    }]
  });
}

var TabsFunc = function TabsFunc(tabNav, tabNavActive, tabContent, tabContentActive) {
  tabNav = document.querySelectorAll(tabNav);
  tabContent = document.querySelectorAll(tabContent);
  var tabs, tabName;
  tabNav.forEach(function (item) {
    if (tabNav) {
      if (localStorage.getItem('active-tab') !== null) {
        var savedValue = localStorage.getItem('active-tab');
        tabNav.forEach(function (item) {
          item.classList.remove(tabNavActive);

          if (item.dataset.tab === savedValue) {
            item.classList.add(tabNavActive);
          }
        });
        tabContent.forEach(function (item) {
          item.classList.remove(tabContentActive);

          if (item.dataset.tab === savedValue) {
            item.classList.add(tabContentActive);
          }
        });
        item.addEventListener('click', selectTabNav);
      } else if (localStorage.getItem('active-tab') === null) {
        item.addEventListener('click', selectTabNav);
      }
    } else {
      item.addEventListener('click', selectTabNav);
    }

    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach(function (item) {
      item.classList.remove(tabNavActive);
    });
    this.classList.add(tabNavActive);
    tabName = this.getAttribute('data-tab');

    if (tabNav) {
      localStorage.setItem('active-tab', tabName);
    }

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

TabsFunc('.personal-area-tab-list__btn', 'active-btn-br', '.personal-area-tab-content', 'active-flex');
//# sourceMappingURL=maps/main.js.map

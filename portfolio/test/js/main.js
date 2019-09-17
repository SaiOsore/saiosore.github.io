"use strict";

(function () {
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
})();

var customForEach = function customForEach(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

Array.prototype.remove = function (value) {
  var idx = this.indexOf(value);

  if (idx != -1) {
    return this.splice(idx, 1);
  }

  return false;
};

var createCookie = function createCookie(name, value, days) {
  var expires = '',
      date = new Date();

  if (days) {
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toGMTString();
  }

  document.cookie = name + '=' + value + expires + '; path=/';
};

var getCookie = function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

var setChoosensCookie = function setChoosensCookie(arr) {
  var stringifyArr = JSON.stringify(arr);
  createCookie('choosensArr', stringifyArr, '30');
};

var deleteCookie = function deleteCookie(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

var uniqueArr = function uniqueArr(arr) {
  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var str = _step.value;

      if (!result.includes(str)) {
        result.push(str);
      } else {
        result.remove(str);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
};

var findChoosenId = function findChoosenId(choosen) {
  var choosenId = choosen.id;
  return choosenId;
};

var elementToArr = function elementToArr(arr, element) {
  arr.push(element);
  return uniqueArr(arr);
};

var choosens = document.querySelectorAll('.choosensJs');
var choosensArr = [];

if (choosens) {
  customForEach(choosens, function (index, choosen) {
    var choosenBtn = choosen.querySelector('.ChoosenBtnJs');
    choosenBtn.addEventListener('click', function () {
      choosenBtn.classList.toggle('active-svg');
      var foundedID = findChoosenId(choosen);
      var pushedArr = elementToArr(choosensArr, foundedID);
      setChoosensCookie(pushedArr);
    }, true);
  });
}

(function () {
  var filterNav = document.querySelector('.category-selector');
  var hiddenElements = document.querySelectorAll('.searchform .hidden');
  var tabValue, tabContent;

  var SelectCategory = function SelectCategory() {
    if (filterNav) {
      var selectTabValue = function selectTabValue() {
        tabValue = filterNav.options[filterNav.selectedIndex].value;
        tabValue = +tabValue;
        selectTabContent(tabValue);
      };

      var selectTabContent = function selectTabContent(tab) {
        customForEach(hiddenElements, function (index, item) {
          tabContent = item.getAttribute('data-tab');
          tabContent = JSON.parse(tabContent);

          for (var tabNums in tabContent) {
            var tabNum = tabContent[tabNums];

            if (tabNum === tab) {
              item.classList.remove('hidden');
            }
          }
        });
      };

      hiddenElements.forEach(function (element) {
        element.classList.add('hidden');
      });
      selectTabValue();
    }
  };

  if (filterNav) {
    filterNav.addEventListener('change', SelectCategory);
  }
})();

(function () {
  new SimpleLightbox({
    elements: '.certificatesGalleryJs a'
  });
  new SimpleLightbox({
    elements: '.cardGalleryJs a'
  });
  new SimpleLightbox({
    elements: '.footerMapGalleryJs a'
  });
})();

(function () {
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
})();

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

  if (window.matchMedia("(max-width: 425px)").matches) {
    header = 115;
  }

  console.log(header);

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

(function () {
  var logoLinkJs = document.querySelector('.logoLinkJs');
  var propertyLink = document.getElementById('propertyLinkAnchor');

  if (logoLinkJs) {
    //logo
    logoLinkJs.href = 'javascript:void(0);'; //anchors

    var linkNav = document.querySelectorAll('[href^="./#"]');

    for (var i = 0; i < linkNav.length; i++) {
      linkNav[i].addEventListener('click', function (e) {
        var hash = this.href.replace(/[^#]*(.*)/, '$1');
        scrollIt(document.querySelector(hash), 400, 'easeOutQuad');
      });
    }
  }

  if (propertyLink) {
    propertyLink.addEventListener('click', function (e) {
      var hash = this.href.replace(/[^#]*(.*)/, '$1');
      scrollIt(document.querySelector(hash), 500, 'easeOutQuad');
    });
  }
})();

(function () {
  var addressId = document.getElementById('address');

  if (addressId) {
    var initMap = function initMap() {
      var kyiv = new google.maps.LatLng(50.45466, 30.5238);
      infowindow = new google.maps.InfoWindow();
      map = new google.maps.Map(document.getElementById('map'), {
        center: kyiv,
        zoom: 15
      });
      var request = {
        query: address,
        fields: ['name', 'geometry']
      };
      service = new google.maps.places.PlacesService(map);
      service.findPlaceFromQuery(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }

          map.setCenter(results[0].geometry.location);
        }
      });
    };

    var createMarker = function createMarker(place) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
      google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    };

    var address = addressId.value;
    var map;
    var service;
    var infowindow;
    initMap();
  }
})();

(function () {
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
})();

(function () {
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

  var servicesBtn = document.querySelector('.services__btn');

  if (servicesBtn) {
    servicesBtn.addEventListener('click', function () {
      showContent(document.querySelectorAll('.services__container .display-none'), 'flex');
    });
  }

  var certificatesBtn = document.querySelector('.certificates__load-btn');

  if (certificatesBtn) {
    certificatesBtn.addEventListener('click', function () {
      showContent(document.querySelectorAll('.certificates__container .display-none'));
    });
  }
})();

(function () {
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
          slidesToShow: 4
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
})();

(function () {
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
})();
//# sourceMappingURL=maps/main.js.map

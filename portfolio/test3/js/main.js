// let capture = document.querySelector(".capture");
// let time = 500;
// let splitAnimation = function(tag, time) {
//   html2canvas(document.querySelector(`${tag}`)).then(canvas => {
//     let time = 3000 || time;
//     let width = canvas.width;
//     let height = canvas.height;
//     let ctx = canvas.getContext('2d');
//     let idata = ctx.getImageData(0,0, width, height);
//     let datums = [];
//     for (let i = 0; i < 36; i++) {
//       datums.push(ctx.createImageData(width, height))
//     }
//     for (let f = 0; f < width; f++) {
//       for (let k = 0; k < height; k++) {
//         for (let l = 0; l < 2; l++) {
//           let n = 4*(k*width + f);
//           let m = Math.floor(36*(Math.random() + 2*f/width)/3);
//           for (let p = 0; p < 4; p++) {
//             datums[m].data[n+p] = idata.data[n+p];
//           }
//         }
//       }
//     }
//     datums.forEach((imagedata, i)=>{
//       let cloned = canvas.cloneNode();
//       cloned.style.transition = 'all 3.5s ease-out ' + i/36 + "s";
//       cloned.getContext('2d').putImageData(imagedata,0,0);
//       document.body.appendChild(cloned);
//       setTimeout(()=>{
//         let angle = (Math.random() - 0.5)*2*Math.PI;
//         let rotateAngle = 15 * (Math.random() - 0.5)
//         cloned.style.transform = "rotate("+rotateAngle+"deg) translate("+ 60*Math.cos(angle) +"px,"+ 60*Math.sin(angle) +"px)";
//         cloned.style.opacity = 0;
//       })
//     })
//     capture.style.display = 'none';
//     setTimeout(()=>{
//       capture.style.display = 'inline-block';
//     },time)
//   });
// }
// window.onload = splitAnimation('.capture');
// capture.addEventListener('click', function() {
//   splitAnimation('.capture');
// });
"use strict";
"use strict";

var sayHello = function sayHello() {
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c Made by Sai Osore (Valerii Hordon) %c %c %c https://saiosore.github.io/ %c %c \n', 'color: #fff; background: #e43333; padding:5px 0;', 'background: #131419; padding:5px 0;', 'background: #131419; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;', 'background: #fff; padding:5px 0;', 'color: #e43333; background: #fff; padding:5px 0;'];
    window.console.log.apply(console, args);
  } else if (window.console) {
    window.console.log('Made by Sai Osore (Valerii Hordon) - https://saiosore.github.io/');
  }
};

sayHello();
"use strict";

var addAnimation = function addAnimation(element, animName, duration, delay) {
  var el = element;
  var timer;

  var addClass = function addClass() {
    el.classList.add(animName);
  };

  var removeClass = function removeClass() {
    el.classList.remove(animName);
  };

  setInterval(function () {
    clearTimeout(timer);
    addClass();
    timer = setTimeout(removeClass, duration);
  }, duration + delay);
};

var carousel = function carousel(arr, cont) {
  var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : timer || 2000;
  var index = 0;
  var interval = 0;
  interval = setInterval(function () {
    index++;
    clearInterval(timer);

    if (cont.nodeType === '1') {
      if (index === arr.length) {
        cont.src = arr[0];
        index = 0;
      } else {
        cont.src = arr[index];
      }
    } else {
      if (index === arr.length) {
        cont.innerHTML = arr[0];
        index = 0;
      } else {
        cont.innerHTML = arr[index];
      }
    }
  }, timer);
};

var contactLoop = ['new projects!', 'experience!', 'sites!'];
var loopEl = document.querySelector('.loop');

if (loopEl) {
  carousel(contactLoop, loopEl, 1000);
}

var sqRotate = document.querySelector('.home-main-center');

if (sqRotate) {
  addAnimation(sqRotate, 'stripesAnimation', 2000, 5000);
} //HomePage CenterContainer


var centerContainer = document.querySelector('.home-main-center');
var centerImg = document.querySelector('.home-main-center__img');
var centerVideo = document.querySelector('.home-main-center__video');

var showVideo = function showVideo(el) {
  el.style.display = 'block';
  el.style.zIndex = '2';
};

var hideVideo = function hideVideo(el) {
  el.currentTime = 0;
  el.style.display = 'none';
  el.style.zIndex = '-1';
};

if (centerContainer) {
  centerContainer.addEventListener('mouseover', function () {
    showVideo(centerVideo);
  });
  centerContainer.addEventListener('click', function () {
    showVideo(centerVideo);
  });
}

if (centerVideo) {
  centerVideo.onended = function () {
    hideVideo(centerVideo);
  };
}

var aboutImg = document.querySelector('.about-main__img-wrapper');

if (aboutImg) {
  window.onload = function () {
    var animateTranslation = anime({
      targets: aboutImg,
      translateX: ['-150%', '0%'],
      autoplay: true,
      delay: 2000,
      easing: 'linear',
      duration: 500
    });
  };
}
"use strict";

//preloader
(function () {
  var preloader = document.querySelector('.preloader');
  var tl = anime.timeline({
    autoplay: false
  });
  document.body.classList.add('body-fixed');

  var isLoaded = function isLoaded() {
    setTimeout(document.onload = function () {
      document.body.classList.remove('body-fixed');
      preloader.classList.toggle('hidden');
    }, 100);
  };

  if (preloader) {
    var preloaderDelay = {
      targets: preloader,
      duration: 1500
    };
    var loaderFadeOut = {
      targets: preloader,
      opacity: {
        value: 0,
        duration: 300,
        easing: 'linear'
      },
      offset: '+=100',
      complete: function complete() {
        isLoaded();
      }
    };
    tl.add(preloaderDelay).add(loaderFadeOut);
    tl.play();
  }
})();
// //svg length
//   let path = document.querySelector('#portrait');
//   let len = Math.round(path.getTotalLength());
//   // console.log("Длина пути - " + len + "px");
// }
"use strict";
"use strict";

(function () {
  var tabNav = document.querySelectorAll('.works__link'),
      tabContent = document.querySelectorAll('.works__img');
  var tabName;
  tabNav.forEach(function (item) {
    item.addEventListener('mouseover', selectTabNav);
    item.addEventListener('click', selectTabNav);
    item.addEventListener('mouseout', deselectTabNav);
    item.addEventListener('mouseout', deselectTabContent);
  });

  function selectTabNav() {
    tabName = this.getAttribute('data-tab');
    selectTabContent(tabName);
    tabNav.forEach(function (item) {
      if (item.dataset.tab === tabName) {
        item.style.zIndex = '4';
        item.style.opacity = '1';
      } else {
        item.style.opacity = '.5';
        item.style.zIndex = '0';
      }
    });
  }

  function selectTabContent(tab) {
    tabContent.forEach(function (item) {
      if (item.dataset.tab === tab) {
        item.classList.add('works__img--active');
      } else {
        item.classList.remove('works__img--active');
      }
    });
  }

  function deselectTabContent() {
    tabContent.forEach(function (item) {
      item.classList.remove('works__img--active');
    });
  }

  function deselectTabNav() {
    tabNav.forEach(function (item) {
      item.style.opacity = '1';
    });
  }
})();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TypeWriter =
/*#__PURE__*/
function () {
  function TypeWriter(txtElement, words) {
    var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;

    _classCallCheck(this, TypeWriter);

    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  _createClass(TypeWriter, [{
    key: "type",
    value: function type() {
      var _this = this;

      var current = this.wordIndex % this.words.length;
      var fullTxt = this.words[current];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.txtElement.innerHTML = "<span class=\"txt\">".concat(this.txt, "<span class=\"txt-border\">|</span></span>");
      var typeSpeed = 300;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 1000;
      }

      setTimeout(function () {
        return _this.type();
      }, typeSpeed);
    }
  }]);

  return TypeWriter;
}();

var txtElement = document.querySelector('.txtAnimation');

if (txtElement) {
  var words = JSON.parse(txtElement.getAttribute('data-words'));
  var wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
}
//# sourceMappingURL=maps/main.js.map

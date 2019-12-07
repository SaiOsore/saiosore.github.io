"use strict";

//preloader
var preloader = document.querySelector('.preloader');

var bodyFixed = function bodyFixed() {
  document.body.classList.add('body-fixed');
};

var isPreloaderLoaded = function isPreloaderLoaded() {
  document.body.classList.remove('body-fixed');
  preloader.classList.add('hidden');
};

var preloaderAnim = {
  targets: preloader,
  delay: 1500,
  opacity: {
    value: 0,
    duration: 300,
    easing: 'linear'
  },
  offset: '+=100',
  begin: function begin() {
    bodyFixed();
  },
  complete: function complete() {
    isPreloaderLoaded();
  }
}; //animation by class init

var workScaleBig = document.querySelectorAll('.ScaleBigJs');
var workScaleMini = document.querySelectorAll('.ScaleMiniJs');
workScaleBig.forEach(function (item) {
  var workImgScroll = new Waypoint({
    element: item,
    handler: function handler() {
      var taskTranslation = anime({
        targets: item,
        scale: [1.5, 1],
        easing: 'linear',
        duration: 500
      });
      this.destroy();
    },
    offset: '100%'
  });
});
workScaleMini.forEach(function (item) {
  var workImgScroll = new Waypoint({
    element: item,
    handler: function handler() {
      var taskTranslation = anime({
        targets: item,
        scale: [0.7, 1],
        easing: 'linear',
        duration: 500
      });
      this.destroy();
    },
    offset: '100%'
  });
}); //home page animation

var mainTitle1 = document.querySelector('.home-main-title__name--first');
var mainTitle2 = document.querySelector('.home-main-title__name--second');
var logo = document.querySelector('.logo');
var mainLine = document.querySelector('.home-main-line');
var mainCenter = document.querySelector('.home-main-center');
var mainCenterAnim = {
  targets: mainCenter,
  translateY: '-50%',
  translateX: '-50%',
  scale: ['0', '1'],
  autoplay: true,
  easing: 'linear'
};
var mainTitle1Anim = {
  targets: mainTitle1,
  translateX: ['-150%', '-50%'],
  opacity: ['0', '1'],
  autoplay: true,
  easing: 'linear',
  delay: 200
};
var mainTitle2Anim = {
  targets: mainTitle2,
  translateX: ['150%', '-50%'],
  opacity: ['0', '1'],
  autoplay: true,
  easing: 'linear'
};
var logoAnim = {
  targets: logo,
  opacity: ['0', '1'],
  autoplay: true,
  easing: 'linear'
};
var mainLineAnim = {
  targets: mainLine,
  translateX: '-50%',
  translateY: '-50%',
  scale: [0, 1],
  autoplay: true,
  easing: 'linear'
};
var tlHome = anime.timeline({
  autoplay: false,
  duration: 500
});
tlHome.add(preloaderAnim).add(mainCenterAnim).add(mainTitle1Anim).add(mainTitle2Anim).add(logoAnim).add(mainLineAnim).add({
  targets: '.home-main-counter__num',
  opacity: ['0', '1'],
  translateY: ['10%', '0%'],
  easing: 'linear',
  duration: 400,
  delay: anime.stagger(100)
});
tlHome.play(); //about img animation

var aboutImg = document.querySelector('.about-main__img-wrapper');
var aboutArticle = document.querySelector('.about-article');
var aboutImgAnim = anime({
  targets: aboutImg,
  translateX: ['-150%', '0%'],
  autoplay: true,
  easing: 'spring(1, 50, 10, 0)',
  duration: 500,
  delay: 2000
});
var aboutArticleAnim = anime({
  targets: aboutArticle,
  translateX: ['150%', '0%'],
  autoplay: true,
  easing: 'spring(1, 50, 10, 0)',
  duration: 500,
  delay: 2000
}); //works links animation

var worksLinkAnim;

if (window.matchMedia("(min-width: 992px)").matches) {
  worksLinkAnim = {
    targets: '.works__link',
    translateY: ['150%', '0%'],
    easing: 'linear',
    duration: 600,
    delay: anime.stagger(200)
  };
} else {
  worksLinkAnim = {
    targets: '.works__link',
    translateX: ['-400%', '0%'],
    easing: 'linear',
    duration: 600,
    delay: anime.stagger(200)
  };
}

var tlWorks = anime.timeline({
  autoplay: false
});
tlWorks.add(preloaderAnim).add(worksLinkAnim);
tlWorks.play(); //article prev, tasks and list animation

var articlePrevTasks = document.querySelectorAll('.article-preview__task');
var articlePrevTitleMini = document.querySelectorAll('.article-preview__title-mini');
articlePrevTasks.forEach(function (task) {
  var waypoint = new Waypoint({
    element: task,
    handler: function handler() {
      var taskTranslation = anime({
        targets: task,
        opacity: ['0', '1'],
        translateY: ['50%', '0%'],
        easing: 'linear',
        duration: 500
      });
    },
    offset: '100%'
  });
});
articlePrevTitleMini.forEach(function (task) {
  var waypoint = new Waypoint({
    element: task,
    handler: function handler() {
      var titleMiniTranslation = anime({
        targets: task,
        opacity: ['0', '1'],
        translateY: ['-50%', '0%'],
        easing: 'linear',
        duration: 500
      });
    },
    offset: '100%'
  });
});
var previewList = document.querySelectorAll('.article-preview__list');
var articlePreview = document.querySelector('.article-preview');
var workMain = document.querySelector('.work-main');
var previewItem;
var listAnim;
previewList.forEach(function (list) {
  var listScroll = new Waypoint({
    element: list,
    handler: function handler() {
      if (articlePreview) {
        previewItem = document.querySelectorAll('.article-preview .article-preview__item');
        listAnim = anime({
          targets: previewItem,
          opacity: ['0', '1'],
          easing: 'linear',
          duration: 200,
          delay: anime.stagger(200)
        });
      } else if (workMain) {
        previewItem = document.querySelectorAll('.work-main .article-preview__item');
        listAnim = anime({
          targets: previewItem,
          opacity: ['0', '1'],
          easing: 'linear',
          duration: 200,
          delay: anime.stagger(200, {
            start: 3500
          })
        });
      }
    },
    offset: '100%'
  });
}); //work animation

var workMainTitle = document.querySelector('.work-main__title');
var workMainLink = document.querySelector('.work-main__link-back');
var workMainText = document.querySelector('.work-main__text');
var workTextS = document.querySelectorAll('.work-text');
var workMainTl = anime.timeline({
  autoplay: false,
  easing: 'easeOutExpo',
  duration: 500
});
workMainTl.add(preloaderAnim).add({
  targets: workMainTitle,
  delay: 300,
  opacity: ['0', '1']
}).add({
  targets: workMainLink,
  translateX: ['-300%', '0%']
}).add({
  targets: workMainText,
  translateX: ['300%', '0%']
});
workMainTl.play();
workTextS.forEach(function (text) {
  var workTextScroll = new Waypoint({
    element: text,
    handler: function handler() {
      var textAnim = anime({
        targets: text,
        opacity: ['0', '1'],
        easing: 'linear',
        duration: 700
      });
    },
    offset: '100%'
  });
}); //contact animation

var contactLinesAnim = anime({
  targets: '.contact__line',
  opacity: ['0', '1'],
  translateY: ['50%', '0%'],
  easing: 'linear',
  duration: 600,
  delay: anime.stagger(300, {
    start: 1500
  })
}); //development animation

var devTitle = document.querySelector('.dev-main__title');
var devTitleMini = document.querySelector('.dev-main__title-sub');
var devDescr = document.querySelector('.dev-main__title-descr');
var devSkills = document.querySelector('.dev-skills');
var devMainTl = anime.timeline({
  autoplay: false,
  easing: 'easeOutExpo',
  duration: 500
});
devMainTl.add(preloaderAnim).add({
  targets: devTitle,
  delay: 500,
  opacity: ['0', '1']
}).add({
  targets: devTitleMini,
  translateX: ['-300%', '0%']
}).add({
  targets: devDescr,
  translateX: ['300%', '0%']
});
devMainTl.play();

if (devSkills) {
  var devItemsAnimScroll = new Waypoint({
    element: devSkills,
    handler: function handler() {
      var devItemsAnim = anime({
        targets: '.dev-skills__item',
        opacity: ['0', '1'],
        translateX: ['30%', '0%'],
        easing: 'linear',
        duration: 300,
        delay: anime.stagger(100)
      });
      var devNamesAnim = anime({
        targets: '.dev-skills__title-name',
        opacity: ['0', '1'],
        translateX: ['30%', '0%'],
        easing: 'linear',
        duration: 300,
        delay: anime.stagger(100)
      });
      var devTitlesAnim = anime({
        targets: '.dev-skills__title',
        opacity: ['0', '1'],
        easing: 'linear',
        duration: 300,
        delay: anime.stagger(100, {
          start: 200
        })
      });
      var devDescrsAnim = anime({
        targets: '.dev-skills__title-descr',
        opacity: ['0', '1'],
        easing: 'linear',
        duration: 300,
        delay: anime.stagger(100, {
          start: 300
        })
      });
    },
    offset: '100%'
  });
} //social links animation


var social = document.querySelector('.social');

if (social) {
  var _devItemsAnimScroll = new Waypoint({
    element: social,
    handler: function handler() {
      var socialAnim = anime({
        targets: '.social__item',
        opacity: ['0', '1'],
        easing: 'linear',
        duration: 300,
        delay: anime.stagger(100)
      });
    },
    offset: '100%'
  });
} //nav links animation


var socialAnim = anime({
  targets: '.nav__link',
  opacity: ['0', '1'],
  easing: 'linear',
  duration: 600,
  delay: anime.stagger(200, {
    start: 2000
  })
});
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

//HomePage CenterContainer
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
  centerContainer.addEventListener('mouseover', function (e) {
    e.preventDefault();
    showVideo(centerVideo);
  });
  centerContainer.addEventListener('click', function (e) {
    e.preventDefault();
    showVideo(centerVideo);
  });
}

if (centerVideo) {
  centerVideo.onended = function () {
    hideVideo(centerVideo);
  };
}
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

var sqRotate = document.querySelector('.home-main-center');

if (sqRotate) {
  addAnimation(sqRotate, 'stripesAnimation', 2000, 5000);
}

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
"use strict";

var phSliderJs = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
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

"use strict";

// class TypeWriter {
//   constructor(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
//   }
//   type() {
//     // Current index of word
//     const current = this.wordIndex % this.words.length;
//     // Get full text of current word
//     const fullTxt = this.words[current];
//     // Check if deleting
//     if(this.isDeleting) {
//       // Remove char
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//       // Add char
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
//     // Insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}<span class="txt-border">|</span></span>`;
//     // Initial Type Speed
//     let typeSpeed = 300;
//     if(this.isDeleting) {
//       typeSpeed /= 2;
//     }
//     // If word is complete
//     if(!this.isDeleting && this.txt === fullTxt) {
//       // Make pause at end
//       typeSpeed = this.wait;
//       // Set delete to true
//       this.isDeleting = true;
//     } else if(this.isDeleting && this.txt === '') {
//       this.isDeleting = false;
//       // Move to next word
//       this.wordIndex++;
//       // Pause before start typing
//       typeSpeed = 500;
//     }
//     setTimeout(() => this.type(), typeSpeed);
//   }
// }
// // Init On DOM Load
// document.addEventListener('DOMContentLoaded', init);
// // Init App
// function init() {
//   const txtElement = document.querySelector('.txt-type');
//   const words = JSON.parse(txtElement.getAttribute('data-words'));
//   const wait = txtElement.getAttribute('data-wait');
//   // Init TypeWriter
//   new TypeWriter(txtElement, words, wait);
// }
// //svg length
//   let path = document.querySelector('#portrait');
//   let len = Math.round(path.getTotalLength());
//   // console.log("Длина пути - " + len + "px");
// }
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

var doAnimation = function doAnimation(element, animName, duration, delay) {
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

var aboutLoop = ['new projects!', 'experience!', 'sites!'];
var loopEl = document.querySelector('.loop');
var centerImgArr = ['assets/img/main.JPG', 'assets/img/1.jpg', 'assets/img/2.jpg', 'assets/img/3.jpg', 'assets/img/4.jpg', 'assets/img/5.jpg', 'assets/img/6.jpg', 'assets/img/7.jpg'];
var centerImgContainer = document.querySelector('.home-main-center__img');
var sqRotate = document.querySelector('.home-main-center');

if (centerImgContainer) {
  var imgContainerNumber = Math.floor(Math.random() * centerImgArr.length);
  centerImgContainer.src = centerImgArr[imgContainerNumber];
}

if (sqRotate) {
  doAnimation(sqRotate, 'stripesAnimation', 2000, 5000);
}

if (loopEl) {
  carousel(aboutLoop, loopEl, 1000);
} // if(centerImgContainer) {
//   centerImgContainer.addEventListener('mouseover', () => {
//     carousel(centerImgArr, centerImgContainer, 200);
//   });
// }
//preloader
// (() => {
//   const preloader = document.querySelector('.preloader');
//   if(preloader) {
//     setTimeout(document.onload = () => {
//       preloader.classList.toggle('hidden');
//     }, 3000);
//   }
// })();
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
//# sourceMappingURL=maps/main.js.map

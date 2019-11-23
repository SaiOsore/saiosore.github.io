const addAnimation = (element, animName, duration, delay) => {
  const el = element;
  let timer;
  const addClass = () => {
    el.classList.add(animName);
  }
  const removeClass = () => {
    el.classList.remove(animName);
  }
  setInterval(() => {
    clearTimeout(timer);
    addClass();
    timer = setTimeout(removeClass, duration);
  }, duration + delay);
}

const carousel = (arr, cont, timer = timer || 2000) => {
  let index = 0;
  let interval = 0;
  interval = setInterval(() => {
    index++;
    clearInterval(timer);
    if(cont.nodeType === '1') {
      if(index === arr.length) {
        cont.src = arr[0];
        index = 0;
      } else {
        cont.src = arr[index];
      }
    } else {
      if(index === arr.length) {
        cont.innerHTML = arr[0];
        index = 0;
      } else {
        cont.innerHTML = arr[index];
      }
    }
  }, timer);
}

const contactLoop = ['new projects!', 'experience!', 'sites!'];
const loopEl = document.querySelector('.loop');
if(loopEl) {
  carousel(contactLoop, loopEl, 1000);
}

const sqRotate = document.querySelector('.home-main-center');
if(sqRotate) {
  addAnimation(sqRotate, 'stripesAnimation', 2000, 5000);
}

//HomePage CenterContainer
const centerContainer = document.querySelector('.home-main-center');
const centerImg = document.querySelector('.home-main-center__img');
const centerVideo = document.querySelector('.home-main-center__video');

const showVideo = (el) => {
  el.style.display = 'block';
  el.style.zIndex = '2';
}

const hideVideo = (el) => {
  el.currentTime = 0;
  el.style.display = 'none';
  el.style.zIndex = '-1';
}


if(centerContainer) {
  centerContainer.addEventListener('mouseover', () => {
    showVideo(centerVideo);
  });
  centerContainer.addEventListener('click', () => {
    showVideo(centerVideo);
  });
}

if(centerVideo) {
  centerVideo.onended = () => {
    hideVideo(centerVideo);
  };
}
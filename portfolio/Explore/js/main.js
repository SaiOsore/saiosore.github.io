$('.myBtn').bind('click', fadeOut);

function fadeOut() {

    TweenMax.to(".myBtn", 1, {
        y: -100,
        opacity: 0
    });
    TweenMax.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2
    });
    TweenMax.from(".overlay__title", 2, {
        ease: Power2.easeInOut
    });
    TweenMax.to(".overlay", 2, {
        delay: 2.6,
        top: "-110%",
        ease: Expo.easeInOut
    });
    TweenMax.to(".overlay--color", 2, {
        delay: 3,
        top: "-110%",
        ease: Expo.easeInOut
    });
    TweenMax.to(".header", 2, {
        delay: 3.5,
        opacity: 1,
        ease: Expo.easeInOut,
        zIndex: 0
    });
    TweenMax.to(".content__wrapper", 2, {
        delay: 3.5,
        opacity: 1,
        ease: Back.easeInOut,
        zIndex: 0
    });
    TweenMax.from(".content", 2, {
        delay: 3.9,
        opacity: 0,
        ease: Back.easeInOut
    });
    TweenMax.to(".content", 2, {
        opacity: 1,
        y: -300,
        delay: 3.9,
        ease: Back.easeInOut
    });
    TweenMax.to(".forAnima", 2, {
        opacity: 1,
        autoAlpha: 1,
        display: 'block',
        delay: 4.2,
        ease: Back.easeInOut
    });
    TweenMax.to(".footer", 2, {
        opacity: 1,
        autoAlpha: 1,
        display: 'flex',
        delay: 4.2,
        ease: Back.easeInOut
    });
};



class Drag {

    static init() {

        Drag.box = document.getElementsByClassName('box')[0];

        Drag.box.addEventListener("dragstart", Drag.dragstart);
        Drag.box.addEventListener("dragend", Drag.dragend);

        const containers = document.getElementsByClassName('holder');

        for (const container of containers) {
            container.addEventListener("dragover", Drag.dragover);
            container.addEventListener("dragenter", Drag.dragenter);
            container.addEventListener("dragleave", Drag.dragleave);
            container.addEventListener("drop", Drag.drop);
        }
    }

    static dragstart() {
        this.className += " held";

        setTimeout(() => this.className = "invisible", 0);
    }

    static dragend() {
        this.className = "box";
    }

    static dragover(e) {
        e.preventDefault();
    }

    static dragenter(e) {
        e.preventDefault();
        this.className += " hovered";
    }

    static dragleave() {
        this.className = "holder";
    }

    static drop() {
        this.className = "holder";
        this.append(Drag.box);
    }

}

document.addEventListener("DOMContentLoaded", Drag.init);
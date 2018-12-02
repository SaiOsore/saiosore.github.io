var ExpandTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise
            .all([this.newContainerLoading, this.zoom()])
            .then(this.showNewPage.bind(this));
    },

    zoom: function() {
        var deferred = Barba.Utils.deferred();
        deferred.resolve();
        return deferred.promise;
    },

    showNewPage: function() {
        this.done();
    }
});

Barba.Pjax.getTransition = function() {
    var transitionObj = ExpandTransition;

    //Barba.HistoryManager.prevStatus().namespace 
    return transitionObj;
};

// document.addEventListener('wheel', function(event) {
//     console.log(event);
// })

Barba.Pjax.start();

//about
$('.menu__btn').on('click', function() {
    $('.nav').slideToggle('fast', function() {
        if ($(this).css('display') === "none") {
            $(this).removeAttr('style');
        }
    });
    $('.menu__btn').toggleClass('btn--active');
});
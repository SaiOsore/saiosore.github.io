$(document).ready(function(){
  //menu
    $('.hamburger').on('click', function() {
      $('.nav').slideToggle('fast', function() {
        if( $(this).css('display') === "none") {
            $(this).removeAttr('style');
        }
        $('.hamburger').toggleClass('is-active');
        $('body').toggleClass('fixed');
    });
  });
});

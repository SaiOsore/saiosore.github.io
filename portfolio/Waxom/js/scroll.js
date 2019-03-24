//scroll to elements
  var $section = $('html, body');
  $('a[href*="#"]').click(function() {
  $section.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 1400);
    return false;
  });
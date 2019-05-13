var offset = $('.header').offset().top;

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll > offset) {
    $('.header').addClass('sticky');
  }
  else {
    $('.header').removeClass('sticky');
  }
});

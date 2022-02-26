$(document).ready(function () {
  // variables
  const animations = ['slide-left', 'slide-right', 'fade-in', 'slide-bottom', 'slide-bottom-2', 'slide-bottom-3'];

  // functions
  function toggleNavbarStyleOnScroll() {
    var winTop = $(window).scrollTop();
    if (winTop > 100) {
      $('.navbar-wrapper').addClass('active');
    } else {
      $('.navbar-wrapper').removeClass('active');
    }
  }

  // smaller top navigation on refresh
  toggleNavbarStyleOnScroll();

  // navbar Toggle on Mobile
  $('.navbar-toggler').click(function () {
    $('#collapsibleNavbar').addClass('active');
    $('#overlay-modal').addClass('active');
  });
  $('#overlay-modal').click(function () {
    $('#collapsibleNavbar').removeClass('active');
    $(this).removeClass('active');
  });

  // window scroll listener
  $(window).scroll(function () {
    toggleNavbarStyleOnScroll();

    animations.forEach(animation => {
      $(`.${animation}-animation`).each(function () {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 500) $(this).addClass(animation);
      });
    });
  });
});

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

  // navbar Toggle on mobile
  $('.navbar-toggler').click(function () {
    $('#collapsibleNavbar').addClass('active');
    $('#overlay-modal').addClass('active');
  });

  // navbar and cart sidebar close
  $('#overlay-modal').click(function () {
    $('#collapsibleNavbar').removeClass('active');
    $('.sidebar').removeClass('active');
    $(this).removeClass('active');
  });

  // cart sidebar close
  $('.close-sidebar').click(function () {
    $('.sidebar').removeClass('active');
    $('#overlay-modal').removeClass('active');
  });

  // cart sidebar open
  $('.open-cart-sidebar').click(function () {
    $('.cart-sidebar').addClass('active');
    $('#overlay-modal').addClass('active');
  });
  // Variant filter sidebar open
  $('#variant-filters-toggler').click(function () {
    $('.variant-filters-sidebar').addClass('active');
    $('#overlay-modal').addClass('active');
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

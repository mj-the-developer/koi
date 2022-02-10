$(document).ready(function () {
  // Smaller top navigation on scroll
  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if (winTop > 100) {
      $('.navbar-wrapper').addClass("active");
    } else {
      $('.navbar-wrapper').removeClass("active");
    }
  });
  var winTop = $(window).scrollTop();
  if (winTop > 100) {
    $('.navbar-wrapper').addClass("active");
  } else {
    $('.navbar-wrapper').removeClass("active");
  }

  // Navbar Toggle on Mobile
  $('.navbar-toggler').click(function () {
    $('#collapsibleNavbar').addClass('active');
    $('#overlay-modal').addClass('active');
  });
  $('#overlay-modal').click(function () {
    $('#collapsibleNavbar').removeClass('active');
    $(this).removeClass('active');
  });

  // Animations on Scroll
  $(window).scroll(function () {
    $(".leftslideanim").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 500) {
        $(this).addClass("mj-leftslide");
      }
    });
  });
  $(window).scroll(function () {
    $(".rightslideanim").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 500) {
        $(this).addClass("mj-rightslide");
      }
    });
  });
  $(window).scroll(function () {
    $(".opacanim").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 500) {
        $(this).addClass("mj-opac");
      }
    });
  });
  $(window).scroll(function () {
    $(".slide-bottom-animation").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 500) {
        $(this).addClass("slide-bottom");
      }
    });
  });
  $(window).scroll(function () {
    $(".slide-bottom-animation-2").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 500) {
        $(this).addClass("slide-bottom-2");
      }
    });
  });
  $(window).scroll(function () {
    $(".slide-bottom-animation-3").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 500) {
        $(this).addClass("slide-bottom-3");
      }
    });
  });
});

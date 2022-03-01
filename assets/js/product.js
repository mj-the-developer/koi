$(document).ready(function() {
  $('.product-images .small-image').on('mouseenter', function() {
    const image = $(this).css('background');
    $('.product-images .main-image').css('background', image);
  });
});

$(document).ready(function() {
  $('#share-link-button').on('click', function(e) {
    e.stopPropagation();
    $(this).next().fadeIn();
  });

  $(this).click(function() {
    $('.share-link-popup').fadeOut();
  });
});

$(document).ready(function() {
  $('.address-actions-toggler').on('click', function(e) {
    e.stopPropagation();
    $(this).next().addClass('active');
  });

  $(this).click(function() {
    $('.address-actions-dropdown').removeClass('active');
  });

  $('#address-form-toggler').click(function() {
    $('.dashboard-content').addClass('add-address-mode');
  })
});

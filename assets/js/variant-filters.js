$(document).ready(function() {
  $('.filter-toggler').on('click', function() {
    $(this).next().slideToggle();
  });
});

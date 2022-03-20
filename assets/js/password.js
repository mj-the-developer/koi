$(document).ready(function() {
  $('#password-page-mode-toggler').click(function () {
    $('.password-container').addClass('password-mode');
    $('.password-container').css('background', 'url("assets/images/password-mode.jpg") no-repeat center');
    $('.password-container').css('background-size', 'cover');
  });
});

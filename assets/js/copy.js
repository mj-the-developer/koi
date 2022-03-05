$(document).ready(function() {
  $('.copy-button').on('click', function(e) {
    const contentToCopy = $(this).data('content-to-copy');
    navigator.clipboard.writeText(contentToCopy);
  });
});

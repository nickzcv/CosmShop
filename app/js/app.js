var app = app || {};

$(function() {

  // Mobile navigation handler (hamburger)
  $('.hamburger').on('click', function() {
    $(this).toggleClass('closeBtn');
    $('.navigation').toggleClass('hidden');
  });

  // Generic handler sub navigation
  // TODO: test it in real devices combination 'click mouseover'
  // for now no hover
  $('.sub-nav-trigger').on('click', function(e) {
    e.preventDefault();
    $(this).next().toggleClass('hidden');
  });

  // Close sub nav if get click outside
  $(document).on('click', function(event) {
    if ($('.sub-nav').is(":visible") && !$(event.target).closest('.sub-nav').length && !$(event.target).hasClass('sub-nav-trigger') ) {
      // Hide sub navigation.
      $('.sub-nav').toggleClass('hidden');
    }
  });




});
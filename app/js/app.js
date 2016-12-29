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


  $(document).on('click', function(event) {
    if (!$(event.target).closest('.sub-nav').length) {
      // Hide sub-menu.
      console.log('hide it');
      //if ($('.sub-nav').hasClass('hidden')) {
      //  console.log('test')
      //} else {
       // $('.sub-nav').removeClass('hidden');
      //}
    }
  });




});
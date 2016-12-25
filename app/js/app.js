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





});
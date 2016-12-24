var app = app || {};

$(function() {

  // Mobile navigation handler (hamburger)
  $('.hamburger').on('click', function() {
    $('.navigation').toggleClass('hidden');
  });

});
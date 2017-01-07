var app = app || {};

$(function() {

  // Mobile navigation handler (hamburger)
  $('.hamburger').on('click', function() {
    $(this).toggleClass('closeBtn');
    $('.navigation').toggleClass('hidden');
  });

  // Drop-down navigation handler
  var timer;
  $('.sub-nav-trigger').on({
    mouseenter: function(){
      var self = this;
      clearTimeout(timer);
      timer = setTimeout(function(){
        $(self).next().fadeIn();
      }, 100)
    },
    mouseleave: function(){
      var self = this;
      setTimeout(function(){
        if (!$(self).next().is(":hover")){
          $(self).next().fadeOut();
        }
      }, 100);
    }
  });

  $('.sub-nav').on('mouseleave', function() {
    $(this).fadeOut();
  });

});
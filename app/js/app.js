var app = app || {};

$(function() {

  // Mobile navigation handler (hamburger)
  $('.hamburger').on('click', function() {
    // hide cart if opened
    $('.cart-popup').hide();
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
      }, 300);
    }
  });

  $('.sub-nav').on('mouseleave', function() {
    $(this).fadeOut();
  });

  // Cart popup handler
  $('.cart').on({
    mouseenter: function(){
      var self = this;
      clearTimeout(timer);
      timer = setTimeout(function(){
        $(self).find('.cart-popup').fadeIn();
      }, 100)
    },
    mouseleave: function(){
      var self = this;
      setTimeout(function(){
        if (!$(self).find('.cart-popup').is(":hover")){
          $(self).find('.cart-popup').fadeOut();
        }
      }, 300);
    }
  });

  $('.cart-popup').on('mouseleave', function() {
    $(this).fadeOut();
  });


});
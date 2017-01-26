var app = app || {};

$(function() {

  /*
   * Mobile navigation handler (hamburger)
   *
   */
  $('.hamburger').on('click', function() {
    // hide cart if opened
    $('.cart-popup').hide();
    $(this).toggleClass('closeBtn');
    $('.navigation').toggleClass('hidden');
  });

  /*
   * Drop-down navigation handler
   *
   */
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

  /*
   * Cart popup handler
   *
   */
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

  /*
  * Shop category navigation handlers
  *
  */
  $('.mobile-arrow').on('touchstart', function() {
    var parentNode = $(this).parent();
    if (parentNode.hasClass('opened')) {
      parentNode.removeClass('opened');
    } else {
      parentNode.addClass('opened');
    }
  });

  // Click somewhere inside category navigation
  $('.categories li a').on('touchstart', function(event) {
    event.preventDefault();

    if ($(event.target).closest('.categories').hasClass('opened')) {
      console.log($(event.target));
      selectItem(event.target);
    } else {
      $('.categories').addClass('opened');
      selectItem(event.target);
    }
  });

  // Select item handler
  function selectItem(target){
    $(target).closest('a').addClass('selected');
  }

  // Hide navigation
  $(document).on('touchstart', function(event) {
    if (!$(event.target).closest('.categories').length) {
      $('.categories').removeClass('opened');
    }
  });



});
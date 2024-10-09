(function ($, Drupal) {
    Drupal.behaviors.teceze = {
      attach: function (context, settings) {
        $('.testimonial-items-slider').slick({
            dots: true,            // Shows navigation dots
            infinite: true,        // Infinite loop
            speed: 300,            // Transition speed
            slidesToShow: 1,       // Number of slides to show
            slidesToScroll: 1,     // Number of slides to scroll
            arrows: true,
            prevArrow: '<i class="fa-solid fa-angle-left"></i>',
            nextArrow: '<i class="fa-solid fa-angle-right"></i>',
          });
      }
    };
  })(jQuery, Drupal);
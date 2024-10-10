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
        // Select the burger icon and navigation links
        const menuIcon = document.getElementById('menu-icon');
        const navLinks = document.getElementById('nav-links');

        // Add click event listener to the burger icon
        menuIcon.addEventListener('click', () => {
          // Toggle the 'active' class on the navigation links to show/hide the menu
          navLinks.classList.toggle('active');
          // If the menu is active, disable scrolling by adding a class to body
          if (navLinks.classList.contains('active')) {
            document.body.classList.add('no-scroll');
          } else {
            document.body.classList.remove('no-scroll');
          }
        });
        function initializeSlick() {
          if ($(window).width() <= 768) {
              if (!$('.plans').hasClass('slick-initialized')) {
                  $('.plans').slick({
                      // Your slick options here
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      dots: false,
                      infinite: true,
                      arrows: true,
                      prevArrow: '<i class="fa-solid fa-angle-left"></i>',
                      nextArrow: '<i class="fa-solid fa-angle-right"></i>', 
                  });
              }
          } else {
              if ($('.plans').hasClass('slick-initialized')) {
                  $('.plans').slick('unslick'); // Destroy slick if initialized
              }
          }
      }
  
      // Initialize on page load
      initializeSlick();
  
      // Reinitialize on window resize
      $(window).resize(function() {
          initializeSlick();
      });
      }
    };
  })(jQuery, Drupal);
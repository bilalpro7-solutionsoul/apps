 // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });
  /* =========================================
               Testimonials
============================================ */
$(function () {
  $("#testimonial-slider").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed: 400,
      loop: true,
      autoplayHoverPause: true,
      // nav: true,
      dots: false,
      // navText: ['<i class="fa fa-angle-left review-handle"></i>', '<i class="fa fa-angle-right review-handle-right"></i>']
  });
});
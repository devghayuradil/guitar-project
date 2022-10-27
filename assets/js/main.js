jQuery(function ($) { 
   
     // NAVIGATION 
	
  // -------------------------------------------------- Main Slider ------------------------------------------------------------------------//
  $('.main-slider').slick({
    
    dots: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
  });

// -------------------------------------------------- nav ------------------------------------------------------------------------//
$(".hamburger").click(function(){
  $("nav ul").toggle(1000,'linear');
});
$('.hamburger').on('click', function(){
  $('.hamburger').toggleClass('current');
});
// -------------------------------------------------- product Slider ------------------------------------------------------------------------//
  
  $('.products-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});





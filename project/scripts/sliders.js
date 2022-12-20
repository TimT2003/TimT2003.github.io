$(document).ready(function () {
    $('.first-slider').slick({
      autoplay: true,
      arrows: false,
      dots: false,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplaySpeed:2000,
      responsive:[
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  
    $('.second-slider').slick({
      autoplay: true,
      arrows: false,
      dots: false,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplaySpeed:4000,
      responsive:[
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  
  });
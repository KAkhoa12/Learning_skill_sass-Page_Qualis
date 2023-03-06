$(document).ready(function(){
    $('#slider-img-food').slick({
        infinite: true,
        slidesToShow: 7,
        centerPadding: '40px',
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerPadding: '40px',
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 640,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          }
        ]
    });
    $('#best-seller').slick({
        infinite: true,
        slidesToShow: 4,
        centerPadding: '40px',
        slidesToScroll: 1,
        // dots:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerPadding: '50px',
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 640,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          }
        ]
    });
    $('#user-rating').slick({
        infinite: true,
        slidesToShow: 1,
        centerPadding: '40px',
        slidesToScroll: 1,
        dots:true,
        
        responsive: [
          // {
          //   breakpoint: ,
          //   settings: {
          //     centerPadding: '40px',
          //     slidesToShow: 3,
          //   }
          // },
          {
            breakpoint: 748,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
        ]
    });
    $('#logo-list').slick({
        infinite: true,
        slidesToShow: 5,
        centerPadding: '40px',
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerPadding: '40px',
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 640,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          }
        ]
    });
});
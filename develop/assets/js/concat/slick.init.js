$(document).ready(function(){

   /* slick */
   $('.slider__content').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       speed: 400,
       arrows: true,
       infinite: true,
       autoplay: false,
       responsive: [
           {
               breakpoint: 900,
               settings: {
                   arrows: true,
                   slidesToShow: 2,
                   slidesToScroll: 1
               }
           },
           {
               breakpoint: 650,
               settings: {
                   arrows: true,
                   slidesToShow: 1,
                   slidesToScroll: 1
               }
           }
       ]
   });
   
});

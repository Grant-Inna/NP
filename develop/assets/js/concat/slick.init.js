$(document).ready(function(){

   /* slick */
   $('.council__slider-holder').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       speed: 400,
       infinite: true,
       autoplay: false,
       responsive: [
           {
               breakpoint: 1000,
               settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1
               }
           },
           {
               breakpoint: 550,
               settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
               }
           }
       ]
   });
   
});

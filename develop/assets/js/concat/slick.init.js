$(document).ready(function(){

   /* slick */
   
   /*const $slider = $('.slider__content');
   
   if ($slider.length > 0) {
      
      $slider
      .on("destroy", function(_, slick) {
         const reinit = debounce(() => {
            if (slick.activeBreakpoint < window.innerWidth) return;
            $(this).slick(slick.options);
            window.removeEventListener("resize", reinit);
         }, 200);
         window.addEventListener("resize", reinit);
      })
      .slick({
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
               breakpoint: 770,
               settings: "unslick"
            }
         ]
      });
   }*/
   
   const $slider_cell = $('.tile_federal__row');
   
   if ($slider_cell.length > 0) {
      
      $slider_cell
      .on("destroy", function(_, slick) {
         const reinit = debounce(() => {
            if (slick.activeBreakpoint < window.innerWidth) return;
            $(this).slick(slick.options);
            window.removeEventListener("resize", reinit);
         }, 200);
         window.addEventListener("resize", reinit);
      })
      .slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 400,
         arrows: false,
         dots: true,
         mobileFirst: true,
         infinite: true,
         autoplay: false,
         responsive: [
            {
               breakpoint: 800,
               settings: "unslick"
            },
            {
               breakpoint: 580,
               settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 2,
                  slidesToScroll: 2
               }
            }
         ]
      });
   }
   
   
   
});

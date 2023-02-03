$(document).ready(function () {
   /* плавный скрол */
   
   if ($('#back').length > 0) {
    
      $('#back').on( 'click', function() {
         $('body, html').animate({scrollTop: 0 }, 500); // плавно переходим наверх
      });
   }
});

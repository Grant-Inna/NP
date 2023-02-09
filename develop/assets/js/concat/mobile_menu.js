$(document).ready(function () {
   /* мобильное меню */

   if($('.mobile__container').length > 0) {
      let $icon = $('.mobile__container .mobile__icon'),
          $open = $('.mobile__container.open');
      
      $icon.on('click', function() {
          $('.mobile__menu').slideDown();
          $('.mobile__container').addClass('open');
      });
      $open.on('click', function(event) {
          $('.mobile__menu').slideUp();
          $(this).removeClass('open');
      });
   }
   
});

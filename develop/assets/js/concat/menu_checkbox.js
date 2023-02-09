$(document).ready(function () {
   /* выбор только одного checkbox */

   if($('.menu__container').length > 0) {
      let checker = $('.menu__items_holder input[type="checkbox"]');
      
      checker.on('change', function() {
          $('input.menu_checkbox').not(this).prop('checked', false);
      });
      // Можно подумать над закрытием при клике вне меню
   }
   
});

$(document).ready(function () {
   /* мобильное меню */

   if($('.mobile__container').css( 'display' ) === 'block') {
      var $icon = $('.mobile__icon'),
          $menu = $('.mobile__menu'),
          $blackLayer = $('#black_back');
      
      var width = $(document).width(),
          menu_width;
      
      width > 600 ? menu_width = width / 2 : menu_width = width; // Ширина меню зависит от размера экрана
      
      var style_blackLayer = {
         display : "block",
         opacity: "1"
      };
      var style_menu = {
         right : "0",
         width: menu_width
      };
      
      $icon.on( 'click', showMenu);
      
   }
   function showMenu() {
      $icon.prop( 'id', 'show');
     
      $menu.css( style_menu); // Появление меню
      $blackLayer.css( style_blackLayer ); // Появление заднего фона
      
      $icon.on( 'click', function ( event ) { // Скрытие меню при повторниом клике
         event.stopPropagation();
         hideMenu();
      });
      $blackLayer.on( 'click', function ( event ) { // Скрытие меню при клике по заднику
         event.stopPropagation();
         hideMenu();
      });
      
      $icon.off( 'click', showMenu );  // Удаляем eventListener
   }
   function hideMenu() {
      $icon.prop( 'id', '');
   
      $menu.prop( 'style', '');  // Скрытие меню
      $blackLayer.prop( 'style', '');  // Скрытие задника
      
      $blackLayer.off( 'click', hideMenu ); // Удаляем eventListener
      $icon.off( 'click', hideMenu ); // Удаляем eventListener
      
      $icon.on( 'click', function ( event ) { // Показ меню при повторниом клике
         event.stopPropagation();
         showMenu();
      });
   }
   
});

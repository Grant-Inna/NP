/*
$(document).ready(function () {
   /!* появление тёмного фона *!/
   const width =  $(document).width();

   if($('.menu__container').css( 'display' ) === 'block') {
      var $icon = $('label.menu__item'),
          $menu = $('.menu__container'),
          $blackLayer = $('#black_back');
      
      var style_blackLayer;
      
      if ( width > 1070 ) {
         style_blackLayer = {
            display : "block",
            top: '65px',
            opacity: "1"
         };
      } else {
         style_blackLayer = {
            display : "block",
            opacity: "1"
         };
      }
      
      $icon.on('click', showBack);
   }
   
   function showBack() {
      
      $('.menu__second_order').css({
         zIndex: '99999'
      });
     
      $blackLayer.css( style_blackLayer ); // Появление заднего фона
      
      $icon.on( 'click', function ( event ) { // Скрытие меню при повторном клике
         event.stopPropagation();
         hideBack();
      });
      $blackLayer.on( 'click', function ( event ) { // Скрытие меню при клике по заднику
         event.stopPropagation();
         hideBack();
      });
      
      $icon.off( 'click', showBack );  // Удаляем eventListener
   }
   function hideBack() {
      
      $('.menu__second_order').prop( 'style', '');
      
      $blackLayer.prop( 'style', '');  // Скрытие задника
      $blackLayer.off( 'click', hideBack ); // Удаляем eventListener
      
      $icon.off( 'click', hideBack ); // Удаляем eventListener
      
      $icon.on( 'click', function ( event ) { // Показ меню при повторниом клике
         event.stopPropagation();
         showBack();
      });
   }
   
});
*/

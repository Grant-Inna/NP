$(document).ready(function () {
   /* поиск */
   /* при нажатии на иконку проявление строки поиска и скрытие пунктов меню */

   if($('.menu_container').length > 0) {
      let $search_icon = $('.menu__form .menu__search'),
          $menu_items = $('.menu__items_holder'),
          $search_line =$('.menu__search_line'),
          $menu__eye =$('.menu__eye'),
          $close_icon = $('.menu__close'),
          hidden = 'hidden';
      
      
      $search_icon.on( 'click', function() {
         /* показываем элементы через удаление скрывающего класса */
         $search_line.removeClass(hidden);
         $close_icon.removeClass(hidden);
         
         $menu__eye.addClass(hidden);
         $menu_items.addClass(hidden);
         // show( $search_line, $close_icon )
      });
      $close_icon.on( 'click', function() {
         $search_line.addClass(hidden);
         $close_icon.addClass(hidden);
         
         $menu__eye.removeClass(hidden);
         $menu_items.removeClass(hidden);
      
      
   })
   }
   
   function show( element1, element2 ) {
      /* показываем элементы через удаление скрывающего класса */
      let $element1 =$(element1),
          $element2 =$(element2);
      console.log('djikb');
      $element1.removeClass('hidden');
      $element2.removeClass('hidden');
      
      hide( '.menu__search_line', '.menu__eye' );
   }
   
   function hide( element1, element2 ) {
      /* скрываем элементы через добавление класса */
      let $element1 =$(element1),
          $element2 =$(element2);
      
      $element1.addClass('hidden');
      $element2.addClass('hidden');
   }
});

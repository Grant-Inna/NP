$(document).ready(function () {
   /* боковое меню */
   const width =  $(document).width();

   if($('menu.aside_menu__container').length > 0 ) {
      
      let menu_width;
      
      if ( width < 380 ) { menu_width = width * 0.9 } // Ширина меню зависит от размера экрана
      else if ( width < 450 ) { menu_width = width * 0.8  }
      else if ( width > 800 ) { menu_width = width / 2.2  }
      else { menu_width = width * 0.7 }
      
      var $pages_aside_trigger = $('#container .header__aside_block'),
          $pages_aside = $('#container menu.aside_menu__container'),
          $pages_aside_bg = $('#container .aside_menu__bg'),
          $cross = $('#container .aside_menu__cross'),
         
          $blackLayer = $('#black_back');
      
      $pages_aside.hide();
      
      var style_blackLayer = {
         display : "block",
         opacity: "1"
      };
      var style_aside = {
         top: 0,
         bottom: '-100%',
         opacity: '1'
      };
      var style_aside_c = {
         top: '-100%',
         bottom: '100%',
         opacity: 0
      };
      
      $pages_aside.width(menu_width);
      $pages_aside_bg.width(menu_width);
      
      if ( width < 1280 ) {
         $pages_aside_trigger.on( 'click', showAsideMenu);
        
         if ($('.menu__container').css( 'display' ) === 'block') {
            $pages_aside.css( 'top', '65px')
         }
      }
   }
   
   function showAsideMenu() {
      // $icon.prop( 'id', 'show').css( 'z-index', '2200'); // Выводим крестик
      
      $pages_aside.show(); // Появление меню
      $pages_aside_bg.animate( style_aside, 2, function() {
         $cross.prop( 'id', 'show_aside');
      });
      $blackLayer.css( style_blackLayer ); // Появление заднего фона

      
      $cross.on( 'click', function ( event ) { // Скрытие меню при клике по крестику
         hideAsideMenu();
      });
      $blackLayer.on( 'click', function ( event ) { // Скрытие меню при клике по заднику
         event.stopPropagation();
         hideAsideMenu();
      });
      
      $pages_aside_trigger.unbind( 'click', showAsideMenu );  // Удаляем eventListener
   }
   function hideAsideMenu() {
      // $icon.prop( 'id', '').prop( 'style', ''); // Скрываем крестик
   
      
      $cross.prop( 'id', '');
       $pages_aside_bg.animate( style_aside_c, 20, function() {
         $pages_aside.slideUp(600); // Скрытие меню
      });
      
      $blackLayer.prop( 'style', '');  // Скрытие задника
      
      $cross.unbind( 'click', hideAsideMenu ); // Удаляем eventListener
      $blackLayer.unbind( 'click', hideAsideMenu ); // Удаляем eventListener
      $pages_aside_trigger.unbind( 'click', hideAsideMenu ); // Удаляем eventListener
      
      $pages_aside_trigger.on( 'click', function ( event ) { // Показ меню при повторниом клике
         event.stopPropagation();
         showAsideMenu();
      });
   }
});

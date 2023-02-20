$(document).ready(function () {
   /* боковое меню */
   const width =  $(document).width();

   if($('menu.aside_menu__container').length > 0 ) {
      
      let menu_width;
      
      if ( width < 380 ) { menu_width = width * 0.9 } // Ширина меню зависит от размера экрана
      else if ( width < 450 ) { menu_width = width * 0.8  }
      else if ( width > 750 ) { menu_width = width / 2  }
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
      
      $pages_aside_trigger.off( 'click', showAsideMenu );  // Удаляем eventListener
   }
   function hideAsideMenu() {
      // $icon.prop( 'id', '').prop( 'style', ''); // Скрываем крестик
   
      
      $cross.prop( 'id', '');
      $pages_aside_bg.css( style_aside_c );
      $pages_aside.slideUp(600); // Скрытие меню

      $blackLayer.prop( 'style', '');  // Скрытие задника
      
      $cross.off( 'click', hideAsideMenu ); // Удаляем eventListener
      $blackLayer.off( 'click', hideAsideMenu ); // Удаляем eventListener
      $pages_aside_trigger.off( 'click', hideAsideMenu ); // Удаляем eventListener
      
      $pages_aside_trigger.on( 'click', function ( event ) { // Показ меню при повторниом клике
         event.stopPropagation();
         showAsideMenu();
      });
   }
});

$(document).ready(function () {
   /* плавный скрол */
   
   if ($('#back').length > 0) {
    
      $('#back').on( 'click', function() {
         $('body, html').animate({scrollTop: 0 }, 500); // плавно переходим наверх
      });
   }
});

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

$(document).ready(function () {
   /* выбор только одного checkbox */

   if($('menu').length > 0) {
      let checker = $('menu label input[type="checkbox"]');
      
      checker.on('change', function() {
          $('input.menu_checkbox').not(this).prop('checked', false);
      });
      // Можно подумать над закрытием при клике вне меню
   }
   
});

$(document).ready(function () {
   /* поиск */
   /* при нажатии на иконку проявление строки поиска и скрытие пунктов меню */

   if($('.menu__container').length > 0) {
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

$(document).ready(function () {
   /* мобильное меню */
   const width =  $(document).width();

   if($('.mobile__container').css( 'display' ) === 'block') {
      var $icon = $('.mobile__icon'),
          $menu = $('.mobile__menu'),
          $blackLayer = $('#black_back');
      
      let menu_width;
      
      if ( width < 380 ) { menu_width = width * 0.9 } // Ширина меню зависит от размера экрана
      else if ( width < 450 ) { menu_width = width * 0.8  }
      else if ( width > 800 ) { menu_width = width / 2.2  }
      else { menu_width = width * 0.7 }
      
      var style_blackLayer = {
         display : "block",
         opacity: "1"
      };
      var style_menu = {
         right : "0",
         width: menu_width
      };
      
      if (!$('menu.mobile__container').hasClass('main-menu')) {
         $icon.on('click', showMenu);
      }
   }
   
   function showMenu() {
      $icon.prop( 'id', 'show');
      $('menu.mobile__container').addClass('main-menu');
     
      $menu.css( style_menu ); // Появление меню
      $blackLayer.css( style_blackLayer ); // Появление заднего фона
      
      $icon.on( 'click', function ( event ) { // Скрытие меню при повторном клике
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
      $('menu.mobile__container').removeClass('main-menu');
   
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

$(document).ready(function(){

   /* slick */
   
   const $slider = $('.slider__content');
   
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
   }
   
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

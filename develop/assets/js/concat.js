$(document).ready(function () {
   const region = [
      {
         text: 'Все регионы',
         federalDistrict: '',
         id: 1,
         geonameName: 'all_regions',
         objects: [
            {
               id: 1,
               text: 'Кванториум',
               amount: 536
            },
            {
               id: 2,
               text: 'Второй',
               amount: 123
            },
            {
               id: 3,
               text: 'Третий',
               amount: 245
            }
         ]
      },
      {
         text: 'Республика Адыгея',
         federalDistrict: 'Южный',
         id: 584222,
         geonameName: 'Adygeya_Republic left',
         objects: [
            {
               id: 1, // Этот id тот же, что и в массиве objects
               text: 'Кванториум',
               amount: 21
            }
         ]
      },
      {
         text: 'Республика Башкортостан',
         federalDistrict: 'Приволжский',
         id: 578853,
         geonameName: 'Bashkortostan_Republic'
      },
      {
         text: 'Республика Бурятия',
         federalDistrict: 'Дальневосточный',
         id: 2050915,
         geonameName: 'Buryatiya_Republic'
      },
      {
         text: 'Республика Алтай',
         federalDistrict: 'Сибирский',
         id: 1506272,
         geonameName: 'Altai'
      },
      {
         text: 'Республика Дагестан',
         federalDistrict: 'Северо-Кавказский',
         id: 567293,
         geonameName: 'Dagestan'
      },
      {
         text: 'Республика Ингушетия',
         federalDistrict: 'Северо-Кавказский',
         id: 556349,
         geonameName: 'Ingushetiya_Republic'
      },
      {
         text: 'Кабардино-Балкарская Республика',
         federalDistrict: 'Северо-Кавказский',
         id: 554667,
         geonameName: 'Kabardino-Balkariya_Republic'
      },
      {
         text: 'Республика Калмыкия',
         federalDistrict: 'Южный',
         id: 553972,
         geonameName: 'Kalmykiya_Republic'
      },
      {
         text: 'Карачаево-Черкесская Республика',
         federalDistrict: 'Северо-Кавказский',
         id: 552927,
         geonameName: 'Karachayevo-Cherkesiya_Republic'
      },
      {
         text: 'Республика Карелия',
         federalDistrict: 'Северо-Западный',
         id: 552548,
         geonameName: 'Karelia'
      },
      {
         text: 'Республика Коми',
         federalDistrict: 'Северо-Западный',
         id: 545854,
         geonameName: 'Komi'
      },
      {
         text: 'Республика Марий Эл',
         federalDistrict: 'Приволжский',
         id: 529352,
         geonameName: 'Mariy-El_Republic'
      },
      {
         text: 'Республика Мордовия',
         federalDistrict: 'Приволжский',
         id: 525369,
         geonameName: 'Mordoviya_Republic'
      },
      {
         text: 'Республика Саха (Якутия)',
         federalDistrict: 'Дальневосточный',
         id: 2013162,
         geonameName: 'Sakha'
      },
      {
         text: 'Республика Северная Осетия - Алания',
         federalDistrict: 'Северо-Кавказский',
         id: 519969,
         geonameName: 'North_Ossetia'
      },
      {
         text: 'Республика Татарстан',
         federalDistrict: 'Приволжский',
         id: 484048,
         geonameName: 'Tatarstan_Republic'
      },
      {
         text: 'Удмуртская Республика',
         federalDistrict: 'Приволжский',
         id: 479613,
         geonameName: 'Udmurtiya_Republic'
      },
      {
         text: 'Республика Хакасия',
         federalDistrict: 'Сибирский',
         id: 1503834,
         geonameName: 'Khakasiya_Republic'
      },
      {
         text: 'Чеченская Республика',
         federalDistrict: 'Северо-Кавказский',
         id: 569665,
         geonameName: 'Chechnya'
      },
      {
         text: 'Чувашская Республика - Чувашия',
         federalDistrict: 'Приволжский',
         id: 567395,
         geonameName: 'Chuvashia'
      },
      {
         text: 'Алтайский край',
         federalDistrict: 'Сибирский',
         id: 1511732,
         geonameName: 'Altai_Krai'
      },
      {
         text: 'Краснодарский край',
         federalDistrict: 'Южный',
         id: 542415,
         geonameName: 'Krasnodarskiy'
      },
      {
         text: 'Красноярский край',
         federalDistrict: 'Сибирский',
         id: 1502020,
         geonameName: 'Krasnoyarskiy'
      },
      {
         text: 'Приморский край',
         federalDistrict: 'Дальневосточный',
         id: 2017623,
         geonameName: 'Primorskiy_(Maritime)_Kray'
      },
      {
         text: 'Ставропольский край',
         federalDistrict: 'Северо-Кавказский',
         id: 487839,
         geonameName: 'Stavropol_Kray'
      },
      {
         text: 'Хабаровский край',
         federalDistrict: 'Дальневосточный',
         id: 2022888,
         geonameName: 'Khabarovsk'
      },
      {
         text: 'Амурская область',
         federalDistrict: 'Дальневосточный',
         id: 2027748,
         geonameName: 'Amur_Oblast'
      },
      {
         text: 'Архангельская область',
         federalDistrict: 'Северо-Западный',
         id: 581043,
         geonameName: 'Arkhangelskaya'
      },
      {
         text: 'Астраханская область',
         federalDistrict: 'Южный',
         id: 580491,
         geonameName: 'Astrakhan'
      },
      {
         text: 'Белгородская область',
         federalDistrict: 'Центральный',
         id: 578071,
         geonameName: 'Belgorod_Oblast'
      },
      {
         text: 'Брянская область',
         federalDistrict: 'Центральный',
         id: 571473,
         geonameName: 'Bryansk_Oblast'
      },
      {
         text: 'Владимирская область',
         federalDistrict: 'Центральный',
         id: 826294,
         geonameName: 'Vladimir'
      },
      {
         text: 'Волгоградская область',
         federalDistrict: 'Южный',
         id: 472755,
         geonameName: 'Volgograd_Oblast'
      },
      {
         text: 'Вологодская область',
         federalDistrict: 'Северо-Западный',
         id: 472454,
         geonameName: 'Vologda'
      },
      {
         text: 'Воронежская область',
         federalDistrict: 'Центральный',
         id: 472039,
         geonameName: 'Voronezj'
      },
      {
         text: 'Ивановская область',
         federalDistrict: 'Центральный',
         id: 555235,
         geonameName: 'Ivanovo'
      },
      {
         text: 'Иркутская область',
         federalDistrict: 'Сибирский',
         id: 2023468,
         geonameName: 'Irkutsk_Oblast',
         objects: [
            {
               id: 1,
               text: 'Снова',
               amount: 536
            },
            {
               id: 2,
               text: 'И ещё и ещё и ещё и ещё и ещё и ещё и ещё',
               amount: 754
            },
            {
               id: 3,
               text: 'Ну вот опять оно',
               amount: 245
            }
         ]
      },
      {
         text: 'Калининградская область',
         federalDistrict: 'Северо-Западный',
         id: 554230,
         geonameName: 'Kaliningrad'
      },
      {
         text: 'Калужская область',
         federalDistrict: 'Центральный',
         id: 553899,
         geonameName: 'Kaluga'
      },
      {
         text: 'Камчатский край',
         federalDistrict: 'Дальневосточный',
         id: 2125072,
         geonameName: 'Kamchatka'
      },
      {
         text: 'Кемеровская область - Кузбасс',
         federalDistrict: 'Сибирский',
         id: 1503900,
         geonameName: 'Kemerovo_Oblast'
      },
      {
         text: 'Кировская область',
         federalDistrict: 'Приволжский',
         id: 548389,
         geonameName: 'Kirov'
      },
      {
         text: 'Костромская область',
         federalDistrict: 'Центральный',
         id: 543871,
         geonameName: 'Kostroma_Oblast'
      },
      {
         text: 'Курганская область',
         federalDistrict: 'Уральский',
         id: 1501312,
         geonameName: 'Kurgan_Oblast'
      },
      {
         text: 'Курская область',
         federalDistrict: 'Центральный',
         id: 538555,
         geonameName: 'Kursk'
      },
      {
         text: 'Ленинградская область',
         federalDistrict: 'Северо-Западный',
         id: 536199,
         geonameName: 'Leningradskaya_Oblast'
      },
      {
         text: 'Липецкая область',
         federalDistrict: 'Центральный',
         id: 535120,
         geonameName: 'Lipetsk_Oblast'
      },
      {
         text: 'Магаданская область',
         federalDistrict: 'Дальневосточный',
         id: 2123627,
         geonameName: 'Magadan_Oblast'
      },
      {
         text: 'Московская область',
         federalDistrict: 'Центральный',
         id: 524925,
         geonameName: 'Moscow_Oblast'
      },
      {
         text: 'Мурманская область',
         federalDistrict: 'Северо-Западный',
         id: 524304,
         geonameName: 'Murmansk'
      },
      {
         text: 'Нижегородская область',
         federalDistrict: 'Приволжский',
         id: 559838,
         geonameName: 'Nizhny_Novgorod_Oblast'
      },
      {
         text: 'Новгородская область',
         federalDistrict: 'Северо-Западный',
         id: 519324,
         geonameName: 'Novgorod_Oblast'
      },
      {
         text: 'Новосибирская область',
         federalDistrict: 'Сибирский',
         id: 1496745,
         geonameName: 'Novosibirsk_Oblast'
      },
      {
         text: 'Омская область',
         federalDistrict: 'Сибирский',
         id: 1496152,
         geonameName: 'Omsk'
      },
      {
         text: 'Оренбургская область',
         federalDistrict: 'Приволжский',
         id: 515001,
         geonameName: 'Orenburg_Oblast'
      },
      {
         text: 'Орловская область',
         federalDistrict: 'Центральный',
         id: 514801,
         geonameName: 'Orel_Oblast'
      },
      {
         text: 'Пензенская область',
         federalDistrict: 'Приволжский',
         id: 511555,
         geonameName: 'Penza'
      },
      {
         text: 'Пермский край',
         federalDistrict: 'Приволжский',
         id: 511180,
         geonameName: 'Perm'
      },
      {
         text: 'Псковская область',
         federalDistrict: 'Северо-Западный',
         id: 504338,
         geonameName: 'Pskov_Oblast'
      },
      {
         text: 'Ростовская область',
         federalDistrict: 'Южный',
         id: 501165,
         geonameName: 'Rostov'
      },
      {
         text: 'Рязанская область',
         federalDistrict: 'Центральный',
         id: 500059,
         geonameName: 'Ryazan_Oblast'
      },
      {
         text: 'Самарская область',
         federalDistrict: 'Приволжский',
         id: 499068,
         geonameName: 'Samara_Oblast'
      },
      {
         text: 'Саратовская область',
         federalDistrict: 'Приволжский',
         id: 498671,
         geonameName: 'Saratovskaya_Oblast'
      },
      {
         text: 'Сахалинская область',
         federalDistrict: 'Дальневосточный',
         id: 2121529,
         geonameName: 'Sakhalin_Oblast'
      },
      {
         text: 'Свердловская область',
         federalDistrict: 'Уральский',
         id: 1490542,
         geonameName: 'Sverdlovsk'
      },
      {
         text: 'Смоленская область',
         federalDistrict: 'Центральный',
         id: 491684,
         geonameName: 'Smolensk'
      },
      {
         text: 'Тамбовская область',
         federalDistrict: 'Центральный',
         id: 484638,
         geonameName: 'Tambov'
      },
      {
         text: 'Тверская область',
         federalDistrict: 'Центральный',
         id: 480041,
         geonameName: 'Tver_Oblast'
      },
      {
         text: 'Томская область',
         federalDistrict: 'Сибирский',
         id: 1489421,
         geonameName: 'Tomsk_Oblast'
      },
      {
         text: 'Тульская область',
         federalDistrict: 'Центральный',
         id: 480508,
         geonameName: 'Tula'
      },
      {
         text: 'Тюменская область',
         federalDistrict: 'Уральский',
         id: 1488747,
         geonameName: 'Tyumen_Oblast'
      },
      {
         text: 'Ульяновская область',
         federalDistrict: 'Приволжский',
         id: 479119,
         geonameName: 'Ulyanovsk'
      },
      {
         text: 'Челябинская область',
         federalDistrict: 'Уральский',
         id: 1508290,
         geonameName: 'Chelyabinsk'
      },
      {
         text: 'Забайкальский край',
         federalDistrict: 'Дальневосточный',
         id: 7779061,
         geonameName: 'Transbaikal_Territory'
      },
      {
         text: 'Ярославская область',
         federalDistrict: 'Центральный',
         id: 468898,
         geonameName: 'Jaroslavl'
      },
      {
         text: 'Москва',
         federalDistrict: 'Центральный',
         id: 524894,
         geonameName: 'Moscow'
      },
      {
         text: 'Санкт-Петербург',
         federalDistrict: 'Северо-Западный',
         id: 536203,
         geonameName: 'St.-Petersburg'
      },
      {
         text: 'Еврейская Аобл',
         federalDistrict: 'Дальневосточный',
         id: 2026639,
         geonameName: 'Jewish_Autonomous_Oblast'
      },
      {
         text: 'Ненецкий АО',
         federalDistrict: 'Северо-Западный',
         id: 522652,
         geonameName: 'Nenets'
      },
      {
         text: 'Ханты-Мансийский Автономный округ - Югра',
         federalDistrict: 'Уральский',
         id: 1503773,
         geonameName: 'Khanty-Mansia'
      },
      {
         text: 'Чукотский АО',
         federalDistrict: 'Дальневосточный',
         id: 2126099,
         geonameName: 'Chukotka'
      },
      {
         text: 'Ямало-Ненецкий АО',
         federalDistrict: 'Уральский',
         id: 1486462,
         geonameName: 'Yamalo-Nenets'
      },
      {
         text: 'Республика Крым',
         federalDistrict: 'Южный',
         id: 703883,
         geonameName: 'Crimea'
      },
      {
         text: 'Севастополь',
         federalDistrict: 'Южный',
         id: 694422,
         geonameName: 'Sevastopol_City'
      },
      {
         text: 'Байконур',
         federalDistrict: '',
         id: 1538316,
         geonameName: 'Baikonur'
      }
   ];
   
   const object = [
      {
         id: 1,
         text: 'Кванториум',
         amount: 400
      },
      {
         id: 2,
         text: 'IT-Kub',
         amount: 200
      },
      {
         id: 3,
         text: '"Точка роста"',
         amount: 300
      },
      {
         id: 0,
         text: 'Все объекты инфраструктуры',
         amount: ''
      }
   ];
   /* Select у карты */
   if ($('#region').length > 0 ) {
      let $region = $('#region'),
         $object = $('#object'),
         $map_index = $('.map_index__map'),
         $name_region = $('.region__name'),
         $select_clear = $('.select__clear'),
         $region_infrastructure = $('.region__information'),
         $resulting_number = $('.map_index__amount span');
   
      let newArr = [], num = [], amount;
   
      $('.disable').on('click', function (event) { // Кнопка в состоянии disable не нажимается
         event.preventDefault();
         return false
      });
      
      
      $region.select2({
         data: region,
         "language": {
            "noResults": function () {
               return "Результаты не найдены";
            }
         }
      });
      $region.on('select2:select', function (e) { // При выборе, считываем данные этого округа
         let data = e.params.data;
            // console.log($region.find(':selected'));

         let geoname_id = data.geoname_id,
            text = data.text,
            name = data.geonameName,
            dataObjects = data.objects;
      
         showRegion(name, text, dataObjects, geoname_id);
        
      });
   
      
      /* Появление плашки при ВЫБОРЕ РЕГИОНА */
      function showRegion(name, text, dataObjects, geoname_id) {
         clearChosen(); // Удаляем всё предыдущее
      
         $map_index.addClass(name); // Добавляем сласс geonameName региона
         $name_region.text(text); // Добавляем название выбранного региона
         $select_clear.removeClass('disable'); // Развлокируеп кнопку отчистки
      
         /* Формируем список объектов инфраструктуры */
         
         $.each(dataObjects, function (index, data) { // Перебираем массив объектов инфраструктуры
            $.each(data, function (i, val) {
               if (i !== 'id') {
                  if (i === 'amount') { // Подставляем закреплённые там значения
                     newArr.push('<div class="region__object-num">' + val + '</div>');
                     num.push(val);
                     amount = num.reduce(function(a,b){ return a + b; }); // Считаем сумму всех объектов инфраструктуры
                  } else if (i === 'text') {
                     newArr.push('<div class="region__object">' + val + '</div>');
                  }
               }
            });
         });
         $region_infrastructure.append(newArr);  // Формируем DOM
         $resulting_number.text(amount); // Вставляем сумму в оранджевый указатель
         
      
         $(".map_index__information .icon_close").on("click", function () { // Скрываем при нажатии на крестик в блоке инфы
            $region.val(null).trigger("change");
            $object.val(null).trigger("change");
            clearChosen();
         });
         $select_clear.on("click", function () { // Скрываем при нажатии на крестик рядом с селектами
            $region.val(null).trigger("change");
            $object.val(null).trigger("change");
            clearChosen();
         });
         
      }
      
      
      $object.select2({
         data: object,
         "language": {
            "noResults": function () {
               return "Результаты не найдены";
            }
         }
      });
      $object.on('select2:select', function (e) { // При выборе, считываем данные объекта инфраструктуры
         let data = e.params.data;
      
         let o_id = data.id,
            o_text = data.text,
            o_amount = data.amount;
      
         showObject( o_text, o_amount, o_id );
        
      });
      
      /* Появление плашки при ВЫБОРЕ ОБЪЕКТА ИНФРАСТРУКТУРЫ */
      /*  ЕСЛИ НЕ ВЫБРАН РЕГИОН.... */
      
      function showObject( o_text, o_amount, o_id ) {
         clearChosen(); // Удаляем всё предыдущее
         
         $select_clear.removeClass('disable'); // Развлокируем кнопку отчистки
         
         if( o_text === 'Все объекты инфраструктуры' ) {
            showEachObject(object);
            $map_index.addClass('all_regions'); // Добавляем класс all_regions
            $name_region.text('Все регионы'); // Добавляем 'Все регионы'
            
         } else {
            $('.region__information div').remove();
            $region_infrastructure.append('<div class="region__object">' + o_text + '</div>');  // Формируем DOM
            $region_infrastructure.append('<div class="region__object-num">' + o_amount + '</div>');  // Формируем DOM
            $region.on('select2:select', function (e) { // При выборе, считываем данные этого округа
               let data = e.params.data;
            
               let geoname_id = data.geoname_id,
                  text = data.text,
                  name = data.geonameName,
                  dataObjects = data.objects;
            
                  showRegion(name, text, o_text, o_amount, o_id, geoname_id);
         });
         }
         
    
         
          $(".map_index__information .icon_close").on("click", function () { // Скрываем при нажатии на крестик в блоке инфы
            $region.val(null).trigger("change");
            $object.val(null).trigger("change");
            clearChosen();
         });
         $select_clear.on("click", function () { // Скрываем при нажатии на крестик рядом с селектами
            $region.val(null).trigger("change");
            $object.val(null).trigger("change");
            clearChosen();
         });
      }
      function showEachObject( arr ) {
         $('.region__information div').remove();
         newArr = []; num = []; amount = 0;
         
         $.each(arr, function (index, data) { // Перебираем массив объектов инфраструктуры
            // console.log();
            $.each(data, function (i, val) {
               // console.log('Второй уровень i  ' + i + '   val    ' + val );
               
               if (i !== 'id') {
                  if (i === 'text' && val !== 'Все объекты инфраструктуры') { // Подставляем закреплённые там значения && val !== 'Все объекты инфраструктуры'
                     newArr.push('<div class="region__object">' + val + '</div>');
                  } else if ( val === 'Все объекты инфраструктуры') {
                     newArr.push('<div class="region__object mt1">Общее число объектов инфраструктуры</div>');
                  } else if (i === 'amount' && val !== '') {
                     newArr.push('<div class="region__object-num">' + val + '</div>');
                     num.push(val);
                     amount = num.reduce(function(a,b){ return a + b; }); // Считаем сумму всех объектов инфраструктуры
                  } else if ( val === '' ) {
                     newArr.push('<div class="region__object-num mt1">' + amount + '</div>')
                  }
               }
            });
         });
         $region_infrastructure.append(newArr);  // Формируем DOM
      }
      
      /* СКРЫТИЕ ПЛАШКИ */
      function clearChosen() {
         $map_index.removeAttr('class').addClass('map_index__map'); // Удаляем все лишние классы
         $name_region.text(''); // Удаляем название региона
         $select_clear.addClass('disable'); // Блокируем кнопку
         $('.region__information div').remove(); // Удаляем все объекты инфраструктуры
         $resulting_number.text(''); // Убираем цифры из оранджевого указателя
      }
   
   }
   
   
   /* боковое меню */
   const width = $(document).width();
   
   if ($('menu.aside_menu__container').length > 0) {
      
      let menu_width;
      
      if (width < 380) {
         menu_width = width * 0.9
      } // Ширина меню зависит от размера экрана
      else if (width < 450) {
         menu_width = width * 0.8
      } else if (width > 750) {
         menu_width = width / 2
      } else {
         menu_width = width * 0.7
      }
      
      var $pages_aside_trigger = $('#container .header__aside_block'),
         $pages_aside = $('#container menu.aside_menu__container'),
         $pages_aside_bg = $('#container .aside_menu__bg'),
         $cross = $('#container .aside_menu__cross'),
         
         $blackLayer = $('#black_back');
      
      $pages_aside.hide();
      
      var style_blackLayer = {
         display: "block",
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
      
      if (width < 1280) {
         $pages_aside_trigger.on('click', showAsideMenu);
         
         if ($('.menu__container').css('display') === 'block') {
            $pages_aside.css('top', '65px')
         }
      }
   }
   
   function showAsideMenu() {
      // $icon.prop( 'id', 'show').css( 'z-index', '2200'); // Выводим крестик
      
      $pages_aside.show(); // Появление меню
      $pages_aside_bg.animate(style_aside, 2, function () {
         $cross.prop('id', 'show_aside');
      });
      $blackLayer.css(style_blackLayer); // Появление заднего фона
      
      
      $cross.on('click', function (event) { // Скрытие меню при клике по крестику
         hideAsideMenu();
      });
      $blackLayer.on('click', function (event) { // Скрытие меню при клике по заднику
         event.stopPropagation();
         hideAsideMenu();
      });
      
      $pages_aside_trigger.off('click', showAsideMenu);  // Удаляем eventListener
   }
   
   function hideAsideMenu() {
      // $icon.prop( 'id', '').prop( 'style', ''); // Скрываем крестик
      
      
      $cross.prop('id', '');
      $pages_aside_bg.css(style_aside_c);
      $pages_aside.slideUp(600); // Скрытие меню
      
      $blackLayer.prop('style', '');  // Скрытие задника
      
      $cross.off('click', hideAsideMenu); // Удаляем eventListener
      $blackLayer.off('click', hideAsideMenu); // Удаляем eventListener
      $pages_aside_trigger.off('click', hideAsideMenu); // Удаляем eventListener
      
      $pages_aside_trigger.on('click', function (event) { // Показ меню при повторниом клике
         event.stopPropagation();
         showAsideMenu();
      });
   }
   
   /* плавный скрол */
   
   if ($('#back').length > 0) {
      
      $('#back').on('click', function () {
         $('body, html').animate({scrollTop: 0}, 500); // плавно переходим наверх
      });
   }
   
   /* выбор только одного checkbox */
   
   if ($('menu').length > 0) {
      let checker = $('menu label input[type="checkbox"]');
      
      checker.on('change', function () {
         $('input.menu_checkbox').not(this).prop('checked', false);
      });
      // Можно подумать над закрытием при клике вне меню
   }
   
   /* поиск */
   /* при нажатии на иконку проявление строки поиска и скрытие пунктов меню */
   
   if ($('.menu__container').length > 0) {
      let $search_icon = $('.menu__form .menu__search'),
         $menu_items = $('.menu__items_holder'),
         $search_line = $('.menu__search_line'),
         $menu__eye = $('.menu__eye'),
         $close_icon = $('.menu__close'),
         hidden = 'hidden';
      
      
      $search_icon.on('click', function () {
         /* показываем элементы через удаление скрывающего класса */
         $search_line.removeClass(hidden);
         $close_icon.removeClass(hidden);
         
         $menu__eye.addClass(hidden);
         $menu_items.addClass(hidden);
         // show( $search_line, $close_icon )
      });
      $close_icon.on('click', function () {
         $search_line.addClass(hidden);
         $close_icon.addClass(hidden);
         
         $menu__eye.removeClass(hidden);
         $menu_items.removeClass(hidden);
         
         
      })
   }
   
   function show(element1, element2) {
      /* показываем элементы через удаление скрывающего класса */
      let $element1 = $(element1),
         $element2 = $(element2);
      $element1.removeClass('hidden');
      $element2.removeClass('hidden');
      
      hide('.menu__search_line', '.menu__eye');
   }
   
   function hide(element1, element2) {
      /* скрываем элементы через добавление класса */
      let $element1 = $(element1),
         $element2 = $(element2);
      
      $element1.addClass('hidden');
      $element2.addClass('hidden');
   }
   
   
   if ($('.mobile__container').css('display') === 'block') {
      var $icon = $('.mobile__icon'),
         $menu = $('.mobile__menu'),
         $blackLayer = $('#black_back');
      
      let menu_width;
      
      if (width < 380) {
         menu_width = width * 0.9
      } // Ширина меню зависит от размера экрана
      else if (width < 450) {
         menu_width = width * 0.8
      } else if (width > 800) {
         menu_width = width / 2.2
      } else {
         menu_width = width * 0.7
      }
      
      var style_blackLayer = {
         display: "block",
         opacity: "1"
      };
      var style_menu = {
         right: "0",
         width: menu_width
      };
      
      if (!$('menu.mobile__container').hasClass('main-menu')) {
         $icon.on('click', showMenu);
      }
   }
   
   function showMenu() {
      $icon.prop('id', 'show');
      $('menu.mobile__container').addClass('main-menu');
      
      $menu.css(style_menu); // Появление меню
      $blackLayer.css(style_blackLayer); // Появление заднего фона
      
      $icon.on('click', function (event) { // Скрытие меню при повторном клике
         event.stopPropagation();
         hideMenu();
      });
      $blackLayer.on('click', function (event) { // Скрытие меню при клике по заднику
         event.stopPropagation();
         hideMenu();
      });
      
      $icon.off('click', showMenu);  // Удаляем eventListener
   }
   
   function hideMenu() {
      $icon.prop('id', '');
      $('menu.mobile__container').removeClass('main-menu');
      
      $menu.prop('style', '');  // Скрытие меню
      $blackLayer.prop('style', '');  // Скрытие задника
      
      $blackLayer.off('click', hideMenu); // Удаляем eventListener
      $icon.off('click', hideMenu); // Удаляем eventListener
      
      $icon.on('click', function (event) { // Показ меню при повторниом клике
         event.stopPropagation();
         showMenu();
      });
   }
   
   $(".modal-link").on("click", function () {
      $('.modal-overlay[data-modal-id="' + $(this).data('modal-id') + '"]').addClass("modal-overlay_visible");
   });
   
   $(".modal__close").on("click", function () {
      $(".modal-overlay").removeClass("modal-overlay_visible");
   });
   
   $(document).on("click", function (e) {
      if (!$(e.target).closest(".modal").length && !$(e.target).closest(".modal-link").length) {
         $(".modal-overlay").removeClass("modal-overlay_visible");
      }
   });
   
   
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
      .on("destroy", function (_, slick) {
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
               breakpoint: 770,
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

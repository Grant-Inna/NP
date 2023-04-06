$(document).ready(function () {
   const regions = [
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
               text: 'IT-Kub',
               amount: 123
            },
            {
               id: 3,
               text: '"Точка роста"',
               amount: 245
            },
            {
               id: 4,
               text: 'Все объекты инфраструктуры',
               amount: ''
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
            },
            {
               id: 2,
               text: 'IT-Kub',
               amount: 13
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
               id: 1, // Этот id тот же, что и в массиве objects
               text: 'Кванториум',
               amount: 21
            },
            {
               id: 2,
               text: 'IT-Kub',
               amount: 13
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

   
   // $(function() {  Access to XMLHttpRequest at 'http://10.50.10.180:8096/regions' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
   //    $.ajax({
   //       type: "POST",
   //       dataType: "json",
   //       url: "http://10.50.10.180:8096/regions",
   //       data: "regions",
   //       // success: success
   //    })
   // });
   
   const objects = [
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
   if ($('#regions').length > 0 ) {
      let $regions = $('#regions'),
         $objects = $('#objects'),
         $map_index = $('.map_index__map'),
         $region_name = $('.region__name'),
         $select_clear = $('.select__clear'),
         $region_infrastructure = $('.region__information'),
         $resulting_number = $('.map_index__amount span'),
         $load_info_btn = $('.region__button');
   
      let newArr = [], num = [], amount,
         ident, // Удалить, если так и не понадобяться классы
         region__object, current, current_num;
      
      let string_all_objects = 'Все объекты инфраструктуры',
          string_all_regions = 'Все регионы',
          class_all_regions = 'all_regions';
      
      $('.disable').on('click', function (event) { // Кнопка в состоянии disable не нажимается
         event.preventDefault();
         return false
      });
      
       /* ОЧИСТКА СЕЛЕКТОВ */
      function clearAllChosen() {
         $(".map_index__information .icon_close").on("click", function () { // Скрываем при нажатии на крестик в блоке инфы
            $regions.val(null).trigger("change");
            $objects.val(null).trigger("change");
            clearChosen();
         });
         $select_clear.on("click", function () { // Скрываем при нажатии на крестик рядом с селектами
            $regions.val(null).trigger("change");
            $objects.val(null).trigger("change");
            clearChosen();
         });
      }
      /* СКРЫТИЕ ПЛАШКИ */
      function clearChosen() {
         $map_index.removeAttr('class').addClass('map_index__map'); // Удаляем все лишние классы
         $region_name.text(''); // Удаляем название региона
         $select_clear.addClass('disable'); // Блокируем кнопку
         $('.region__information div').hide(); // Удаляем все объекты инфраструктуры
         $('.region__information h1').hide(); // Удаляем h1
         $resulting_number.text(''); // Убираем цифры из оранджевого указателя
         $load_info_btn.removeClass('disable'); // Разблокируем кнопку "скачать реестр"
      }
      
      
      $regions.select2({ // Преобразуем селект #regions в select2 и заполняем данными из json
         data: regions,
         "language": {
            "noResults": function () {
               return "Результаты не найдены";
            }
         }
      });
      $objects.select2({ // Преобразуем селект #objects в select2 и заполняем данными из json
         data: objects,
         "language": {
            "noResults": function () {
               return "Результаты не найдены";
            }
         }
      });
      // Инициализация объектов инфраструктуры
      if ($objects.hasClass("select2-hidden-accessible")) {
      }
      
      
      $regions.on('select2:select', function (e) { // При выборе, считываем данные выбранного округа
         let data = e.params.data;

         let geoname_id = data.geoname_id,
            region_name = data.text,
            region_name_en = data.geonameName,
            region_inner_objects = data.objects;
         
         showRegion(region_name_en, region_name, region_inner_objects);
      });
   
      
      /* Появление плашки при ВЫБОРЕ РЕГИОНА */
      function showRegion(region_name_en, region_name, region_inner_objects) {
         clearChosen(); // Удаляем всё предыдущее
         $('.region__information div').remove(); // Удаляем все объекты инфраструктуры
         $('.region__information h1').remove(); // Удаляем h1
         newArr = []; num = []; amount = 0;
         ident = 0;
      
         $map_index.addClass(region_name_en); // Добавляем сласс geonameName региона
         $region_name.text(region_name); // Добавляем название выбранного региона
         $select_clear.removeClass('disable'); // Развлокируеп кнопку отчистки
      
         /* Формируем список объектов инфраструктуры */
         
         // Перебираем массив объектов инфраструктуры
         $.each(region_inner_objects, function (index, data) {
            $.each(data, function (i, val) {
               
               if( i === 'id' ) {
                  ident = val;
               }
               if (i !== 'id') {
                  if (i === 'amount') { // Подставляем закреплённые там значения
                     if ( val === '' ) {
                        amount = num.reduce(function(a,b){ return a + b; }); // Считаем сумму всех объектов инфраструктуры
                     } else {
                        amount = val;
                     }
                        region__object = $("<div>", { // Создатём елемент
                           class: 'region__object-num region__object__' + ident,
                           "data-num": val
                        });
                        newArr.push(region__object.text(amount));
                        num.push(val);
                  } else if (i === 'text') {
                     if ( val === 'Все объекты инфраструктуры' ) {
                        region__object = $("<h1>", { // Создатём елемент
                        class: 'region__object region__object__' + ident
                      });
                     } else {
                        region__object = $("<div>", { // Создатём елемент
                           class: 'region__object region__object__' + ident
                        });
                     }
                     newArr.push(region__object.text(val));
                  }
               }
            });
         });
         amount = num.reduce(function(a,b){ return a + b; }); // Считаем сумму всех объектов инфраструктуры
         $region_infrastructure.append(newArr);  // Формируем DOM
         $resulting_number.text(amount); // Вставляем сумму в оранджевый указатель
         clearAllChosen();
         
         /* СРАБАТЫВАЕТ ПРИ ВЫБОРЕ ОБЪЕКТА ИНФРАСТРУКТУРЫ, ПРИ ВЫБРАННОМ РЕГИОНЕ */
      
         $objects.on('select2:select', function (e) {
            let data = e.params.data;
            
            let object_id = data.id,
               object_name = data.text,
               object_number = data.amount;
            
            if ( region_name === string_all_regions && object_name !== string_all_objects ) {
               // Когда выбрали все регионы, и следом только один объект
               showRegionsOneObject( object_name )
            }
            else if ( region_name_en !== class_all_regions && object_name !== string_all_objects ) {
               // Когда выбрали конкретный регион и конкретный объект
               showOneRegionOneObject( region_name_en, region_name, region_inner_objects, object_name, object_number )
            
            } else if ( object_name === string_all_objects ) {
               // Когда выбрали все объекты
               showRegion( region_name_en, region_name, region_inner_objects );
            }
            // else if () {
            //
            // }
           
         });
      }
      function showRegionsOneObject( object_name ) {
         // Все регионы, но один объект
         clearChosen(); // Удаляем всё предыдущее
      
         $map_index.addClass(class_all_regions); // Добавляем сласс geonameName региона
         $region_name.text(string_all_regions); // Добавляем название выбранного региона
         $select_clear.removeClass('disable'); // Развлокируеп кнопку отчистки
         
         current = $('.region__information .region__object:contains(' + object_name + ')');
         
         if ( current ) {
            current.show();
            current.next('.region__object-num').show();
         }
      }
      function showOneRegionOneObject ( region_name_en, region_name, region_inner_objects, object_name ) {
         // Один регион, один объект
         
         clearChosen(); // Удаляем всё предыдущее
         console.log(region_inner_objects);
         
         $map_index.addClass(region_name_en); // Добавляем сласс geonameName региона
         $region_name.text(region_name); // Добавляем название выбранного региона
         $select_clear.removeClass('disable'); // Развлокируеп кнопку отчистки
         
         current = $('.region__information .region__object:contains(' + object_name + ')');
   
         // Нужно перебрать массив объектов инфраструктуры этого региона
         // определить количество для оранджевого указателя
         $.each(region_inner_objects, function (index, data) {
            $.each(data, function (i, val) {
               if (i === 'text' && val === object_name) {
                  current_num = current.next('.region__object-num').data('num');
                  $resulting_number.text(current_num);
               }
            });
         });
         
         
         if ( current.length > 0 ) {
            current.show();
            current.next('.region__object-num').show();

            $('.region__object__empty').remove();
            $load_info_btn.removeClass('disable')
         } else {
            console.log(current);
            // Добавляем "пустой" элемент
            $region_infrastructure.append( '<div class="region__object__empty">Данного объекта инфраструктуры нет в этом регионе</div>' );
            $resulting_number.text('0');
            $load_info_btn.addClass('disable')
         }
      }

     
     /* ВЫБИРАЕМ ОБЪЕКТ ИНФРАСТРУКТУРЫ ПРИ ПУСТОМ ВЫБОРЕ РЕГИОНА */
   
      $objects.on('select2:select', function (e) {
         let data = e.params.data;
         
         let object_id = data.id,
            object_name = data.text,
            object_number = data.amount;
   
         $map_index.addClass(class_all_regions); // Добавляем класс all_regions
         $region_name.text(string_all_regions); // Добавляем 'Все регионы'
         $select_clear.removeClass('disable'); // Развлокируем кнопку отчистки
         showRegion( class_all_regions, string_all_regions, objects );
         $('.region__information div').hide(); // Скрываем все объекты инфраструктуры
         $('.region__information h1').hide();
         
         if ( object_name !== string_all_objects ) {
            // Когда регион не выбран вообще, но выбран конкретный объект инфраструктуры
            showOneObjectRegion( object_name );
         }
         
         
         /* ВЫБРАН ОБЪЕКТ ИНФРАСТРУКТУРЫ И ВЫБРАН РЕГИОН */
         
         $regions.on('select2:select', function (e) { // При выборе, считываем данные выбранного округа
         let data = e.params.data;

         let geoname_id = data.geoname_id,
            region_name = data.text,
            region_name_en = data.geonameName,
            region_inner_objects = data.objects;
            
         if ( object_name !== string_all_objects ) {
            showRegion( region_name_en, region_name, region_inner_objects );
             $('.region__information div').hide(); // Скрываем все объекты инфраструктуры
            $('.region__information h1').hide();
            $resulting_number.text(''); // Убираем цифры из оранджевого указателя
            
            showOneObjectOneRegion( region_inner_objects, object_name );
         } else {
            showRegion( region_name_en, region_name, region_inner_objects );
         }
         
         
      });
         
      });
     
      function showOneObjectRegion( object_name ) {
         // Все регионы, но выбран конкретный объект инфраструктуры
         current = $('.region__information .region__object:contains(' + object_name + ')');
         current_num = current.next('.region__object-num');
         
         current.show();
         current_num.show();
      }
      function showOneObjectOneRegion( region_inner_objects, object_name ) {
          // Нужно перебрать массив объектов инфраструктуры этого региона
         // определить количество для оранджевого указателя
         current = $('.region__information .region__object:contains(' + object_name + ')');
   
         $.each(region_inner_objects, function (index, data) {
            $.each(data, function (i, val) {
               if (i === 'text' && val === object_name) {
                  
                  current_num = current.next('.region__object-num').data('num');
                  $resulting_number.text(current_num);
                  current.next('.region__object-num').text(current_num);
               }
            });
         });
         
         // console.log(current);
         if ( current.length > 0 ) {
            current.show();
            current.next('.region__object-num').show();

            $('.region__object__empty').remove();
            $load_info_btn.removeClass('disable')

         } else {
            // console.log(current);
            // Добавляем "пустой" элемент
            $region_infrastructure.append( '<div class="region__object__empty">Данного объекта инфраструктуры нет в этом регионе</div>' );
            $resulting_number.text('0');
            $load_info_btn.addClass('disable')
         }
      }
      
      
      
      
      
      
      
   }
   
// КОНЕЦ БЛОКА КОДА ДЛЯ КАРТЫ НА ГЛАВНОЙ СТРАНИЦЕ //
   
   
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

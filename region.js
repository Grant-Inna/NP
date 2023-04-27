
 //article.modal-overlay(data-modal-id='#{id}')
   //   .modal-table
   //      .modal-table-cell
   //         .modal
   //            .modal__close
   //            h1.modal__header !{name}
   //
   //            .materials_video__container
   //               .materials_video__ratio
   //               .materials_video
   //                  iframe(src='http://www.youtube.com/embed/DkaUsBwe0fo' width='100%' height='100%' frameborder='0' style='border: 1px solid #1D5EE4')


 
const region = [
      {
         text: 'Все регионы', federal_district: '', geoname_id: '1', geoname_name: 'All'
      },
      {
         text: 'Республика Адыгея', federal_district: 'Южный', geoname_id: '584222', geoname_name: 'Adygeya_Republic'
      },
      {
         text: 'Республика Башкортостан', federal_district: 'Приволжский', geoname_id: '578853', geoname_name: 'Bashkortostan_Republic'
      },
      {
         text: 'Республика Бурятия', federal_district: 'Дальневосточный', geoname_id: '2050915', geoname_name: 'Buryatiya_Republic'
      },
      {
         text: 'Республика Алтай', federal_district: 'Сибирский', geoname_id: '1506272', geoname_name: 'Altai'
      },
      {
         text: 'Республика Дагестан', federal_district: 'Северо-Кавказский', geoname_id: '567293', geoname_name: 'Dagestan'
      },
      {
         text: 'Республика Ингушетия', federal_district: 'Северо-Кавказский', geoname_id: '556349', geoname_name: 'Ingushetiya_Republic'
      },
      {
         text: 'Кабардино-Балкарская Республика', federal_district: 'Северо-Кавказский', geoname_id: '554667', geoname_name: 'Kabardino-Balkariya_Republic'
      },
      {
         text: 'Республика Калмыкия', federal_district: 'Южный', geoname_id: '553972', geoname_name: 'Kalmykiya_Republic'
      },
      {
         text: 'Карачаево-Черкесская Республика', federal_district: 'Северо-Кавказский', geoname_id: '552927', geoname_name: 'Karachayevo-Cherkesiya_Republic'
      },
      {
         text: 'Республика Карелия', federal_district: 'Северо-Западный', geoname_id: '552548', geoname_name: 'Karelia'
      },
      {
         text: 'Республика Коми', federal_district: 'Северо-Западный', geoname_id: '545854', geoname_name: 'Komi'
      },
      {
         text: 'Республика Марий Эл', federal_district: 'Приволжский', geoname_id: '529352', geoname_name: 'Mariy-El_Republic'
      },
      {
         text: 'Республика Мордовия', federal_district: 'Приволжский', geoname_id: '525369', geoname_name: 'Mordoviya_Republic'
      },
      {
         text: 'Республика Саха (Якутия)', federal_district: 'Дальневосточный', geoname_id: '2013162', geoname_name: 'Sakha'
      },
      {
         text: 'Республика Северная Осетия - Алания', federal_district: 'Северо-Кавказский', geoname_id: '519969', geoname_name: 'North_Ossetia'
      },
      {
         text: 'Республика Татарстан', federal_district: 'Приволжский', geoname_id: '484048', geoname_name: 'Tatarstan_Republic'
      },
      {
         text: 'Удмуртская Республика', federal_district: 'Приволжский', geoname_id: '479613', geoname_name: 'Udmurtiya_Republic'
      },
      {
         text: 'Республика Хакасия', federal_district: 'Сибирский', geoname_id: '1503834', geoname_name: 'Khakasiya_Republic'
      },
      {
         text: 'Чеченская Республика', federal_district: 'Северо-Кавказский', geoname_id: '569665', geoname_name: 'Chechnya'
      },
      {
         text: 'Чувашская Республика - Чувашия', federal_district: 'Приволжский', geoname_id: '567395', geoname_name: 'Chuvashia'
      },
      {
         text: 'Алтайский край', federal_district: 'Сибирский', geoname_id: '1511732', geoname_name: 'Altai_Krai'
      },
      {
         text: 'Краснодарский край', federal_district: 'Южный', geoname_id: '542415', geoname_name: 'Krasnodarskiy'
      },
      {
         text: 'Красноярский край', federal_district: 'Сибирский', geoname_id: '1502020', geoname_name: 'Krasnoyarskiy'
      },
      {
         text: 'Приморский край', federal_district: 'Дальневосточный', geoname_id: '2017623', geoname_name: 'Primorskiy_(Maritime)_Kray'
      },
      {
         text: 'Ставропольский край', federal_district: 'Северо-Кавказский', geoname_id: '487839', geoname_name: 'Stavropol_Kray'
      },
      {
         text: 'Хабаровский край', federal_district: 'Дальневосточный', geoname_id: '2022888', geoname_name: 'Khabarovsk'
      },
      {
         text: 'Амурская область', federal_district: 'Дальневосточный', geoname_id: '2027748', geoname_name: 'Amur_Oblast'
      },
      {
         text: 'Архангельская область', federal_district: 'Северо-Западный', geoname_id: '581043', geoname_name: 'Arkhangelskaya'
      },
      {
         text: 'Астраханская область', federal_district: 'Южный', geoname_id: '580491', geoname_name: 'Astrakhan'
      },
      {
         text: 'Белгородская область', federal_district: 'Центральный', geoname_id: '578071', geoname_name: 'Belgorod_Oblast'
      },
      {
         text: 'Брянская область', federal_district: 'Центральный', geoname_id: '571473', geoname_name: 'Bryansk_Oblast'
      },
      {
         text: 'Владимирская область', federal_district: 'Центральный', geoname_id: '826294', geoname_name: 'Vladimir'
      },
      {
         text: 'Волгоградская область', federal_district: 'Южный', geoname_id: '472755', geoname_name: 'Volgograd_Oblast'
      },
      {
         text: 'Вологодская область', federal_district: 'Северо-Западный', geoname_id: '472454', geoname_name: 'Vologda'
      },
      {
         text: 'Воронежская область', federal_district: 'Центральный', geoname_id: '472039', geoname_name: 'Voronezj'
      },
      {
         text: 'Ивановская область', federal_district: 'Центральный', geoname_id: '555235', geoname_name: 'Ivanovo'
      },
      {
         text: 'Иркутская область', federal_district: 'Сибирский', geoname_id: '2023468', geoname_name: 'Irkutsk_Oblast'
      },
      {
         text: 'Калининградская область', federal_district: 'Северо-Западный', geoname_id: '554230', geoname_name: 'Kaliningrad'
      },
      {
         text: 'Калужская область', federal_district: 'Центральный', geoname_id: '553899', geoname_name: 'Kaluga'
      },
      {
         text: 'Камчатский край', federal_district: 'Дальневосточный', geoname_id: '2125072', geoname_name: 'Kamchatka'
      },
      {
         text: 'Кемеровская область - Кузбасс', federal_district: 'Сибирский', geoname_id: '1503900', geoname_name: 'Kemerovo_Oblast'
      },
      {
         text: 'Кировская область', federal_district: 'Приволжский', geoname_id: '548389', geoname_name: 'Kirov'
      },
      {
         text: 'Костромская область', federal_district: 'Центральный', geoname_id: '543871', geoname_name: 'Kostroma_Oblast'
      },
      {
         text: 'Курганская область', federal_district: 'Уральский', geoname_id: '1501312', geoname_name: 'Kurgan_Oblast'
      },
      {
         text: 'Курская область', federal_district: 'Центральный', geoname_id: '538555', geoname_name: 'Kursk'
      },
      {
         text: 'Ленинградская область', federal_district: 'Северо-Западный', geoname_id: '536199', geoname_name: 'Leningradskaya_Oblast'
      },
      {
         text: 'Липецкая область', federal_district: 'Центральный', geoname_id: '535120', geoname_name: 'Lipetsk_Oblast'
      },
      {
         text: 'Магаданская область', federal_district: 'Дальневосточный', geoname_id: '2123627', geoname_name: 'Magadan_Oblast'
      },
      {
         text: 'Московская область', federal_district: 'Центральный', geoname_id: '524925', geoname_name: 'Moscow_Oblast'
      },
      {
         text: 'Мурманская область', federal_district: 'Северо-Западный', geoname_id: '524304', geoname_name: 'Murmansk'
      },
      {
         text: 'Нижегородская область', federal_district: 'Приволжский', geoname_id: '559838', geoname_name: 'Nizhny_Novgorod_Oblast'
      },
      {
         text: 'Новгородская область', federal_district: 'Северо-Западный', geoname_id: '519324', geoname_name: 'Novgorod_Oblast'
      },
      {
         text: 'Новосибирская область', federal_district: 'Сибирский', geoname_id: '1496745', geoname_name: 'Novosibirsk_Oblast'
      },
      {
         text: 'Омская область', federal_district: 'Сибирский', geoname_id: '1496152', geoname_name: 'Omsk'
      },
      {
         text: 'Оренбургская область', federal_district: 'Приволжский', geoname_id: '515001', geoname_name: 'Orenburg_Oblast'
      },
      {
         text: 'Орловская область', federal_district: 'Центральный', geoname_id: '514801', geoname_name: 'Orel_Oblast'
      },
      {
         text: 'Пензенская область', federal_district: 'Приволжский', geoname_id: '511555', geoname_name: 'Penza'
      },
      {
         text: 'Пермский край', federal_district: 'Приволжский', geoname_id: '511180', geoname_name: 'Perm'
      },
      {
         text: 'Псковская область', federal_district: 'Северо-Западный', geoname_id: '504338', geoname_name: 'Pskov_Oblast'
      },
      {
         text: 'Ростовская область', federal_district: 'Южный', geoname_id: '501165', geoname_name: 'Rostov'
      },
      {
         text: 'Рязанская область', federal_district: 'Центральный', geoname_id: '500059', geoname_name: 'Ryazan_Oblast'
      },
      {
         text: 'Самарская область', federal_district: 'Приволжский', geoname_id: '499068', geoname_name: 'Samara_Oblast'
      },
      {
         text: 'Саратовская область', federal_district: 'Приволжский', geoname_id: '498671', geoname_name: 'Saratovskaya_Oblast'
      },
      {
         text: 'Сахалинская область', federal_district: 'Дальневосточный', geoname_id: '2121529', geoname_name: 'Sakhalin_Oblast'
      },
      {
         text: 'Свердловская область', federal_district: 'Уральский', geoname_id: '1490542', geoname_name: 'Sverdlovsk'
      },
      {
         text: 'Смоленская область', federal_district: 'Центральный', geoname_id: '491684', geoname_name: 'Smolensk'
      },
      {
         text: 'Тамбовская область', federal_district: 'Центральный', geoname_id: '484638', geoname_name: 'Tambov'
      },
      {
         text: 'Тверская область', federal_district: 'Центральный', geoname_id: '480041', geoname_name: 'Tver_Oblast'
      },
      {
         text: 'Томская область', federal_district: 'Сибирский', geoname_id: '1489421', geoname_name: 'Tomsk_Oblast'
      },
      {
         text: 'Тульская область', federal_district: 'Центральный', geoname_id: '480508', geoname_name: 'Tula'
      },
      {
         text: 'Тюменская область', federal_district: 'Уральский', geoname_id: '1488747', geoname_name: 'Tyumen_Oblast'
      },
      {
         text: 'Ульяновская область', federal_district: 'Приволжский', geoname_id: '479119', geoname_name: 'Ulyanovsk'
      },
      {
         text: 'Челябинская область', federal_district: 'Уральский', geoname_id: '1508290', geoname_name: 'Chelyabinsk'
      },
      {
         text: 'Забайкальский край', federal_district: 'Дальневосточный', geoname_id: '7779061', geoname_name: 'Transbaikal_Territory'
      },
      {
         text: 'Ярославская область', federal_district: 'Центральный', geoname_id: '468898', geoname_name: 'Jaroslavl'
      },
      {
         text: 'Москва', federal_district: 'Центральный', geoname_id: '524894', geoname_name: 'Moscow'
      },
      {
         text: 'Санкт-Петербург', federal_district: 'Северо-Западный', geoname_id: '536203', geoname_name: 'St.-Petersburg'
      },
      {
         text: 'Еврейская Аобл', federal_district: 'Дальневосточный', geoname_id: '2026639', geoname_name: 'Jewish_Autonomous_Oblast'
      },
      {
         text: 'Ненецкий АО', federal_district: 'Северо-Западный', geoname_id: '522652', geoname_name: 'Nenets'
      },
      {
         text: 'Ханты-Мансийский Автономный округ - Югра', federal_district: 'Уральский', geoname_id: '1503773', geoname_name: 'Khanty-Mansia'
      },
      {
         text: 'Чукотский АО', federal_district: 'Дальневосточный', geoname_id: '2126099', geoname_name: 'Chukotka'
      },
      {
         text: 'Ямало-Ненецкий АО', federal_district: 'Уральский', geoname_id: '1486462', geoname_name: 'Yamalo-Nenets'
      },
      {
         text: 'Республика Крым', federal_district: 'Южный', geoname_id: '703883', geoname_name: 'Crimea'
      },
      {
         text: 'Севастополь', federal_district: 'Южный', geoname_id: '694422', geoname_name: 'Sevastopol_City'
      },
      {
         text: 'Байконур', federal_district: '', geoname_id: '1538316', geoname_name: 'Baikonur'
      }
   ];

$(document).ready(function(){$(function(){$.ajax({type:"POST",dataType:"json",url:"https://youtrackcos.ficto.ru/regions",data:"regions"})});if(0<$("#regions").length){let n=$("#regions"),o=$("#objects"),t=$(".map_index__map"),i=$(".region__name"),l=$(".select__clear"),e=$(".region__information"),r=$(".map_index__amount span"),d=$(".region__button"),_=[],m=[],u,p,f,g,b,a="Выбранного объекта инфраструктуры нет в данном регионе",h="Все объекты инфраструктуры",v="Все регионы",k="all_regions";function x(){t.removeAttr("class").addClass("map_index__map"),i.text(""),l.addClass("disable"),$(".region__information div").hide(),$(".region__information h1").hide(),r.text(""),d.removeClass("disable")}function y(){return r.text("0"),d.addClass("disable"),e.append('<div class="region__object__empty">'+a+"</div>")}function w(e,n){t.addClass(e+" open"),i.text(n),l.removeClass("disable")}function C(a,c,s){x(),$(".region__information div").remove(),$(".region__information h1").remove(),_=[],m=[],u=0,w(a,c),$.each(s,function(e,n){$.each(n,function(e,n){"id"!==e&&("amount"===e?(u=""===n?m.reduce(function(e,n){return e+n}):n,f=$("<div>",{class:"region__object-num","data-num":n}),_.push(f.text(u)),m.push(n)):"text"===e&&(p="Все объекты инфраструктуры"===n?$("<h1>",{class:"region__object"}):$("<div>",{class:"region__object"}),_.push(p.text(n))))})}),u=m.reduce(function(e,n){return e+n}),e.append(_),r.text(u),$(".map_index__information .icon_close").on("click",function(){n.val(null).trigger("change"),o.val(null).trigger("change"),x(),o.prop("disabled",!0)}),l.on("click",function(){n.val(null).trigger("change"),o.val(null).trigger("change"),x(),o.prop("disabled",!0)}),o.on("select2:select",function(e){var o,n,t=e.params.data,i=(t.id,t.text);t.amount;c===v&&i!==h?(n=i,x(),w(k,v),g=$(".region__information .region__object:contains("+n+")"),g&&(g.show(),g.next(".region__object-num").show())):a!==k&&i!==h?(e=a,t=c,n=s,o=i,x(),w(e,t),g=$(".region__information .region__object:contains("+o+")"),$.each(n,function(e,n){$.each(n,function(e,n){"text"===e&&n===o&&(b=g.next(".region__object-num").data("num"),r.text(b))})}),0<g.length?(g.show(),g.next(".region__object-num").show(),$(".region__object__empty").remove(),d.removeClass("disable")):y()):i===h&&C(a,c,s)})}$(".disable").on("click",function(e){return e.preventDefault(),!1}),n.select2({data:regions,language:{noResults:function(){return"Результаты не найдены"}}}),o.select2({data:[{id:0,text:"Все объекты инфраструктуры",amount:""},{id:1,text:"Кванториум",amount:400},{id:2,text:"IT-Kub",amount:200},{id:3,text:'"Точка роста"',amount:300}],language:{noResults:function(){return"Результаты не найдены"}}}),o.prop("disabled",!0),n.on("select2:select",function(e){o.prop("disabled",!1);var n=e.params.data,e=(n.geoname_id,n.text);C(n.geonameName,e,n.objects)}),o.on("select2:select",function(e){e=e.params.data;e.id;let a=e.text;e.amount;n.on("select2:select",function(e){var o,n=e.params.data,t=(n.geoname_id,n.text),i=n.geonameName,e=n.objects;a!==h&&t!==v?(C(i,t,e),$(".region__information div").hide(),$(".region__information h1").hide(),r.text(""),n=e,o=a,g=$(".region__information .region__object:contains("+o+")"),$.each(n,function(e,n){$.each(n,function(e,n){"text"===e&&n===o&&(b=g.next(".region__object-num").data("num"),r.text(b),g.next(".region__object-num").text(b))})}),0<g.length?(g.show(),g.next(".region__object-num").show(),$(".region__object__empty").remove(),d.removeClass("disable")):y()):(w(k,v),C(i,t,e))})})}$(".scrollbar-inner").scrollbar();var n=$(document).width();if(0<$("menu.aside_menu__container").length){let e;e=n<380?.9*n:n<450?.8*n:750<n?n/2:.7*n;var o=$("#container .header__aside_block"),t=$("#container menu.aside_menu__container"),i=$("#container .aside_menu__bg"),a=$("#container .aside_menu__cross"),c=$("#black_back");t.hide();var s={display:"block",opacity:"1"},l={top:0,bottom:"-100%",opacity:"1"},r={top:"-100%",bottom:"100%",opacity:0};t.width(e),i.width(e),n<1280&&(o.on("click",d),"block"===$(".menu__container").css("display")&&t.css("top","65px"))}function d(){t.show(),i.animate(l,2,function(){a.prop("id","show_aside")}),c.css(s),a.on("click",function(e){_()}),c.on("click",function(e){e.stopPropagation(),_()}),o.off("click",d)}function _(){a.prop("id",""),i.css(r),t.slideUp(600),c.prop("style",""),a.off("click",_),c.off("click",_),o.off("click",_),o.on("click",function(e){e.stopPropagation(),d()})}if(0<$("#back").length&&$("#back").on("click",function(){$("body, html").animate({scrollTop:0},500)}),0<$("menu").length){let e=$('menu label input[type="checkbox"]');e.on("change",function(){$("input.menu_checkbox").not(this).prop("checked",!1)})}if(0<$(".menu__container").length){let e=$(".menu__form .menu__search"),n=$(".menu__items_holder"),o=$(".menu__search_line"),t=$(".menu__eye"),i=$(".menu__close"),a="hidden";e.on("click",function(){o.removeClass(a),i.removeClass(a),t.addClass(a),n.addClass(a)}),i.on("click",function(){o.addClass(a),i.addClass(a),t.removeClass(a),n.removeClass(a)})}if("block"===$(".mobile__container").css("display")){var m=$(".mobile__icon"),u=$(".mobile__menu"),c=$("#black_back");let e;e=n<380?.9*n:n<450?.8*n:800<n?n/2.2:.7*n;var s={display:"block",opacity:"1"},p={right:"0",width:e};$("menu.mobile__container").hasClass("main-menu")||m.on("click",f)}function f(){m.prop("id","show"),$("menu.mobile__container").addClass("main-menu"),u.css(p),c.css(s),m.on("click",function(e){e.stopPropagation(),g()}),c.on("click",function(e){e.stopPropagation(),g()}),m.off("click",f)}function g(){m.prop("id",""),$("menu.mobile__container").removeClass("main-menu"),u.prop("style",""),c.prop("style",""),c.off("click",g),m.off("click",g),m.on("click",function(e){e.stopPropagation(),f()})}$(".modal-link").on("click",function(){$('.modal-overlay[data-modal-id="'+$(this).data("modal-id")+'"]').addClass("modal-overlay_visible")}),$(".modal__close").on("click",function(){$(".modal-overlay").removeClass("modal-overlay_visible")}),$(document).on("click",function(e){$(e.target).closest(".modal").length||$(e.target).closest(".modal-link").length||$(".modal-overlay").removeClass("modal-overlay_visible")});const e=$(".tile_federal__row");0<e.length&&e.on("destroy",function(e,n){const o=debounce(()=>{n.activeBreakpoint<window.innerWidth||($(this).slick(n.options),window.removeEventListener("resize",o))},200);window.addEventListener("resize",o)}).slick({slidesToShow:1,slidesToScroll:1,speed:400,arrows:!1,dots:!0,mobileFirst:!0,infinite:!0,autoplay:!1,responsive:[{breakpoint:770,settings:"unslick"},{breakpoint:580,settings:{arrows:!1,dots:!0,slidesToShow:2,slidesToScroll:2}}]})});
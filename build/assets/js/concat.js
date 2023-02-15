$(document).ready(function () {
   var i = $(document).width();
   if (0 < $("menu.aside_menu__container").length) {
      let n;
      n = i < 380 ? .9 * i : i < 450 ? .8 * i : 800 < i ? i / 2.2 : .7 * i;
      var o = $("#container .header__aside_block"), c = $("#container menu.aside_menu__container"),
         t = $("#container .aside_menu__bg"), a = $("#container .aside_menu__cross"), e = $("#black_back");
      c.hide();
      var d = {display: "block", opacity: "1"}, s = {top: 0, bottom: "-100%", opacity: "1"},
         u = {top: "-100%", bottom: "100%", opacity: 0};
      c.width(n), t.width(n), i < 1280 && (o.on("click", p), "block" === $(".menu__container").css("display") && c.css("top", "65px"))
   }
   
   function p() {
      c.show(), t.animate(s, 2, function () {
         a.prop("id", "show_aside")
      }), e.css(d), a.on("click", function (n) {
         _()
      }), e.on("click", function (n) {
         n.stopPropagation(), _()
      }), o.unbind("click", p)
   }
   
   function _() {
      a.prop("id", ""), t.animate(u, 20, function () {
         c.slideUp(600)
      }), e.prop("style", ""), a.unbind("click", _), e.unbind("click", _), o.unbind("click", _), o.on("click", function (n) {
         n.stopPropagation(), p()
      })
   }
});
$(document).ready(function () {
   0 < $("#back").length && $("#back").on("click", function () {
      $("body, html").animate({scrollTop: 0}, 500)
   })
});
$(document).ready(function () {
   if (0 < $(".menu__container").length) {
      let e = $('.menu__items_holder input[type="checkbox"]');
      e.on("change", function () {
         $("input.menu_checkbox").not(this).prop("checked", !1)
      })
   }
});
$(document).ready(function () {
   if (0 < $(".menu__container").length) {
      let e = $(".menu__form .menu__search"), n = $(".menu__items_holder"), s = $(".menu__search_line"),
         a = $(".menu__eye"), _ = $(".menu__close"), l = "hidden";
      e.on("click", function () {
         s.removeClass(l), _.removeClass(l), a.addClass(l), n.addClass(l)
      }), _.on("click", function () {
         s.addClass(l), _.addClass(l), a.removeClass(l), n.removeClass(l)
      })
   }
});
$(document).ready(function () {
   var n = $(document).width();
   if ("block" === $(".mobile__container").css("display")) {
      var i = $(".mobile__icon"), c = $(".mobile__menu"), a = $("#black_back");
      let o;
      o = n < 380 ? .9 * n : n < 450 ? .8 * n : 800 < n ? n / 2.2 : .7 * n;
      var e = {display: "block", opacity: "1"}, t = {right: "0", width: o};
      $("menu.mobile__container").hasClass("main-menu") || i.on("click", l)
   }
   
   function l() {
      i.prop("id", "show"), $("menu.mobile__container").addClass("main-menu"), c.css(t), a.css(e), i.on("click", function (o) {
         o.stopPropagation(), s()
      }), a.on("click", function (o) {
         o.stopPropagation(), s()
      }), i.off("click", l)
   }
   
   function s() {
      i.prop("id", ""), $("menu.mobile__container").removeClass("main-menu"), c.prop("style", ""), a.prop("style", ""), a.off("click", s), i.off("click", s), i.on("click", function (o) {
         o.stopPropagation(), l()
      })
   }
});
$(document).ready(function () {
   const e = $(".slider__content");
   0 < e.length && e.on("destroy", function (e, i) {
      const n = debounce(() => {
         i.activeBreakpoint < window.innerWidth || ($(this).slick(i.options), window.removeEventListener("resize", n))
      }, 200);
      window.addEventListener("resize", n)
   }).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 400,
      arrows: !0,
      infinite: !0,
      autoplay: !1,
      responsive: [{breakpoint: 900, settings: {arrows: !0, slidesToShow: 2, slidesToScroll: 1}}, {
         breakpoint: 770,
         settings: "unslick"
      }]
   })
});

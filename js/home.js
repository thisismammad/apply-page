let flag = true;

var prevWidth = window.innerWidth;
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width !== prevWidth) {
    prevWidth = width;
    closeSideMenu();
  }
});

function showHideMenu() {
  flag = true;
  $(".menu-btn").on("click", function () {
    if (flag) {
      openSideMenu();
    } else {
      closeSideMenu();
    }
  });
}

function closeSideMenu() {
  $("aside").css({
    right: "-100%",
  });
  $(".menu-btn>span:nth-of-type(1)").css({
    transform: "rotate(0)",
    top: "5px",
  });
  $(".menu-btn>span:nth-of-type(2)").fadeIn(0);
  $(".menu-btn>span:nth-of-type(3)").css({
    transform: "rotate(0)",
    top: "19px",
  });
  flag = true;
  $(".sub-menu").slideUp(300);
  newFlag = true;
  $(".menu-btn").css("position", "relative");
  let icon = $("aside .menu-nav-container .menu-nav li i");

  icon.removeClass("fa-chevron-up");
  icon.addClass("fa-chevron-down");
}

function openSideMenu() {
  $("aside").css({
    right: "0",
  });
  $(".menu-btn>span:nth-of-type(1)").css({
    transform: "rotate(45deg)",
    top: "calc(50% - 2px)",
  });
  $(".menu-btn>span:nth-of-type(2)").fadeOut(0);
  $(".menu-btn>span:nth-of-type(3)").css({
    transform: "rotate(-45deg)",
    top: "calc(50% - 2px)",
  });
  flag = false;
  $(".menu-btn").css("position", "fixed");
}

showHideMenu();

let newFlag = true;
$("header .nav-container .head-nav li").on("click", function () {
  let e = $(this);
  $(this)
    .find("ul")
    .toggle(300, function () {
      let icon = e.find("i");
      if (icon.hasClass("fa-chevron-down")) {
        icon.removeClass("fa-chevron-down");
        icon.addClass("fa-chevron-up");
      } else {
        icon.removeClass("fa-chevron-up");
        icon.addClass("fa-chevron-down");
      }
    });
});

$("aside .menu-nav-container .menu-nav li").on("click", function () {
  let e = $(this);
  $(this)
    .find("ul")
    .toggle(300, function () {
      let icon = e.find("i");
      if (icon.hasClass("fa-chevron-down")) {
        icon.removeClass("fa-chevron-down");
        icon.addClass("fa-chevron-up");
      } else {
        icon.removeClass("fa-chevron-up");
        icon.addClass("fa-chevron-down");
      }
    });
});

$("main").on("click", function () {
  $(".sub-menu").slideUp(300);
  newFlag = true;
  $(".menu-btn").css("position", "relative");
  let icon = $(" header .nav-container .head-nav li i");

  icon.removeClass("fa-chevron-up");
  icon.addClass("fa-chevron-down");
  closeSideMenu();
});

// $("a").attr("href", "#");




let owl1 = $("#owl-product1").owlCarousel({
  loop: true,
  rtl: true,
  margin: 0,
  dots: false,
  nav: false,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

owl1.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl1.trigger("next.owl");
  } else {
    owl1.trigger("prev.owl");
  }
  e.preventDefault();
});

let owl2 = $("#owl-product2").owlCarousel({
  loop: true,
  rtl: true,
  margin: 0,
  dots: false,
  nav: false,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
owl2.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl2.trigger("next.owl");
  } else {
    owl2.trigger("prev.owl");
  }
  e.preventDefault();
});


let owl3 = $("#owl-product3").owlCarousel({
  loop: true,
  rtl: true,
  margin: 0,
  dots: false,
  nav: false,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
owl3.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl3.trigger("next.owl");
  } else {
    owl3.trigger("prev.owl");
  }
  e.preventDefault();
});

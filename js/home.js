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
      }else{
        icon.removeClass("fa-chevron-up");
        icon.addClass("fa-chevron-down");
      }
    });
});

$("aside .menu-nav-container .menu-nav li").on("click", function () {
  let e = $(this);
  $(this).find("ul").toggle(300, function(){
    let icon = e.find("i");
    if (icon.hasClass("fa-chevron-down")) {
      icon.removeClass("fa-chevron-down");
      icon.addClass("fa-chevron-up");
    }else{
      icon.removeClass("fa-chevron-up");
      icon.addClass("fa-chevron-down");
    }
  });
});

$("main").on("click", function () {
  $(".sub-menu").slideUp(300);
  newFlag = true;
  closeSideMenu();
});

$("a").attr("href", "#");

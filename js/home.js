let flag = true;
window.addEventListener("resize", () => {
  closeSideMenu();
});

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
  $(".menu-btn").css("position","relative");
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
  $(".menu-btn").css("position","fixed");
}

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

showHideMenu();

let newFlag = true;
$("header .nav-container .head-nav li").on("click", function () {
  $(this).find("ul").toggle(300);
});

$("aside .menu-nav-container .menu-nav li").on("click", function () {
  $(this).find("ul").toggle(300);
});

$("main").on("click", function () {
  $(".sub-menu").slideUp(300);
  newFlag = true;
  closeSideMenu();
});

$("a").attr("href", "#");

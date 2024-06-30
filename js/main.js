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

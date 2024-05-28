new Swiper(".special .swiper-container", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".slide-toggle > a").click(function () {
  const anchor = $(this);
  const slideMenu = anchor.siblings(".slide-menu");

  $(".slide-menu").not(slideMenu).slideUp("slow");

  $(".slide-toggle").not(anchor.closest(".slide-toggle")).removeClass("active");
  $(".slide-toggle")
    .not(anchor.closest(".slide-toggle"))
    .find(".menu-icon")
    .removeClass("active");

  if (anchor.hasClass("disabled")) {
    return;
  }

  anchor.addClass("disabled");

  slideMenu.slideToggle(function () {
    anchor.removeClass("disabled");
  });

  anchor.closest(".slide-toggle").toggleClass("active");

  anchor.find(".menu-icon").toggleClass("active");
});

$(".menu-subject-open").click(function (e) {
  e.stopPropagation();
  $(this).css("display", "none");
  $(".menu-subject-close").addClass("active");
  $(".sub-menu-subject").show();
});

$(".menu-subject-close").click(function (e) {
  e.stopPropagation();
  $(this).removeClass("active");
  $(".menu-subject-open").show();
  $(".sub-menu-subject").hide();
});

$(".subject-menu").click(function (e) {
  e.stopPropagation();
});

$(window).click(function () {
  if ($(window).width() <= 980) {
    $(".menu-subject-close").removeClass("active");
    $(".menu-subject-open").show();
    $(".sub-menu-subject").hide();
  }
});

new Swiper(".banner .swiper-container", {
  spaceBetween: 40,
  freeMode: false,
  enteredSlides: true,
  speed: 9000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: false,
});

const images = $(".header-bg img");
let currentIndex = 0;

if (images.length > 0) {
  images.eq(currentIndex).addClass("active");

  function headerBg() {
    images.eq(currentIndex).removeClass("active");

    currentIndex = (currentIndex + 1) % images.length;

    images.eq(currentIndex).addClass("active");
  }
}

setInterval(headerBg, 5000);

$("#to-top").click(function () {
  gsap.to(window, { duration: 0.7, scrollTo: 0 });
});

$(".menu-open").click(function (e) {
  e.stopPropagation();
  $(".side-menu").fadeIn("fast");
  $("body").css("overflow", "hidden");
});

$(".side-menu-close").click(function (e) {
  e.stopPropagation();
  $(".side-menu").fadeOut("fast");
  $("body").css("overflow", "auto");
});

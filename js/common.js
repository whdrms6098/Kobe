const images = document.querySelectorAll(".header-bg img");
let currentIndex = 0;

function headerBg() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
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

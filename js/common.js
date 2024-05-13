const images = document.querySelectorAll(".header-bg img");
let currentIndex = 0;

function headerBg() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

setInterval(headerBg, 5000);

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

$("#to-top").click(function () {
  gsap.to(window, { duration: 0.7, scrollTo: 0 });
});

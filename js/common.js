const images = $(".header-bg img");
let currentIndex = 0;

if (images.length > 0) {
  images.eq(currentIndex).addClass("active");

  function headerBg() {
    // 현재 이미지의 active 클래스 제거
    images.eq(currentIndex).removeClass("active");

    // 다음 인덱스로 이동 (순환)
    currentIndex = (currentIndex + 1) % images.length;

    // 새로운 이미지에 active 클래스 추가
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

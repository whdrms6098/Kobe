const images = document.querySelectorAll(".header-bg img");
let currentIndex = 0;

function headerBg() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

setInterval(headerBg, 5000);

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

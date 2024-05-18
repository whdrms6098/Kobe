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
  const $this = $(this);
  const $slideMenu = $this.siblings(".slide-menu");

  $(".slide-menu").not($slideMenu).slideUp("slow");

  $(".slide-toggle").not($this.closest(".slide-toggle")).removeClass("active");
  $(".slide-toggle")
    .not($this.closest(".slide-toggle"))
    .find(".menu-icon")
    .removeClass("active");

  if ($this.hasClass("disabled")) {
    return;
  }

  $this.addClass("disabled");

  $slideMenu.slideToggle(function () {
    $this.removeClass("disabled");
  });

  $this.closest(".slide-toggle").toggleClass("active");

  $this.find(".menu-icon").toggleClass("active");
});

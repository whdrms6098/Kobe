new Swiper(".facility .swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 50,
  enteredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

gsap.registerPlugin(ScrollTrigger);

//header message
gsap.fromTo(
  ".header-message",
  { opacity: 0, y: 80 },
  { opacity: 1, y: 0, delay: 0.2 }
);

//header person img
gsap.fromTo(
  ".header-person",
  { opacity: 0, y: 80 },
  { opacity: 1, y: 0, delay: 0.6 }
);

//header symbol img
$(".header-symbol img").each(function (index, element) {
  let delay = Math.min(index * 0.05, 2);
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: delay,
    }
  );
});

//lead bg img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".lead",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  })
  .to(".lead-bg", { y: +100 });

//course 0 bg img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".course__0",
      start: "top 50%",
      end: "top 10%",
      scrub: 4,
    },
  })
  .fromTo(".course__0-bg", { y: 100 }, { y: -100 });

//course 1 symbol img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".course__1",
      start: "top 80%",
      end: "bottom bottom",
      scrub: 6,
    },
  })
  .to(".course__1-symbol", { y: +200 });

//course 1 title img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".course__1",
      start: "top 50%",
      end: "top 10%",
      scrub: 8,
    },
  })
  .fromTo(".course__1-title", { y: -150 }, { y: -100 });

//course 2 symbol img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".course__2",
      start: "top 80%",
      end: "bottom bottom",
      scrub: 6,
    },
  })
  .to(".course__2-symbol", { y: +200 });

//course 2 title img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".course__2",
      start: "top 50%",
      end: "top 10%",
      scrub: 8,
    },
  })
  .fromTo(".course__2-title", { y: -150 }, { y: -100 });

//course 3 symbol img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".course__3",
      start: "top 80%",
      end: "bottom bottom",
      scrub: 6,
    },
  })
  .to(".course__3-symbol", { y: +100 });

//course 3 title img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".course__3",
      start: "top 50%",
      end: "top 10%",
      scrub: 8,
    },
  })
  .fromTo(".course__3-title", { y: -150 }, { y: -100 });

//course svg
const circles = $(".course-sub-title circle");

circles.each(function (_, circle) {
  const length = circle.getTotalLength();

  gsap.set(circle, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  gsap.to(circle, {
    strokeDashoffset: 0,
    scrollTrigger: {
      trigger: circle,
      start: "top 80%",
      end: "top 30%",
      scrub: 2,
    },
  });
});

//feature bg img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".features",
      start: "top top",
      end: "bottom bottom",
      scrub: 4,
    },
  })
  .to(".features-bg", { y: +100 });

// features item
$(".features-item").each(function (_, element) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 60%",
        end: "top 40%",
        scrub: 2,
      },
    })
    .fromTo(element, { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
});

//future bg img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".future",
      start: "top 80%",
      end: "top 10%",
      scrub: 4,
    },
  })
  .to(".future-bg", { y: +100 });

//future person img
$(".future-item-person").each(function (index, element) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".future-list",
        start: "top 60%",
        end: "top 40%",
        scrub: 2,
      },
    })
    .fromTo(element, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, index * 0.2);
});

//license bg img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".license",
      start: "top top",
      end: "bottom bottom",
      scrub: 4,
    },
  })
  .to(".license-bg", { y: +100 });

//career bg img
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".career",
      start: "top top",
      end: "bottom bottom",
      scrub: 4,
    },
  })
  .to(".career-bg", { y: +100 });

//career item, svg
$(".career-item").each(function (index, element) {
  const path = $(this).find("circle")[0];
  const length = path.getTotalLength();

  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".career-list",
        start: "top 60%",
        end: "top 20%",
        scrub: 2,
      },
    })
    .fromTo(element, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, index * 0.4)
    .fromTo(
      path,
      { strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 1 },
      index * 0.4
    );
});

$(window).click(function () {
  $(".message-modal").removeClass("active");
  $("body").css("overflow-x", "hidden");
});

$(".lead-message img").click(function (e) {
  e.stopPropagation();
  $(".message-modal").addClass("active");
  $("body").css("overflow", "hidden");
});

$(".message-modal-close").click(function (e) {
  e.stopPropagation();
  $(".message-modal").removeClass("active");
  $("body").css("overflow-x", "auto");
});

$(".message-modal-wrap").click(function (e) {
  e.stopPropagation();
});

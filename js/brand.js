$(document).ready(function () {
  $(window).on("beforeunload", function () {
    $(window).scrollTop(0);
  });

  gsap.registerPlugin(ScrollTrigger);

  //로고
  gsap.to(".logo", {
    opacity: 1,
    duration: 1,
    delay: 2,
  });

  //로고 텍스트
  gsap.to("header p", {
    opacity: 1,
    duration: 2,
    delay: 2,
    y: 0,
  });

  //배경이미지
  gsap.to(".bg-fix", {
    opacity: 1,
    duration: 3,
    delay: 1,
  });

  ScrollTrigger.create({
    trigger: ".mv",
    start: "bottom 80%",
    end: "bottom 30%",
    onEnter: function () {
      gsap.to(".bg-fix", {
        filter: "brightness(0.5)",
        duration: 1,
      });
      $(".bg").addClass("blur-background");
    },
    onLeaveBack: function () {
      gsap.to(".bg-fix", {
        filter: "brightness(1)",
        duration: 1,
      });
      $(".bg").removeClass("blur-background");
    },
  });

  //mv 텍스트
  gsap.to(".img-box", {
    opacity: 1,
    duration: 2,
    delay: 2.5,
    y: 0,
    ease: "power1.out(2)",
  });

  //스크롤러
  gsap.to(".mv-scroller", {
    y: -15,
    duration: 1,
    ease: "power2.inOut",
    delay: 3,
    onComplete: function () {
      gsap.to(".mv-change-img", {
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    },
  });

  ScrollTrigger.create({
    trigger: ".mv-scroller",
    start: "top 80%",
    end: "top 30%",
    onEnter: function () {
      gsap.to(".mv-scroller", {
        y: 195,
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
    },
    onLeaveBack: function () {
      gsap.to(".mv-scroller", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
      });
    },
  });

  //이미지 변경 버튼
  gsap.to(".mv-change-img", {
    y: -15,
    duration: 1,
    ease: "power2.inOut",
    delay: 3, // 4.5초 딜레이
    onComplete: function () {
      gsap.to(".mv-change-img", {
        y: 0, // 종료값
        duration: 1,
        ease: "power2.inOut",
      });
    },
  });

  ScrollTrigger.create({
    trigger: ".mv-scroller",
    start: "top 80%",
    end: "top 30%",
    onEnter: function () {
      gsap.to(".mv-change-img", {
        y: 195,
        opacity: 0, // 투명도 설정
        duration: 1.5,
        ease: "power2.inOut",
      });
    },
    onLeaveBack: function () {
      gsap.to(".mv-change-img", {
        y: 0,
        opacity: 1, // 투명도 설정
        duration: 1.5,
        ease: "power2.inOut",
      });
    },
  });

  //copy
  $(".copy-text span").each(function (index, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".copy-text",
          start: "top 80%",
          end: "top 20%",
          scrub: 2,
        },
      })
      .fromTo(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        index * 0.2
      );
  });

  //copy img
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".copy-text",
        start: "top 80%",
        end: "top 20%",
        scrub: 2,
      },
    })
    .fromTo(".copy-img", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });

  //document-title
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".document-title",
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
      },
    })
    .fromTo(".document-title h2", { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(
      ".document-title img",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      0.4
    );

  //document-bg-text
  $(".document-bg-text span").each(function (_, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".document-bg-text",
          start: "top 90%",
          end: "top 20%",
          scrub: 2,
        },
      })
      .fromTo(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        Math.random() * 0.8 + 0.2
      )
      .fromTo(
        ".document-bg-text h6",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 }
      );
  });

  //document-img
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".document-img",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
      },
    })
    .fromTo(".document-img", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });

  //document-message
  $(".document-message h2").each(function (index, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".document-img",
          start: "top 60%",
          end: "top 10%",
          scrub: 2,
        },
      })
      .fromTo(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        index * 0.2
      );
  });

  //web-title
  $(".web-title h1 span").each(function (index, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".web",
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
        },
      })
      .fromTo(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        index * 0.2
      );
  });

  //web-title block img
  $(".web-title-block").each(function (index, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".web",
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
        },
      })
      .fromTo(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        index * 0.2
      );
  });

  //document-bg-text
  $(".web-bg-text span").each(function (_, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".web-bg-text",
          start: "top 90%",
          end: "top 20%",
          scrub: 2,
        },
      })
      .fromTo(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        Math.random() * 0.8 + 0.2
      )
      .fromTo(".web-bg-text h6", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
  });

  //web-title more
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".web-title",
        start: "top 90%",
        end: "top 30%",
        scrub: 2,
      },
    })
    .fromTo(".web-title h2", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });

  //web-slider
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".web-slider",
        start: "top 90%",
        end: "top 40%",
        scrub: 2,
      },
    })
    .fromTo(".web-slider", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });

  //dept-title
  $(".dept-title h1 span").each(function (index, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".dept-bg-text",
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
        },
      })
      .fromTo(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        index * 0.2
      );
  });

  //dept-title block img
  $(".dept-title-block").each(function (index, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".dept-bg-text",
          start: "top 60%",
          end: "top 50%",
          scrub: 2,
        },
      })
      .fromTo(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        index * 0.2
      );
  });

  //detp-bg-text
  $(".dept-bg-text span").each(function (_, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".dept-bg-text",
          start: "top 70%",
          end: "top 40%",
          scrub: 2,
        },
      })
      .fromTo(
        element,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        Math.random() * 0.8 + 0.2
      )
      .fromTo(".dept-bg-text h6", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
  });

  //dept-box img
  $(".dept-box-item").each(function (_, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 100%",
          end: "top 60%",
          scrub: 3,
        },
      })
      .fromTo(element, { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
  });

  //gallery path
  $(".gallery-box").each(function () {
    const path = $(this).find(".path")[0];
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 90%",
          end: "top 30%",
          scrub: 2,
        },
      })
      .fromTo(
        path,
        { strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 5, ease: "power1.inOut" }
      );
  });

  //gallery-bg-text
  $(".gallery-bg-text span").each(function (_, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".gallery",
          start: "top 90%",
          end: "top 50%",
          scrub: 2,
        },
      })
      .fromTo(element, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 6)
      .fromTo(
        ".gallery-bg-text h6",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 }
      );
  });

  //gallery img
  $(".gallery-box img").each(function (_, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 100%",
          end: "top 40%",
          scrub: 2,
        },
      })
      .fromTo(
        element,
        { y: 100, opacity: 0, filter: "blur(1px)" },
        { y: 1, opacity: 1, filter: "blur(0)", duration: 1 },
        2
      );
  });

  //gallery number
  $(".gallery-box span").each(function (_, element) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top 100%",
          end: "top 80%",
          scrub: 2,
        },
      })
      .fromTo(element, { y: 100, opacity: 0 }, { y: 1, opacity: 1 }, 1);
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".gallery",
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
      },
    })
    .fromTo(".gallery-title h2", { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(
      ".gallery-title-block",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1 },
      1
    );
});

new Swiper(".web-slider .swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

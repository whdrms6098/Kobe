$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  //로고
  gsap.to($(".logo"), {
    opacity: 1,
    duration: 1,
    delay: 2,
  });

  //로고 텍스트
  gsap.to($("header p"), {
    opacity: 1,
    duration: 2,
    delay: 2.5,
    y: 0,
  });

  //배경이미지
  gsap.to($(".fix"), {
    opacity: 1,
    duration: 4,
    delay: 1,
  });

  ScrollTrigger.create({
    trigger: ".bg",
    start: "bottom 50%", // 화면 하단에서 80% 위치에 도달했을 때 트리거
    onEnter: function () {
      gsap.to($(".fix"), {
        filter: "brightness(0.82) blur(5px)", // 필터 적용
        duration: 1,
      });
    },
    onLeaveBack: function () {
      gsap.to($(".fix"), {
        filter: "brightness(1) blur(0)", // 필터 해제
        duration: 1,
      });
    },
    markers: true, // 트리거 위치를 시각적으로 확인하기 위한 마커
  });

  //mv 텍스트
  gsap.to($(".img-box"), {
    opacity: 1,
    duration: 2,
    delay: 3,
    y: 0,
    ease: "power1.out(2)",
  });

  //스크롤러
  gsap.to(".mv-scroller", {
    y: -15,
    duration: 1,
    ease: "power2.inOut",
    delay: 4.5,
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
    delay: 4.5, // 4.5초 딜레이
    onComplete: function () {
      gsap.to(".mv-change-img", {
        y: 0, // 종료값
        duration: 1,
        ease: "power2.inOut",
      });
    },
  });

  ScrollTrigger.create({
    trigger: ".mv-change-img",
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
});

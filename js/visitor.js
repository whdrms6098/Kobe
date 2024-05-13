$(".page-top-btn button").click(function () {
  gsap.to(window, { duration: 0.7, scrollTo: 0 });
});

$(".info-page-menu li").each(function (index) {
  const targetIndex = index;

  $(this).click(function () {
    gsap.to(window, {
      duration: 0.7,
      scrollTo: { y: `#list-item${targetIndex + 1}` },
    });
  });
});

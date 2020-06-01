$("nav li").hover(
  function () {
    $("ul", this).stop().slideDown(200);
  },

  function () {
    $("ul", this).stop().slideUp(200);
  }
);
$("document").ready(function () {
  $("#carousel").slick({
    dots: true,
    prevArrow: $("#prev"),
    nextArrow: $("#next"),
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    initialSlide: 2,
    infinite: true,
    variableWidth: true,
    variableHeight: true,
    speed: 500
  });
});

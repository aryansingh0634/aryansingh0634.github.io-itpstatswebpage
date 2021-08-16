$("#myButton").click(function () {
  $.scrollTo($("#myDiv"), 1000);
});

window.addEventListener("scroll", (event) => {});

$(".allContents").scroll(function () {
  var sc = $(".allContents").scrollTop();
  console.log(sc);

  if (sc >= 10 && sc <= 179) {
    $(".scrollDown").hide();
    $(".newscrollDown").hide();
  } else if (sc >= 180 && sc <= 900) {
    $(".cards").show(200);
    $("h1.fs-120").show(400);
    $(".counterr h1.fs-165").hide(200);
    $(".img-fluid.leftCircle").hide();
    $(".img-fluid.rightCircle").hide();
    $(".newscrollDown").show();
    $(".scrollDown").hide();
    // $('html, body').animate({
    //     scrollTop: $(".section2").offset().top
    // });
    // $('.section1').hide(100)
    // $('.section2').show(100)
  }
  // else if(sc>=600){
  //     // $('html, body').animate({
  //     //     scrollTop: $(".section3").offset().top
  //     // });
  // }
  else if (sc >= 900) {
    $(".img-fluid.leftCircle").show();
    $(".img-fluid.rightCircle").show();
    $(".counterr h1.fs-165").show();
    $(".newscrollDown").show();
    $(".scrollDown").hide();
  } else {
    $(".cards").hide(200);
    $("h1.fs-120").hide(200);
    $(".counterr h1.fs-165").hide(200);
    $(".img-fluid.leftCircle").hide();
    $(".img-fluid.rightCircle").hide();
    $(".scrollDown").show();
    $(".newscrollDown").hide();
  }
});
const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
if (vh > vw) {
  document.getElementById("animation").setAttribute("scrolling", "yes");
}

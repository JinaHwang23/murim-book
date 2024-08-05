$(function () {
  // 개별메뉴
  $(".mainmenu>li").mouseenter(function () {
    $(".submenu").slideDown(200);
  });
  $(".mainmenu>li").mouseleave(function () {
    $(".submenu").slideUp(200);
  });

  // 슬라이드
  var x = 0;
  var slideInterval = 5000;
  var animationDuration = 1000;

  setInterval(function () {
    var next = (x + 1) % 3;
    $(".slidebox")
      .find("div")
      .eq(x)
      .fadeOut(animationDuration, function () {
        $(".slidebox").find("div").eq(next).fadeIn(animationDuration);
      });

    x = next;
  }, slideInterval);

  // 탭메뉴
  $("h2").on("click", function () {
    $(this).addClass("on").siblings("h2").removeClass("on");
  });
});


$(document).ready(function () {
  $("#menu").click(function () {
    if (!$(".sidebar-menu").hasClass("active")) {
      $(this).addClass("open");
      $(".sidebar-menu").addClass("active");
      $(".banner_title").fadeOut(500);
      $(".sidebar-menu ul li").each(function (index) {
        $(this)
          .delay(200 * index)
          .fadeIn(500);
      });
    } else {
      $(this).removeClass("open");
      $(".sidebar-menu").removeClass("active");
      $(".banner_title").fadeIn(500);
      $(".sidebar-menu ul li").fadeOut(500);
    }
  });
});

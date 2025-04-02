$(document).ready(function () {
  $("#menu").click(function () {
    if (!$(".sidebar-menu").hasClass("active")) {
      $(this).addClass("open");
      $(".sidebar-menu").addClass("active");
      $(".banner_title").fadeOut(500);
      $(".sidebar-menu ul li").each(function (index) {
        $(this)
          .fadeIn(500);
      });
    } else {
      $(this).removeClass("open");
      $(".sidebar-menu").removeClass("active");
      $(".banner_title").fadeIn(500);
      $(".sidebar-menu ul li").fadeOut(500);
    }
  });

  $(".myWrapper").easyTicker({
    direction: "up", // Ticker moves upward
    easing: "swing", // Easing effect (can be adjusted)
    speed: "slow", // Speed of animation (adjust this as per your need)
    interval: 2000, // Interval between transitions
    height: "auto", // Adjust the height dynamically
    visible: 1, // Number of visible items in the ticker
    mousePause: true, // Pause the ticker on mouse hover
    controls: {
      up: "",
      down: "",
      toggle: "",
      playText: "Play", // Play button text
      stopText: "Stop", // Stop button text
    },
    callbacks: {
      before: function () {
        console.log("Before ticker transition");
      },
      after: function () {
        console.log("After ticker transition");
      },
    },
  });
});

AOS.init();

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

  
});

    const scrollList = document.querySelector(".scroll-list");
    const items = Array.from(scrollList.children);

    window.addEventListener("load", () => {
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            scrollList.appendChild(clone);
        });
    });


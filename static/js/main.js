$(document).ready(function () {

    //hamburger animation
    var Closed = false;

      $('.hamburger').click(function () {
        if (Closed == true) {
          $(this).removeClass('open');
          $(this).addClass('closed');
          Closed = false;
        } else {               
          $(this).removeClass('closed');
          $(this).addClass('open');
          Closed = true;
        }
      });

    //Add class active in header-menu__link
    $(".menu-link").on("click", function() {
        $(".menu-link.active").removeClass("active");
        $(this).toggleClass("active");
    });

    //Show menu with animation
    $('.hamburger').on('click', function() {
        $('.menu').toggleClass('show');
    });
});
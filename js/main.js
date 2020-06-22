var $doc = $(document),
    $win = $(window),
    max = $doc.height() - $win.height() - 7500;


$(window).scroll(function () {

    var scroll = $(window).scrollTop();
    var p = $win.scrollTop() / max;

    if (scroll > 0) {
        $('#bol1 p').css({
            "border-bottom": "#996D29 5px solid",
        });
    } else {
        $('#bol1 p').css({
            "border-bottom": "",
        });
    }
    if (scroll > 100) {
        $('nav').css({
            "background": "#1a1a1a",
            "border-bottom": "#DEB574 thin solid",
        });
    } else {
        $('nav').css({
            "background": "#171717",
            "border-bottom": "#996D29 thin solid",
        });
    }
    if (scroll > 500) {
        $('#bol1 p').css({
            "border-bottom": "",
        });
        $('#bol2 p').css({
            "border-bottom": "#996D29 5px solid",
        });
    } else {
        $('#bol2 p').css({
            "border-bottom": "",
        });
    }
    if (scroll > 1200) {
        $('#bol1 p').css({
            "border-bottom": "",
        });
        $('#bol2 p').css({
            "border-bottom": "",
        });
        $('#bol3 p').css({
            "border-bottom": "#996D29 5px solid",
        });
    } else {
        $('#bol3 p').css({
            "border-bottom": "",
        });
    }
});

// Slider

// Horizontal Carrousel

$(document).ready(function () {
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });
});


$(document).ready(function() {

    //header
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    //slider
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false,
    });

    $('.works-section').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
    });
});


$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault;
       $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-75
        }, 500, 'swing', function () {
            window.location.hash = target;
           $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(e){

    var scrollPos = $(document).scrollTop()+75;
    $('#navbarSupportedContent a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-75 <= scrollPos && refElement.position().top-75 + refElement.height() > scrollPos) {
            $('#navbarSupportedContent ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}




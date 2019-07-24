

/* Please ❤ this if you like it! */


(function($) { "use strict";

    $(function() {
        var header = $(".start-style");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });

    //Animation

    $(document).ready(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $('body.hero-anime').removeClass('hero-anime');

        //Menu On Hover

        $('body').on('mouseenter mouseleave','.nav-item',function(e){
            if ($(window).width() > 750) {
                var _d=$(e.target).closest('.nav-item');_d.addClass('show');
                setTimeout(function(){
                    _d[_d.is(':hover')?'addClass':'removeClass']('show');
                },1);
            }
        });

        //Switch light/dark

        $('#switch').on('click', function () {
            if ($("body").hasClass("dark")) {
                $("body").removeClass("dark");
                $("#switch").removeClass("switched");
            }
            else {
                $("body").addClass("dark");
                $("#switch").addClass("switched");
            }
        });


        $('a[href*="#"]').on('click', function(e) {
            e.preventDefault();
            $(".nav-link").removeClass("active");
            $('#'+e.target.id).addClass("active");
            $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top,
                },
                500,
                'linear'
            )
        });


        // Get id to scroll and update nav
        $(window).scroll(function() {
            var scrollPos = $(document).scrollTop();
            $('#navbarSupportedContent a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('#navbarSupportedContent ul li a').removeClass("active");
                    currLink.addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });

        })
    });



})(jQuery);
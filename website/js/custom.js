/* Show and hide menu - Invisable and visible  */

$(document).ready(function() {

    'use strict';

    $(window).scroll(function() {

        'use strict';

        if ($(window).scrollTop() < 80) {

            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'

            });

            $('.navbar-default').css({
                'background-color': 'rgba(59, 59 , 59, 0)'

            });

        } else {

            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'

            });

            $('.navbar-default').css({
                'background-color': 'rgba(59, 59 , 59, 0.7)',
                'border-color': '#129CF3'

            });

            $('.navbar-brand img').css({
                'height': '35px',
                'padding-top': '0px'

            });

            $('.navbar-nav > li > a').css({
                'padding-top': '15px'
            });

        }

    });

});


// Add smooth scrolling on click
$(document).ready(function() {
    $('.nav-item, #scroll-to-top').click(function() { // Binding .click event handler to all anchors that contain a #, but not JUST a #
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash); // Assigning the variable target
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/* active menu item on click */
$(document).ready(function() {
    'use strict';
    $('.navbar-nav li a').click(function() {
        'use strict';
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});

// Highlight menu item on scroll
$(document).ready(function() {
    'use strict';
    $(window).scroll(function() {
        'use strict';
        $("section").each(function() {
            'use strict';
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 50;

            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
    });
});

// add auto padding to header
$(document).ready(function() {
    'use strict';
    setInterval( function() {
        'use strict';
        var windowHeight = $(window).height();            /*Setting var as the windows height*/
        var containerHeight = $(".header-container").height();
        var padTop = windowHeight - containerHeight;
        $(".header-container").css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10)
});

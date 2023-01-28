$(document).ready(function () {

    /* start alert */
    setTimeout(() => {
        $(".alert-custom").addClass("show")
    }, 500)

    /* end alert */

    /* start productSliders */
    $('.owl-carousel-no-loop').owlCarousel({
        items: 4,
        nav: true,
        rtl: true,
        margin: 20,
        responsive: {
            // breakpoint min-width: 0px
            0: {
                items: 1
            },
            // breakpoint min-width: 576px
            576: {
                items: 2
            },
            // breakpoint min-width: 768px
            768: {
                items: 3
            },
            // breakpoint min-width: 992px
            992: {
                items: 4
            }
        }
    })
    $('.owl-carousel-loop').owlCarousel({
        items: 4,
        nav: true,
        rtl: true,
        margin: 20,
        loop: true,
        responsive: {
            // breakpoint min-width: 0px
            0: {
                items: 2
            },
            // breakpoint min-width: 576px
            576: {
                items: 3
            },
            // breakpoint min-width: 768px
            768: {
                items: 4
            }
        }
    })
    /* end productSliders */

    /* start jumpToTopSection */
    $('.jump-to-top-link').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })
    /* end jumpToTopSection */
})
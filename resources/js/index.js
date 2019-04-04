let backgroundImages = document.querySelectorAll(".slide");
let images = document.querySelectorAll(".slidingImage");



for (let index = 0; index < backgroundImages.length; index++) {
    // console.log(backgroundImages[index].childNodes)
    console.log(images[index].src)
    backgroundImages[index].style.background = `url(${images[index].src})`;
    backgroundImages[index].style.backgroundPosition = "center";
    backgroundImages[index].style.backgroundRepeat = "none";
    backgroundImages[index].style.backgroundSize = "cover";
}

$(document).ready(function () {
    let owl = $(".owl_one")
    owl.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        dots: true,
        dotsEach: true,
        loop: true
    });

});


$(document).ready(function () {
    let owl = $(".owl-one")
    owl.owlCarousel({
        items: 6,
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    });

    $('.home__next').click(function () {
        owl.trigger('next.owl.carousel');
    })


    $('.home__previous').click(function () {
        owl.trigger('prev.owl.carousel');
    })
});

$(document).ready(function () {
    let owl = $(".owl_three")
    owl.owlCarousel({
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1,
                nav: true
            },
            657: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3
            }
        }
    });

    $('.home__sec_next').click(function () {
        owl.trigger('next.owl.carousel');
    })


    $('.home__sec_previous').click(function () {
        owl.trigger('prev.owl.carousel');
    })

});
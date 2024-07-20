const swiper = new Swiper('.galaxyFit3-monitoring__swiper', {
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.galaxyFit3-monitoring__next',
        prevEl: '.galaxyFit3-monitoring__prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});
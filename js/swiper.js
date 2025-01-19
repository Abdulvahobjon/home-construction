new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: {
        delay: 8000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        961: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1270: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1400: {
            spaceBetween: 50,
        },
    },
});
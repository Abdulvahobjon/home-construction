var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Bir qatorga 3ta slayd ko'rsatish
    spaceBetween: 40, // Slaydlar orasidagi masofa
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    pagination: {
        el: ".swiper-pagination-california",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        320: { // Kichik ekranlar (mobil)
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: { // Kichikroq planshet
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: { // Katta ekranlar (desktop)
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});


const scrollBtn = document.getElementById('scrollBtn');
scrollBtn?.addEventListener('click', (e) => {
    e.preventDefault(); // Standart harakatni to'xtatadi
    document.querySelector('#section2').scrollIntoView({
        behavior: 'smooth'
    });
});

AOS.init();


let hambutgerMenu = document.querySelector(".responsive-menu")
let hamburgerBars = document.querySelector(".hamburgerBars")
let hamburgerClose = document.querySelector(".hamburgerClose")

hamburgerBars?.addEventListener('click' , function(){
    hambutgerMenu.classList.add('active')
    document.body.classList.add("active")
})

hamburgerClose?.addEventListener('click' , function(){
    hambutgerMenu.classList.remove('active')
    document.body.classList.remove("active")

})
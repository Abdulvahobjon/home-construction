var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Bir qatorga 3ta slayd ko'rsatish
    spaceBetween: 40, // Slaydlar orasidagi masofa
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    
});


const button = document.getElementById('scrollBtn');
button.addEventListener('click', (e) => {
    e.preventDefault(); // Standart harakatni to'xtatadi
    document.querySelector('#section2').scrollIntoView({
        behavior: 'smooth'
    });
});

AOS.init();
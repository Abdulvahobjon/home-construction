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



if(document.querySelector(".responsive-menu")){
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
}






let aboutVideoClose = document.querySelector(".about-video-close");
let aboutVideo = document.querySelector(".about-video");
let aboutBtn = document.querySelector(".about-btn");

// aboutVideoClose tugmasi bosilganda active klassini olib tashlaymiz
aboutVideoClose?.addEventListener("click", () => {
    aboutVideo?.classList.remove("active");
});

// aboutBtn tugmasi bosilganda active klassini qo'shamiz
aboutBtn?.addEventListener("click", () => {
    aboutVideo?.classList.add("active");
});

// iframe ichida bosilganda hodisani to'xtatamiz


// aboutVideo tashqarisiga bosilganda active klassini olib tashlaymiz
document.addEventListener("click", (event) => {
    if (!aboutVideo?.contains(event.target) && !aboutBtn?.contains(event.target)) {
        aboutVideo?.classList.remove("active");
    }
});



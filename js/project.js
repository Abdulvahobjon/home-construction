const filterButtons = document.querySelectorAll(".filter-buttons button");
const galleryItems = document.querySelectorAll(".gallery .item");

filterButtons?.forEach(filterButton => {
    filterButton.addEventListener("click", () => {
        const filter = filterButton.dataset.filter;
        const isActiveBtn = filterButton.classList.contains('active');

        if (isActiveBtn) return;

        filterButtons.forEach(filterBtn => filterBtn.classList.remove('active'));
        filterButton.classList.add('active');

        galleryItems.forEach(item => {
            item.classList.add("hidden");
            setTimeout(() => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
                setTimeout(() => item.classList.remove("hidden"), 20);
            }, 200);
        });
    });
});

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
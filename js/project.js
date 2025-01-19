const filterButtons = document.querySelectorAll(".filter-buttons button");
const galleryItems = document.querySelectorAll(".gallery .item");

filterButtons?.forEach(filterButton => {
    filterButton.addEventListener("click", () => {
        const filter = filterButton.dataset.filter;
        const isActiveBtn = filterButton.classList.contains('active');

        if (isActiveBtn) return;

        // Hamma tugmalardan active va filter-btn-dark klasslarini olib tashlaymiz
        filterButtons.forEach(filterBtn => filterBtn.classList.remove('active', 'filter-btn-dark'));

        // Joriy tugmaga active va filter-btn-dark klasslarini qo'shamiz
        filterButton.classList.add('active', 'filter-btn-dark');

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
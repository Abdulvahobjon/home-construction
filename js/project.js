const filterButtons = document.querySelectorAll(".filter-buttons button");
const galleryItems = document.querySelectorAll(".gallery .item");

filterButtons.forEach(filterButton => {
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
                setTimeout(() => item.classList.remove("hidden"), 10);
            }, 300);
        });
    });
});
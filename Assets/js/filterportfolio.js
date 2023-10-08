document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            // Hapus kelas filter-active dari semua tombol
            filterButtons.forEach((btn) => {
                btn.classList.remove("filter-active");
            });

            // Tambahkan kelas filter-active ke tombol yang dipilih
            this.classList.add("filter-active");

            // Tampilkan item yang sesuai dengan filter dan sembunyikan yang lain
            portfolioItems.forEach((item) => {
                const itemCategory = item.getAttribute("data-category");

                if (filter === "all" || filter === itemCategory) {
                    item.style.display = "block";
                } else {
                    item.style.display="none";
                }
            });
        });
    });
});

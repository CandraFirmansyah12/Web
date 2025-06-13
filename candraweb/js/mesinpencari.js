
document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const blogCards = document.querySelectorAll(".swiper-slide");
  const noResults = document.getElementById("noResults");

  let found = 0;
  blogCards.forEach(card => {
    const title = card.querySelector(".card-title").innerText.toLowerCase();
    
    // Tambahkan class 'blog-card' agar bisa diatur CSS-nya
    card.classList.add("blog-card");

    if (title.includes(searchTerm)) {
      card.classList.remove("hide");
      found++;
    } else {
      card.classList.add("hide");
    }
  });

  if (found === 0) {
    noResults.classList.remove("d-none");
    noResults.classList.add("fade-in");
  } else {
    noResults.classList.add("d-none");
    noResults.classList.remove("fade-in");
  }
});

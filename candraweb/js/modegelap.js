
  const toggle = document.getElementById("darkToggle");
  const icon = document.getElementById("darkIcon");
  const body = document.body;

  // Cek preferensi sebelumnya
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    icon.classList.remove("bi-moon");
    icon.classList.add("bi-sun");
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);

    // Ganti ikon
    if (isDark) {
      icon.classList.remove("bi-moon");
      icon.classList.add("bi-sun");
    } else {
      icon.classList.remove("bi-sun");
      icon.classList.add("bi-moon");
    }
  });


  // Logika tombol diamond
  document.querySelectorAll('.diamond-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.diamond-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('nominal-hidden').value = btn.getAttribute('data-value');
      window.scrollTo({ top: document.getElementById('topup-form').offsetTop - 50, behavior: 'smooth' });
    });
  });

  // Handle submit form
  document.getElementById("topup-form").addEventListener("submit", async e => {
    e.preventDefault();
    const f = e.target;

    const nama = f.nama.value;
    const idff = f.id.value;
    const nominal = document.getElementById("nominal-hidden").value;
    const metode = f.pembayaran.value;
    const file = f.bukti.files[0];
    const token = "7831918844:AAHFLYmt__zF5sQErU5Zx6sux6BaPxUAbAw"; // GANTI dengan token bot Telegram kamu
    const chat_id = "6096477082"; // GANTI dengan chat ID kamu

    // 1. Kirim pesan ke Telegram
    const text = `📥 PESANAN FREE FIRE\n👤 ${nama}\n🆔 ${idff}\n💎 ${nominal} Diamond\n💰 Metode: ${metode}`;
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id, text })
    });

    // 2. Kirim bukti gambar ke Telegram
    const formData = new FormData();
    formData.append("chat_id", chat_id);
    formData.append("caption", `🖼️ Bukti transfer dari ${nama}`);
    formData.append("photo", file);

    fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(res => {
      if (res.ok) {
        // Tampilkan modal sukses
        const modal = new bootstrap.Modal(document.getElementById("successModal"));
        modal.show();

        // Reset form
        f.reset();
        document.getElementById("nominal-hidden").value = "";
        document.querySelectorAll(".diamond-btn").forEach(btn => btn.classList.remove("active"));
      } else {
        alert("❌ Gagal kirim gambar: " + JSON.stringify(res));
      }
    })
    .catch(err => {
      alert("❌ Error kirim ke Telegram: " + err.message);
    });
  });
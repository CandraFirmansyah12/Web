  const metodeSelect = document.querySelector('select[name="pembayaran"]');
  const pembayaranBody = document.getElementById("pembayaranBody");

  metodeSelect.addEventListener("change", function () {
    const metode = this.value;
    const modal = new bootstrap.Modal(document.getElementById("pembayaranModal"));

    let content = "";

    if (metode === "QRIS") {
      content = `
        <img src="qris.jpg" class="img-fluid rounded mb-3" alt="QRIS">
        <p>Silakan scan QRIS dengan aplikasi dompet digital kamu.</p>
      `;
    } else if (metode === "DANA") {
      content = `
        <p><strong>Transfer ke DANA:</strong></p>
        <p>Nomor: <code>085703163488</code><br>Atas Nama: <strong>Candra Firmansyah</strong></p>
      `;
    } else if (metode === "SeaBank") {
      content = `
        <p><strong>Transfer ke SeaBank:</strong></p>
        <p>Rekening: <code>901354135479</code><br>Atas Nama: <strong>Candra Firmansyah</strong></p>
      `;
    }

    if (content) {
      pembayaranBody.innerHTML = content;
      modal.show();
    }
  });
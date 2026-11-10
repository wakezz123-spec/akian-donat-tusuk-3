const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(opened));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

// GANTI nomor di bawah dengan nomor WhatsApp bisnis (format internasional tanpa + atau spasi).
const whatsappNumber = "6285135751969";
document.getElementById("order-link").href =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo Donat Tusuk Akian, saya mau tanya menu dan pemesanan.")}`;
const orderForm = document.getElementById("order-form");

if (orderForm) {
  orderForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const button = orderForm.querySelector('button[type="submit"]');
    const message = document.getElementById("order-message");

    const pesanan = {
      customer_name: document.getElementById("customer_name").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      product: document.getElementById("product").value,
      quantity: Number(document.getElementById("quantity").value),
      notes: document.getElementById("notes").value.trim()
    };

    button.disabled = true;
    message.textContent = "Sedang mengirim pesanan...";

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pesanan)
      });

      const hasil = await response.json();

      if (!response.ok) {
        throw new Error(hasil.error || "Pesanan gagal dikirim.");
      }

      message.textContent = "Pesanan berhasil dikirim!";
      orderForm.reset();

    } catch (error) {
      message.textContent = "Pesanan belum terkirim. Silakan coba lagi.";
      console.error(error);

    } finally {
      button.disabled = false;
    }
  });
}

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

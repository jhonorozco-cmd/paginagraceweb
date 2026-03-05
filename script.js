// Animaciones al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));
});

// Modo oscuro/claro
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 / ☀️";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Cargar preferencia guardada
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Validación de formulario (ejemplo)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      alert("Por favor completa todos los campos correctamente.");
    }
  });
}

// Notificación al hacer clic en WhatsApp
const whatsappLinks = document.querySelectorAll("a[href*='wa.me'], a[href*='WhatsApp']");
whatsappLinks.forEach(link => {
  link.addEventListener("click", () => {
    alert("¡Gracias por contactarnos por WhatsApp! Un asesor de GRACE TI te atenderá pronto.");
  });
});

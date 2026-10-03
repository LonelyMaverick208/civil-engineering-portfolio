const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector("#themeToggle");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.textContent = open ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") document.body.classList.add("dark");
themeToggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  themeToggle.textContent = dark ? "☀" : "☾";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll("[data-placeholder]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Add your project URL or case-study page in index.html.");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

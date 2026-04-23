const header = document.getElementById("header");
window.addEventListener("scroll", function() {
  header.classList.toggle("scrolled", window.scrollY > 50);
});
const reveals = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e, i) {
    if (e.isIntersecting) {
      setTimeout(function() { e.target.classList.add("visible"); }, i * 60);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(function(el) { obs.observe(el); });
document.querySelectorAll(".nav-link").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("nav").classList.remove("open");
  });
});

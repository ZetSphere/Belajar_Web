const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.padding = "0.5rem 0";
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.padding = "";
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  }
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (!name || !email || !message) {
    alert("Harap isi semua field!");
    return;
  }

  // Here you would normally send data to a server
  // For demo, just show success message
  alert(`Terima kasih ${name}! Pesan Anda telah dikirim.`);
  this.reset();

  // Add animation to button
  const btn = this.querySelector(".btn");
  btn.innerHTML = '<i class="fas fa-check"></i> Terkirim!';
  btn.style.background = "var(--success)";

  setTimeout(() => {
    btn.innerHTML = "Kirim Pesan";
    btn.style.background = "";
  }, 2000);
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

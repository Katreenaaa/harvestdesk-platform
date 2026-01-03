/* ===========================
   HEADER
=========================== */
fetch("../components/header/header.html")
  .then((res) => res.text())
  .then((html) => {
    const headerEl = document.getElementById("header");
    headerEl.innerHTML = html;

    // Dynamically load header CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../components/header/header.css";
    document.head.appendChild(link);

    // Hamburger toggle for mobile
    const hamburger = headerEl.querySelector("#hamburger");
    const nav = headerEl.querySelector("nav");

    if (hamburger && nav) {
      hamburger.addEventListener("click", () => {
        nav.classList.toggle("show");
        hamburger.classList.toggle("active");
      });
    }
  })
  .catch((err) => console.error("Error loading header:", err));

/* ===========================
   FOOTER
=========================== */
fetch("../components/footer/footer.html")
  .then((res) => res.text())
  .then((html) => {
    const footerEl = document.getElementById("footer");
    footerEl.innerHTML = html;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../components/footer/footer.css";
    document.head.appendChild(link);
  })
  .catch((err) => console.error("Error loading footer:", err));

/* ===========================
   HERO SLIDESHOW
=========================== */
const hero = document.querySelector(".hero");
if (hero) {
  const images = [
    "../images/slideshow-main.png",
    "../images/slideshow-img1.jpg",
    "../images/slideshow-img2.jpg",
  ];

  let currentIndex = 0;
  hero.style.backgroundImage = `url('${images[0]}')`;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    hero.style.backgroundImage = `url('${images[currentIndex]}')`;
  }, 5000);
}

/* ===========================
   CONTACT FORM VALIDATION
=========================== */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    alert("Thank you! Your message has been received.");
    this.reset();
  });
}

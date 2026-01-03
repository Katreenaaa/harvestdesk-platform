const counters = document.querySelectorAll(".counter");

const speed = 200; // lower = faster

const startCounting = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCount = () => {
      const increment = target / speed;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

// Trigger when stats enter viewport
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      startCounting();
      observer.disconnect();
    }
  },
  { threshold: 0.4 }
);

observer.observe(document.querySelector(".stats"));

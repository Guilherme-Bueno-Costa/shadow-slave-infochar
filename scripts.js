const cards = document.querySelectorAll(".card");
const cardsHeader = document.querySelectorAll(".card-header");
const cardsBody = document.querySelectorAll(".card-body");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

cards.forEach((card) => observer.observe(card));
cardsHeader.forEach((cardHeader) => observer.observe(cardHeader));
cardsBody.forEach((cardBody) => observer.observe(cardBody));

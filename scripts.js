const cards = document.querySelectorAll(".card");
const cardsHeader = document.querySelectorAll(".card-header");
const cardsBody = document.querySelectorAll(".card-body");

let lastScrollY = window.scrollY;

function animateCard(card, scrollingDown) {
  const header = card.querySelector(".card-header");
  const body = card.querySelector(".card-body");

  // Limpa classes antigas
  card.classList.remove("show", "down-init", "up-init");
  header.classList.remove("show", "down-init", "up-init");
  body.classList.remove("show", "down-init", "up-init");

  // Define posição inicial do scrolling
  if (scrollingDown) {
    card.classList.add("down-init");
    header.classList.add("down-init");
    body.classList.add("down-init");
  } else {
    card.classList.add("up-init");
    header.classList.add("up-init");
    body.classList.add("up-init");
  }

  // Adiciona a animação após delay;
  setTimeout(() => {
    card.classList.add("show");
    header.classList.add("show");
    body.classList.add("show");
  }, 10);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const scrollingDown = window.scrollY > lastScrollY;

      if (entry.isIntersecting) {
        animateCard(entry.target, scrollingDown);
      } else {
        const card = entry.target;
        const header = card.querySelector(".card-header");
        const body = card.querySelector(".card-body");

        card.classList.remove("show", "down-init", "up-init");
        header.classList.remove("show", "down-init", "up-init");
        body.classList.remove("show", "down-init", "up-init");
      }
    });

    lastScrollY = window.scrollY;
  },
  { threshold: 0.3 }
);

cards.forEach((card) => observer.observe(card));

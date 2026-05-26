// ===== Countdown Timer =====
const countdownDate = new Date("2026-04-15T19:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (distance < 0) {
    if (daysEl) daysEl.textContent = "00";
    if (hoursEl) hoursEl.textContent = "00";
    if (minutesEl) minutesEl.textContent = "00";
    if (secondsEl) secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
  if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
  if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
  if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ===== Lightbox =====
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

images.forEach(img => {
  img.addEventListener("click", () => {
    if (lightbox && lightboxImg) {
      lightboxImg.src = img.src;
      lightbox.classList.add("visible");
    }
  });
});

if (lightbox) {
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("visible");
  });
}


// ===== Scroll Animation =====

// Debounce function (performance boost)
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function showOnScroll() {
  // About Section
  const aboutSection = document.querySelector(".about-section");
  if (aboutSection) {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      aboutSection.classList.add("show");
    }
  }

  // Gallery Images (stagger animation)
  images.forEach((img, index) => {
    const imgTop = img.getBoundingClientRect().top;

    if (imgTop < window.innerHeight - 100) {
      setTimeout(() => {
        img.classList.add("show");
      }, index * 200);
    }
  });
}

// Run on scroll
window.addEventListener("scroll", debounce(showOnScroll, 100));

// Run once on page load (IMPORTANT 🔥)
showOnScroll();

// Budget Section
const budgetSection = document.querySelector(".budget-section");
const budgetRows = document.querySelectorAll(".budget-row");

if (budgetSection) {
  const sectionTop = budgetSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    budgetSection.classList.add("show");

    budgetRows.forEach((row, index) => {
      setTimeout(() => {
        row.classList.add("show");
      }, index * 150); // stagger effect
    });
  }
}

// Included Section
const includedSection = document.querySelector(".included-section");
const includedCards = document.querySelectorAll(".included-card");

if (includedSection) {
  const sectionTop = includedSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    includedSection.classList.add("show");

    includedCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 150); // stagger effect
    });
  }
}

// Organizer Section
const organizerSection = document.querySelector(".organizer-section");
const organizerCards = document.querySelectorAll(".organizer-card");
const organizerNote = document.querySelector(".organizer-note");

if (organizerSection) {
  const sectionTop = organizerSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    organizerSection.classList.add("show");

    organizerCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 200); // stagger effect
    });

    if (organizerNote) {
      setTimeout(() => {
        organizerNote.classList.add("show");
      }, 600);
    }
  }
}
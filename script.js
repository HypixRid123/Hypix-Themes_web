/* =================================
HYPIX THEMES — SCRIPT.JS
================================= */

/* =================================
MOBILE NAVIGATION
================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

function closeMenu() {
navMenu.classList.remove("active");

menuBtn.setAttribute("aria-expanded", "false");
menuBtn.setAttribute("aria-label", "Open navigation menu");
}

function openMenu() {
navMenu.classList.add("active");

menuBtn.setAttribute("aria-expanded", "true");
menuBtn.setAttribute("aria-label", "Close navigation menu");
}

if (menuBtn && navMenu) {

menuBtn.addEventListener("click", () => {

const isOpen = navMenu.classList.contains("active");

if (isOpen) {
  closeMenu();
} else {
  openMenu();
}

});

/* Close after clicking a navigation link */

navMenu.querySelectorAll("a").forEach((link) => {

link.addEventListener("click", () => {
  closeMenu();
});

});

/* Close with Escape */

document.addEventListener("keydown", (event) => {

if (event.key === "Escape") {

  if (navMenu.classList.contains("active")) {

    closeMenu();
    menuBtn.focus();

  }

}

});

/* Close when clicking outside */

document.addEventListener("click", (event) => {

if (
  navMenu.classList.contains("active") &&
  !navMenu.contains(event.target) &&
  !menuBtn.contains(event.target)
) {

  closeMenu();

}

});

}

/* =================================
FAQ ACCORDION
================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

const question = item.querySelector(".faq-question");
const answer = item.querySelector(".faq-answer");

question.addEventListener("click", () => {

const isOpen = item.classList.contains("active");


/* Close other FAQ items */

faqItems.forEach((otherItem) => {

  if (otherItem !== item) {

    otherItem.classList.remove("active");

    const otherAnswer =
      otherItem.querySelector(".faq-answer");

    if (otherAnswer) {
      otherAnswer.style.maxHeight = null;
    }

  }

});


/* Open / close current item */

if (!isOpen) {

  item.classList.add("active");

  answer.style.maxHeight =
    answer.scrollHeight + "px";

} else {

  item.classList.remove("active");

  answer.style.maxHeight = null;

}

});

});

/* =================================
HYPIX HELPER
================================= */

const helperButton =
document.getElementById("helperButton");

const helperBox =
document.getElementById("helperBox");

const closeHelper =
document.getElementById("closeHelper");

if (helperButton && helperBox) {

helperButton.addEventListener("click", () => {

helperBox.classList.toggle("show");

});

}

if (closeHelper && helperBox) {

closeHelper.addEventListener("click", () => {

helperBox.classList.remove("show");

});

}

/* Close helper with Escape */

document.addEventListener("keydown", (event) => {

if (
event.key === "Escape" &&
helperBox &&
helperBox.classList.contains("show")
) {

helperBox.classList.remove("show");

if (helperButton) {
  helperButton.focus();
}

}

});

/* =================================
CLOSE HELPER WHEN CLICKING OUTSIDE
================================= */

document.addEventListener("click", (event) => {

if (
helperBox &&
helperButton &&
helperBox.classList.contains("show") &&
!helperBox.contains(event.target) &&
!helperButton.contains(event.target)
) {

helperBox.classList.remove("show");

}

});

/* =================================
SCROLL REVEAL
================================= */

const revealElements = document.querySelectorAll(
".card, .project, .price-card, .review, .faq-item, .contact-box"
);

const revealObserver = new IntersectionObserver(
(entries, observer) => {

entries.forEach((entry) => {

  if (entry.isIntersecting) {

    entry.target.classList.add("revealed");

    observer.unobserve(entry.target);

  }

});

},
{
threshold: 0.12
}
);

revealElements.forEach((element) => {

element.classList.add("reveal");

revealObserver.observe(element);

});

/* =================================
ACTIVE NAVIGATION
================================= */

const sections = document.querySelectorAll(
"section[id]"
);

const navigationLinks =
document.querySelectorAll(
'#navMenu a[href^="#"]'
);

const sectionObserver =
new IntersectionObserver(
(entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (
          link.getAttribute("href") ===
          "#" + entry.target.id
        ) {

          link.classList.add("active");

        }

      });

    }

  });

},
{
  rootMargin: "-35% 0px -55% 0px"
}

);

sections.forEach((section) => {

sectionObserver.observe(section);

});

/* =================================
CURRENT YEAR
================================= */

const copyright =
document.querySelector(".copyright");

if (copyright) {

copyright.textContent =
"© ${new Date().getFullYear()} Hypix Themes. All rights reserved.";

}

/* =================================
IMAGE ERROR HANDLING
================================= */

document.querySelectorAll("img").forEach((image) => {

image.addEventListener("error", () => {

image.style.display = "none";

});

});

/* =================================
REDUCED MOTION
================================= */

const prefersReducedMotion =
window.matchMedia(
"(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {

document.documentElement.style.scrollBehavior =
"auto";

}

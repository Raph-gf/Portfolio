const btnMenu = document.querySelector(".burger");
const menuBurger = document.querySelector(".menu-burger");
const icon = btnMenu.querySelector("i");

// Mobile navigation menu
const displayMenu = (e) => {
  if (!btnMenu) return;

  e.stopPropagation();
  menuBurger.classList.toggle("menu-burger--hidden");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
};

const closeMenu = (e) => {
  if (!menuBurger.contains(e.target) && e.target !== btnMenu) {
    menuBurger.classList.add("menu-burger--hidden");
  }
  icon.classList.remove("fa-xmark");
  icon.classList.add("fa-bars");
};

// Stick navigation
const obs = new IntersectionObserver(
  function (entries) {
    document.body.classList.toggle(
      "sticky",
      entries[0].isIntersecting === false
    );
  },
  { root: null, threshold: 0, rootMargin: "-60px" }
);
obs.observe(document.querySelector(".home"));

// Smooth scroling
const projectLink = document.querySelectorAll(".menu-header__resume--project");

projectLink.forEach((link) => {
  link.addEventListener("click", function (e) {
    console.log(e.target);
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (link.classList.contains("menu-header__resume--project"))
      menuBurger.classList.add("menu-burger--hidden");
  });
});

document.addEventListener("click", closeMenu);
btnMenu.addEventListener("click", displayMenu);

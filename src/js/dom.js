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
  console.log(icon);

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

document.addEventListener("click", closeMenu);
btnMenu.addEventListener("click", displayMenu);

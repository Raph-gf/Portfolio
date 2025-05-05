const btnMenu = document.querySelector(".burger");
console.log(btnMenu);

const menuBurger = document.querySelector(".menu-burger");
console.log(menuBurger);

const displayMenu = (e) => {
  if (!btnMenu) return;
  e.stopPropagation();
  menuBurger.classList.toggle("menu-burger--hidden");

  const icon = btnMenu.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
};

const closeMenu = (e) => {
  console.log(e.target);
  if (!menuBurger.contains(e.target) && e.target !== btnMenu) {
    menuBurger.classList.add("menu-burger--hidden");
  }
};

document.addEventListener("click", closeMenu);
btnMenu.addEventListener("click", displayMenu);

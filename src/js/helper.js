const copyright = document.querySelector(".copyright__paragraph");
const year = new Date().getFullYear();

const getNewYear = () => {
  copyright.innerHTML = `
              <p class="copyright__paragraph">
                ${year}© By Raphael Garnier-Fagour
              </p>
          `;
};
document.addEventListener("DOMContentLoaded", getNewYear);

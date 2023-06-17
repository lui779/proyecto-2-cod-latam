
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  /*Cuando le de click al toggle le añadimos un eventListener que va a escuchar
el evento click y le pasamos una función en la que classList le va ahacer
un toggle a nav-menu_visible*/

  if (navMenu.classList.contains("nav-menu_visibble")) {
    navToggle.setAttribute("aria-label", "Abrir menú");
  } else {
    navToggle.setAttribute("arial-label", "Cerrar menú");
  }
});

// ----- HAMBURGER MENU -----
const navToggle = document.querySelector(".navToggle");
const mainNav = document.querySelector(".mainNav");
const siteHeader = document.querySelector(".siteHeader");

if (navToggle && mainNav && siteHeader) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    siteHeader.classList.toggle("menuOpen");

    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
  });
}
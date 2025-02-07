document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const closeMenuButton = document.getElementById("close-button");
  const navigationLinks = document.querySelectorAll("ul a");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");

  function toggleMenu() {
    overlay.classList.toggle("active");
    menu.classList.toggle("show");
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !expanded);
  }
  menuButton.addEventListener("click", () => {
    toggleMenu();
    closeMenuButton.style.display = "grid";
    menuButton.style.display = "none";
  });
  closeMenuButton.addEventListener("click", () => {
    toggleMenu();
    closeMenuButton.style.display = "none";
    menuButton.style.display = "grid";
  });
  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu();
      closeMenuButton.style.display = "none";
      menuButton.style.display = "grid";
    });
  });
});

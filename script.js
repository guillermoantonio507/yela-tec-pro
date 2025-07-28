// Efecto interactivo: cambio de intensidad al pasar el mouse
const logo = document.querySelector(".logo-3d");

logo.addEventListener("mouseenter", () => {
  logo.style.textShadow =
    "0 2px 1px #ffd700, 0 4px 3px #ffd700, 0 5px 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 0, 60, 0.6)";
});

logo.addEventListener("mouseleave", () => {
  logo.style.textShadow =
    "0 1px 0 #ffd700, 0 2px 0 #ffd700, 0 3px 5px rgba(0, 0, 0, 0.8), 0 0 15px rgba(255, 0, 60, 0.4)";
});
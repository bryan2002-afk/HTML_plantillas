// Selecciona todos los enlaces del menú
const links = document.querySelectorAll('nav a');

// Selecciona la barra animada que se desliza
const animation = document.querySelector('.animation');

// Ancho de cada enlace (debe coincidir con el CSS)
const linkWidth = 118;

// Posiciona la barra al cargar la página debajo del enlace activo
window.addEventListener('DOMContentLoaded', () => {
  const activeLink = document.querySelector('nav a.active');
  const index = Array.from(links).indexOf(activeLink);
  animation.style.left = `${index * linkWidth}px`;
  animation.style.backgroundColor = activeLink.dataset.color;
});

// Al hacer clic en un enlace del menú
links.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evita salto por el href="#"

    // Elimina clase activa del anterior
    document.querySelector('nav a.active')?.classList.remove('active');

    // Agrega clase activa al actual
    link.classList.add('active');

    // Mueve la barra y actualiza el color
    animation.style.left = `${index * linkWidth}px`;
    animation.style.backgroundColor = link.dataset.color;
  });
});

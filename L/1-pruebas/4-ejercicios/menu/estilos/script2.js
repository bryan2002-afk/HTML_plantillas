//✅ Solución: que solo se mueva al hacer clic (no al pasar el mouse)

// Selecciona todos los enlaces del menú
const links = document.querySelectorAll('nav a');

// Selecciona la barra animada que se desliza
const animation = document.querySelector('.animation');

// Ancho de cada enlace (debe coincidir con el CSS)
const linkWidth = 118;

// Al cargar la página, posiciona la barra debajo del enlace activo
window.addEventListener('DOMContentLoaded', () => {
  const activeLink = document.querySelector('nav a.active');
  const index = Array.from(links).indexOf(activeLink);
  animation.style.left = `${index * linkWidth}px`;
  animation.style.backgroundColor = activeLink.dataset.color; // Aplica el color
});

// Al hacer clic en un enlace, se actualiza la clase activa y la barra
links.forEach((link, index) => {
  link.addEventListener('click', () => {
    // Elimina la clase activa del enlace anterior
    document.querySelector('nav a.active')?.classList.remove('active');

    // Añade la clase activa al enlace actual
    link.classList.add('active');

    // Mueve la barra animada a la nueva posición
    animation.style.left = `${index * linkWidth}px`;

    // Cambia el color de fondo de la animación según el botón
    animation.style.backgroundColor = link.dataset.color;
  });
});


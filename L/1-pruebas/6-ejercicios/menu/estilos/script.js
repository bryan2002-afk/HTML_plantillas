//Script para que la barra verde se mueva cuando mueves el mouse

const links = document.querySelectorAll('nav a');
const animation = document.querySelector('.animation');

// Ancho fijo por enlace
const linkWidth = 118;

// Posiciona el fondo en el enlace activo al cargar
window.addEventListener('DOMContentLoaded', () => {
    const activeLink = document.querySelector('nav a.active');
    const index = Array.from(links).indexOf(activeLink);
    animation.style.left = `${index * linkWidth}px`;
});

// Cambia la clase activa y mueve la animación al hacer clic
links.forEach((link, index) => {
    link.addEventListener('click', () => {
        document.querySelector('nav a.active')?.classList.remove('active');
        link.classList.add('active');
        animation.style.left = `${index * linkWidth}px`;
    });

    // También responde al hover si quieres mantener el efecto
    link.addEventListener('mouseover', () => {
        animation.style.left = `${index * linkWidth}px`;
    });

    link.addEventListener('mouseout', () => {
        const activeLink = document.querySelector('nav a.active');
        const activeIndex = Array.from(links).indexOf(activeLink);
        animation.style.left = `${activeIndex * linkWidth}px`;
    });
});

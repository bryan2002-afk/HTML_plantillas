// Fijar barra de navegación al hacer scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

// Menú animado al hacer clic
const links = document.querySelectorAll('nav.new a');
const animation = document.querySelector('nav.new .animation');
const linkWidth = 118; // Debe coincidir con CSS

// Obtener color real desde variable CSS
function getCSSVariableColor(variableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

// Posicionar barra en el enlace activo al cargar
window.addEventListener('DOMContentLoaded', () => {
  const activeLink = document.querySelector('nav.new a.active');
  const index = Array.from(links).indexOf(activeLink);
  animation.style.left = `${index * linkWidth}px`;

  // Interpretar variable CSS
  const colorVar = activeLink.dataset.color;
  animation.style.backgroundColor = colorVar.startsWith('var')
    ? getCSSVariableColor(colorVar.slice(4, -1))
    : colorVar;
});

// Mover barra animada y cambiar color al hacer clic
links.forEach((link, index) => {
  link.addEventListener('click', () => {
    document.querySelector('nav.new a.active')?.classList.remove('active');
    link.classList.add('active');

    animation.style.left = `${index * linkWidth}px`;

    const colorVar = link.dataset.color;
    animation.style.backgroundColor = colorVar.startsWith('var')
      ? getCSSVariableColor(colorVar.slice(4, -1))
      : colorVar;
  });
});


const profileBtn = document.querySelector('.profile-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

const arrowIcon = profileBtn.querySelector('.arrow');

profileBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
    arrowIcon.classList.toggle('rotate');
})

window.addEventListener('click', (e) => {
    const clickedOutside =
    !profileBtn.contains(e.target) &&
    !dropdownMenu.contains(e.target);

    if (clickedOutside) {
        dropdownMenu.classList.remove('active');
        arrowIcon.classList.remove('rotate');
    }
})

// Obtener elementos del DOM
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const contenido = document.querySelector('.contenido');

// Evento para alternar la clase 'collapsed'
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    contenido.classList.toggle('collapsed');
});

document.querySelectorAll('.submenu-toggle').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const parent = btn.parentElement;
    parent.classList.toggle('open');
  });
});

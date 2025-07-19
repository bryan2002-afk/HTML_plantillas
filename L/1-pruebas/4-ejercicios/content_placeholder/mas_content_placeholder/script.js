// Selecciona todas las tarjetas del DOM con la clase 'card'
const cards = document.querySelectorAll('.card');

// Simula un arreglo de objetos como si fueran datos recibidos desde un servidor
const data = [
  {
    imgHeader: 'img/imagen1.jpg', // Imagen principal de la tarjeta
    title: 'Título de la tarjeta 1', // Título de la tarjeta
    excerpt: 'Descripción de la primera tarjeta. Puedes personalizar este contenido.', // Descripción
    profileImg: 'img/perfil1.jpg', // Imagen de perfil del autor
    name: 'Juan Pérez', // Nombre del autor
    date: '13 de julio de 2025' // Fecha de publicación
  },
  {
    imgHeader: 'img/perfil3.jpg',
    title: 'Título de la tarjeta 2',
    excerpt: 'Texto de ejemplo para la segunda tarjeta. Es completamente editable.',
    profileImg: 'img/perfil2.jpg',
    name: 'Ana López',
    date: '12 de julio de 2025'
  },
  {
    imgHeader: 'img/imagen3.jpg',
    title: 'Título de la tarjeta 3',
    excerpt: 'Texto de ejemplo para la tercera tarjeta. Es completamente editable.',
    profileImg: 'img/e.jpg',
    name: 'El Pepe',
    date: '12 de julio de 2050'
  },
  {
    imgHeader: 'img/imagen4.jpg',
    title: 'Título de la tarjeta 4',
    excerpt: 'Texto de ejemplo para la cuarta tarjeta. Es completamente editable.',
    profileImg: 'img/perfil4.jpeg',
    name: 'Yo mero, el mero mero culero',
    date: '12 de julio de te vlv'
  }
  
];

// Simula una espera de 2.5 segundos (como si se estuvieran cargando los datos del servidor)
setTimeout(() => {
  // Itera sobre cada tarjeta y su índice
  cards.forEach((card, i) => {
    // Obtiene las partes de la tarjeta
    const header = card.querySelector('.card-header'); // Contenedor de la imagen principal
    const headerImg = header.querySelector('img'); // Imagen principal
    const title = card.querySelector('.card-title'); // Título
    const excerpt = card.querySelector('.card-excerpt'); // Descripción
    const profileImgWrapper = card.querySelector('.profile-img'); // Contenedor circular de perfil
    const profileImg = profileImgWrapper.querySelector('img'); // Imagen de perfil
    const name = card.querySelector('.author-info strong'); // Nombre del autor
    const date = card.querySelector('.author-info small'); // Fecha

    // Inserta los datos en la tarjeta correspondiente
    headerImg.src = data[i].imgHeader; // Asigna la imagen principal
    headerImg.hidden = false; // Asegura que la imagen esté visible
    title.textContent = data[i].title; // Asigna el título
    excerpt.textContent = data[i].excerpt; // Asigna el texto resumen
    profileImg.src = data[i].profileImg; // Asigna imagen de perfil
    profileImg.hidden = false; // Asegura que se muestre la imagen
    name.textContent = data[i].name; // Asigna nombre del autor
    date.textContent = data[i].date; // Asigna la fecha

    // Elimina las clases de animación skeleton (efecto shimmer)
    [header, title, name, date, profileImgWrapper].forEach(el => el.classList.remove('animated-bg'));

    // También elimina el efecto shimmer de los bloques de texto simulados
    card.querySelectorAll('.animated-bg-text').forEach(el => el.classList.remove('animated-bg-text'));
  });
}, 2500); // Fin del setTimeout, que ejecuta la función después de 2.5 segundos


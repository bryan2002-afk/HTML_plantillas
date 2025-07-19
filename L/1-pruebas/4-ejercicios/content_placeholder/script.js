// Selecciona el elemento con ID 'header', que probablemente contiene una imagen principal
const header = document.getElementById('header')

// Selecciona el título principal de la tarjeta
const title = document.getElementById('title')

// Selecciona el elemento que contiene el texto resumen o descripción
const excerpt = document.getElementById('excerpt')

// Selecciona el contenedor donde irá la imagen de perfil
const profileImg = document.getElementById('profile_img')

// Selecciona el nombre del autor
const name = document.getElementById('name')

// Selecciona la fecha de publicación o actualización
const date = document.getElementById('date')

// Selecciona todos los elementos que tienen la clase 'animated-bg'
// Se usan para el efecto de carga tipo shimmer
const animatedBgs = document.querySelectorAll('.animated-bg')

// Selecciona todos los elementos que tienen la clase 'animated-bg-text'
// También forman parte del efecto de carga pero simulan líneas de texto
const animatedBgText = document.querySelectorAll('.animated-bg-text')

// Espera 2.5 segundos (2500 milisegundos) antes de ejecutar la función getData()
// Esto simula un tiempo de espera como si estuviera cargando datos desde un servidor
setTimeout(getData, 2500)

// Función que reemplaza los placeholders con contenido real
function getData () {
    // Inserta una imagen dentro del contenedor 'header'
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'

    // Agrega un título de ejemplo
    title.innerHTML = 'Lorem Ipsum dolor sit amet'

    // Agrega un párrafo de ejemplo
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'

    // Agrega una imagen de perfil dentro del contenedor 'profileImg'
    // Esta línea está comentada (puedes usarla si lo deseas)
    // profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />'

    // Usa una imagen diferente como perfil (en este caso, el logo de GitHub)
    profileImg.innerHTML = '<img src="https://github.com/fluidicon.png" alt="" />'

    // Inserta el nombre del autor
    name.innerHTML = 'David Ferrer'

    // Inserta una fecha ficticia
    date.innerHTML = 'Feb 21, 2023'

    // Quita la clase 'animated-bg' de cada fondo animado para detener el efecto shimmer
    animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'))

    // Quita la clase 'animated-bg-text' de cada línea animada de texto
    animatedBgText.forEach((bg) => bg.classList.remove('animated-bg-text'))
}


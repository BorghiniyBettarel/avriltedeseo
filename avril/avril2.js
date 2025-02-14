let isImageMoved = false; // Variable para rastrear el estado de la imagen

// Array de imágenes
const images = [
    'img/foto1.jpg',
    'img/foto2.jpg',
    'img/foto4.jpg',
   
];

document.getElementById('clickableImage').addEventListener('click', function() {
    const image = document.getElementById('clickableImage');
    const newText = document.getElementById('newText');
    const mainText = document.getElementById('mainText');
    const subText = document.getElementById('subText');

    if (!isImageMoved) {
        // Mover la imagen hacia la izquierda
        image.style.transform = 'translateX(-10%)'; // Mueve la imagen hacia la izquierda

        // Cambiar el texto del encabezado y el párrafo
        mainText.textContent = "Hola soy yo de nuevo"; // Cambiar el h1
        subText.textContent = "bue re gede"; // Cambiar el p

        // Mostrar el nuevo texto
        newText.classList.remove('hidden');
        newText.style.opacity = 1; // Hacer visible el texto
    } else {
        // Volver la imagen a su posición original
        image.style.transform = 'translateX(0)'; // Regresar la imagen a su posición original

        // Cambiar el texto del encabezado y el párrafo a su estado original
        mainText.textContent = "Feliz Día mi vida ❤️"; // Cambiar el h1 a su texto original
        subText.textContent = "Espero te guste mi amor."; // Cambiar el p a su texto original

        // Ocultar el nuevo texto
        newText.classList.add('hidden');
        newText.style.opacity = 0; // Hacer invisible el texto
    }

    // Cambiar la imagen a una aleatoria
    const randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];

    // Alternar el estado de la imagen
    isImageMoved = !isImageMoved;
});
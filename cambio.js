document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos de la galería de imágenes
    const mainProductImage = document.getElementById('mainProductImage');
    const thumbnailsContainer = document.querySelector('.thumbnails');
    const thumbnailImages = document.querySelectorAll('.thumbnail-image'); // Todas las imágenes de las miniaturas

    if (mainProductImage && thumbnailsContainer && thumbnailImages.length > 0) {
        thumbnailsContainer.addEventListener('click', (e) => {
            const clickedThumbnail = e.target.closest('.thumbnail'); // Asegurarse de que el clic sea en la miniatura
            if (clickedThumbnail) {
                // Remover la clase activa de la miniatura anterior
                const currentActive = document.querySelector('.thumbnail.active-thumbnail');
                if (currentActive) {
                    currentActive.classList.remove('active-thumbnail');
                }

                // Añadir la clase activa a la miniatura clickeada
                clickedThumbnail.classList.add('active-thumbnail');

                // Obtener la URL de la imagen grande desde el atributo data-full-image
                const newImageSrc = clickedThumbnail.querySelector('.thumbnail-image').dataset.fullImage;
                
                // Actualizar la imagen principal
                mainProductImage.src = newImageSrc;
            }
        });
    }

    // ... Tu lógica existente para agregar al carrito si está en la página de detalle ...
    // (Asegúrate de que este nuevo código no sobrescriba la lógica del carrito)
});
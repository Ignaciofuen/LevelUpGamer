function cargarDetallesProducto(productId) {
    const producto = productos.find(p => p.id === productId);

    if (!producto) {
        console.error("Producto no encontrado.");
        return;
    }

    // Actualizar la información del producto
    document.getElementById('product-name').textContent = producto.nombre;
    document.getElementById('product-price').textContent = `$${producto.precio.toLocaleString('es-ES')}`;
    document.getElementById('product-description').textContent = producto.descripcion;

    // --- Lógica para cargar las imágenes ---

    // 1. Cargar la imagen principal
    const mainImageElement = document.getElementById('mainProductImage');
    mainImageElement.src = producto.imagenes[0]; // Carga la primera imagen del array
    mainImageElement.alt = producto.nombre;

    // 2. Cargar las miniaturas
    const thumbnailsContainer = document.getElementById('productThumbnails');
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = ''; // Limpia el contenedor de miniaturas
        producto.imagenes.forEach((imagenUrl, index) => {
            const thumbnailHTML = `
                <div class="thumbnail">
                    <img class="thumbnail-image" src="${imagenUrl}" alt="Miniatura ${index + 1}">
                </div>
            `;
            thumbnailsContainer.innerHTML += thumbnailHTML;
        });
    }


    
}

document.addEventListener('DOMContentLoaded', () => {
    cargarCarritoDeLocalStorage();
    actualizarCarritoVisual(); // Para mostrar el carrito en todas las páginas

    // --- Lógica para la página de detalles
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    // Si hay un ID en la URL, significa que estamos en la página de detalles
    if (productId) {
        cargarDetallesProducto(productId);
    }
});
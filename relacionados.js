function mostrarProductosRelacionados(productos) {
    const grid = document.querySelector('.related-products-grid');
    if (!grid) {
        // No estamos en una página que muestre productos relacionados, no hacemos nada.
        return;
    }
    
    // Limpia el contenedor antes de añadir nuevos productos
    grid.innerHTML = '';
    
    // Selecciona productos al azar (ejemplo: 4 productos)
    const productosAleatorios = productos.sort(() => 0.5 - Math.random()).slice(0, 4);
    
    productosAleatorios.forEach(producto => {
        const productCardHTML = `
            <div class="related-product-card">
                <img class="thumbnail-image" src="${producto.imagen}" alt="${producto.nombre}">
                <div class="product-info">
                    <p class="product-name">${producto.nombre}</p>
                    <p class="product-price">$${producto.precio.toLocaleString('es-ES')}</p>
                </div>
            </div>
        `;
        grid.innerHTML += productCardHTML;
    });
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // ... tu lógica existente del carrito ...

    mostrarProductosRelacionados(productos);
});
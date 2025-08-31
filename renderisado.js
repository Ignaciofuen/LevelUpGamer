
function mostrarProductosRelacionados(productos, productoActualId) {
    const grid = document.querySelector('.related-products-grid');
    if (!grid) {
        return;
    }

    const productosFiltrados = productos.filter(p => p.id !== productoActualId);
    const productosAleatorios = productosFiltrados.sort(() => 0.5 - Math.random()).slice(0, 4);

    grid.innerHTML = '';

    productosAleatorios.forEach(producto => {
        const productCardHTML = `
            <div class="related-product-card">
                <a href="detalle.html?id=${producto.id}" class="related-product-link">
                    <img class="thumbnail-image" src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="product-info">
                        <p class="product-name">${producto.nombre}</p>
                        <p class="product-price">$${producto.precio.toLocaleString('es-ES')}</p>
                    </div>
                </a>
            </div>
        `;
        grid.innerHTML += productCardHTML;
    });
}
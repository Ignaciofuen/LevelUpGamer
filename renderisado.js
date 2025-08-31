// En tu archivo carrito.js

function renderizarProductosEnElCarrito() {
    const productList = document.querySelector('.product-list');
    const totalAmount = document.querySelector('.total-amount');
    let total = 0;

    // Limpia la lista antes de renderizar para evitar duplicados
    productList.innerHTML = '';

    carrito.forEach(producto => {
        const itemHTML = `
            <div class="product-item" data-id="${producto.id}">
                <div class="product-image">
                    <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%; height: auto;">
                </div>
                <div class="product-details">
                    <p class="product-name">${producto.nombre}</p>
                    <p class="product-description">${producto.descripcion}</p>
                </div>
                <div class="product-price">$${(producto.precio * producto.cantidad).toLocaleString('es-ES')}</div>
                <div class="product-quantity-controls">
                    <button class="restar">-</button>
                    <span>${producto.cantidad}</span>
                    <button class="sumar">+</button>
                </div>
                <button class="eliminar">Eliminar</button>
            </div>
        `;
        productList.innerHTML += itemHTML;
        total += producto.precio * producto.cantidad;
    });

    totalAmount.textContent = `$${total.toLocaleString('es-ES')}`;
}

// Llama a esta función cuando la página del carrito se cargue
document.addEventListener('DOMContentLoaded', () => {
    // Asegúrate de cargar el carrito desde localStorage primero
    cargarCarritoDeLocalStorage(); 
    renderizarProductosEnElCarrito();
});
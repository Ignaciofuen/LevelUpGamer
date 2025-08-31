// app.js (o carrito.js)

// ------------------------------------
// 1. ARREGLO DE PRODUCTOS (Esto simula una base de datos)
// ------------------------------------
const productos = [
    {
        id: "1",
        nombre: "TECLADO REDRAGON K530W DRACONIC BLC",
        precio: 62350,
        imagen: "assets/img/[20260] TECLADO2 REDRAGON K530W DRACONIC BLC.png",
        descripcion: "Diseño minimalista, compacto y eficaz. Para quienes buscan una estética distinta."
    },
    // Añade más productos aquí si es necesario
];

// ------------------------------------
// 2. VARIABLES Y LÓGICA PRINCIPAL DEL CARRITO
// ------------------------------------
let carrito = [];

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarritoVisual();
    }
}

function agregarAlCarrito(productoNuevo) {
    const existe = carrito.find(item => item.id === productoNuevo.id);
    if (existe) {
        existe.cantidad += productoNuevo.cantidad;
    } else {
        carrito.push(productoNuevo);
    }
    actualizarCarritoVisual();
    guardarCarritoEnLocalStorage();
}

function actualizarCarritoVisual() {
    // --- Lógica para el mini-carrito (desplegable) ---
    const miniCarritoList = document.getElementById('carrito');
    const miniCarritoTotal = document.getElementById('total');
    const cantidadCarrito = document.getElementById('cantidadCarrito');

    if (miniCarritoList && miniCarritoTotal && cantidadCarrito) {
        miniCarritoList.innerHTML = '';
        let totalItems = 0;
        let totalCalculado = 0;
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.nombre} - $${(item.precio * item.cantidad).toLocaleString('es-ES')} x ${item.cantidad}
                <button class="btn btn-sm btn-danger ms-2" onclick="eliminarDelCarrito('${item.id}')">X</button>
            `;
            miniCarritoList.appendChild(li);
            totalItems += item.cantidad;
            totalCalculado += item.precio * item.cantidad;
        });
        cantidadCarrito.textContent = totalItems;
        miniCarritoTotal.textContent = totalCalculado.toLocaleString('es-ES');
    }

    // --- Lógica para la página principal del carrito ---
    const productList = document.querySelector('.product-list');
    const totalAmount = document.querySelector('.total-amount');

    if (productList && totalAmount) {
        productList.innerHTML = '';
        let totalCalculado = 0;
        carrito.forEach(item => {
            const itemHTML = `
                <div class="product-item" data-id="${item.id}">
                    <div class="product-image">
                        <img src="${item.imagen}" alt="${item.nombre}" style="width: 100%; height: auto;">
                    </div>
                    <div class="product-details">
                        <p class="product-name">${item.nombre}</p>
                        <p class="product-description">${item.descripcion}</p>
                    </div>
                    <div class="product-price">$${(item.precio * item.cantidad).toLocaleString('es-ES')}</div>
                    <div class="product-quantity-controls">
                        <button class="restar">-</button>
                        <span>${item.cantidad}</span>
                        <button class="sumar">+</button>
                    </div>
                    <button class="eliminar">Eliminar</button>
                </div>
            `;
            productList.innerHTML += itemHTML;
            totalCalculado += item.precio * item.cantidad;
        });
        totalAmount.textContent = `$${totalCalculado.toLocaleString('es-ES')}`;
    }
}

// ------------------------------------
// 3. FUNCIONES PARA LOS BOTONES
// ------------------------------------
function sumarCantidad(id) {
    const producto = carrito.find(item => item.id === id);
    if (producto) {
        producto.cantidad++;
        actualizarCarritoVisual();
        guardarCarritoEnLocalStorage();
    }
}

function restarCantidad(id) {
    const producto = carrito.find(item => item.id === id);
    if (producto && producto.cantidad > 1) {
        producto.cantidad--;
        actualizarCarritoVisual();
        guardarCarritoEnLocalStorage();
    } else if (producto && producto.cantidad === 1) {
        eliminarDelCarrito(id);
    }
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarritoVisual();
    guardarCarritoEnLocalStorage();
}

// ------------------------------------
// 4. MANEJO DE EVENTOS Y LÓGICA CONDICIONAL
// ------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Lógica del mini-carrito (desplegable)
    const carritoBtn = document.getElementById('carritoBtn');
    const dropdownCarrito = document.getElementById('dropdownCarrito');
    if (carritoBtn && dropdownCarrito) {
        carritoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownCarrito.style.display = dropdownCarrito.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Lógica para la página de detalle del producto
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const productNameElement = document.querySelector('.product-name');
            const productPriceElement = document.querySelector('.product-price');
            const quantityInput = document.getElementById('quantity');
            
            if (!productNameElement || !productPriceElement || !quantityInput) {
                console.error("Faltan elementos HTML para leer los datos del producto.");
                return;
            }

            const nombre = productNameElement.textContent.trim();
            const precioString = productPriceElement.textContent.replace('$', '').replace('.', '').replace(',', '').trim();
            const precio = parseFloat(precioString);
            const cantidad = parseInt(quantityInput.value);

            const productoEncontrado = productos.find(p => p.nombre === nombre);

            if (productoEncontrado) {
                 const productoParaCarrito = {
                    ...productoEncontrado,
                    cantidad: cantidad
                 };
                agregarAlCarrito(productoParaCarrito);
            } else {
                console.error('El producto con el nombre "' + nombre + '" no se encuentra en el arreglo de productos. Verifique que el nombre coincida exactamente.');
            }
        });
    }

    // Lógica para la página del carrito (maneja los botones +, -, eliminar)
    const productList = document.querySelector('.product-list');
    if (productList) {
        productList.addEventListener('click', (e) => {
            const boton = e.target;
            const itemElement = boton.closest('.product-item');
            if (itemElement) {
                const id = itemElement.dataset.id;
                if (boton.classList.contains('restar')) {
                    restarCantidad(id);
                } else if (boton.classList.contains('sumar')) {
                    sumarCantidad(id);
                } else if (boton.classList.contains('eliminar')) {
                    eliminarDelCarrito(id);
                }
            }
        });
    }
    // Lógica inicial al cargar la página
    cargarCarritoDeLocalStorage();
});
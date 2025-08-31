// carrito.js

let carrito = []; 

// Referencias a los elementos del carrito desplegable
const carritoBtn = document.getElementById('carritoBtn');
const dropdownCarrito = document.getElementById('dropdownCarrito');
const listaCarrito = document.getElementById('carrito');
const totalElemento = document.getElementById('total');
const cantidadCarrito = document.getElementById('cantidadCarrito');

// Referencias a los elementos de la página de detalle
const addToCartBtn = document.getElementById('addToCartBtn');
const productNameElement = document.querySelector('.product-name');
const productPriceElement = document.querySelector('.product-price');
const quantityInput = document.getElementById('quantity');

// Lógica para mostrar/ocultar el carrito desplegable
carritoBtn.addEventListener('click', () => {
    dropdownCarrito.style.display = dropdownCarrito.style.display === 'block' ? 'none' : 'block';
});

// Evento para el botón "Añadir al carrito" de la página de detalle
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
        // Obtenemos los datos del producto de la página
        const nombre = productNameElement.textContent.trim();
        // Limpiamos el precio para convertirlo a número (quitamos el '$' y los espacios)
        const precioString = productPriceElement.textContent.replace('$', '').trim();
        const precio = parseFloat(precioString);
        const cantidad = parseInt(quantityInput.value);

        // Creamos un objeto de producto
        const producto = {
            // Usamos el nombre como ID para simplificar
            id: nombre, 
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };
        
        agregarAlCarrito(producto);
    });
}

// Función principal para agregar un producto al carrito
function agregarAlCarrito(productoNuevo) {
    const existe = carrito.find(item => item.id === productoNuevo.id);

    if (existe) {
        // Si el producto ya está en el carrito, sumamos la cantidad
        existe.cantidad += productoNuevo.cantidad;
    } else {
        // Si es un producto nuevo, lo agregamos al array
        carrito.push(productoNuevo);
    }
    
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let totalCalculado = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${(item.precio * item.cantidad).toLocaleString('es-ES')} x ${item.cantidad}`;
        
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.className = 'btn btn-sm btn-danger ms-2';
        botonEliminar.onclick = () => eliminarDelCarrito(item.id);
        
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);

        totalCalculado += item.precio * item.cantidad;
    });

    totalElemento.textContent = totalCalculado.toLocaleString('es-ES');
    cantidadCarrito.textContent = carrito.length;
}

// Función para eliminar un producto del carrito por ID
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}
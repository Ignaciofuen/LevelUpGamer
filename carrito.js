// carrito.js

let carrito = [];
let total = 0;

const carritoBtn = document.getElementById('carritoBtn');
const dropdownCarrito = document.getElementById('dropdownCarrito');

carritoBtn.addEventListener('click', () => {
    dropdownCarrito.style.display = dropdownCarrito.style.display === 'block' ? 'none' : 'block';
});

function agregarAlCarrito(nombre, precio) {
    carrito.push({nombre, precio});
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('carrito');
    const totalElemento = document.getElementById('total');
    const cantidadCarrito = document.getElementById('cantidadCarrito');

    lista.innerHTML = '';

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.className = 'btn btn-sm btn-danger ms-2';
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        li.appendChild(botonEliminar);

        lista.appendChild(li);
    });

    total = carrito.reduce((sum, item) => sum + item.precio, 0);
    totalElemento.textContent = total;
    cantidadCarrito.textContent = carrito.length;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

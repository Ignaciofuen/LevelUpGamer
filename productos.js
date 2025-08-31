// =================================================================
// ARCHIVO: productos.js
// =================================================================

// 1. ARREGLO DE PRODUCTOS
const productos = [
    {
        id: "1",
        nombre: "PC GAMER RDY Y70 TI B04",
        precio: 2499000,
        imagenes: ["assets/img/pc2.webp"],
        descripcion: "Processor:Intel® Core™ i9-14900KF Motherboard:MSI PRO Z790-A MAX WiFi",
        categoria: "PC Gamer"
    },
    {
        id: "2",
        nombre: "PC GAMER RDY Y70 R06",
        precio: 1499000,
        imagenes: ["assets/img/pc1.avif"],
        descripcion: "Processor:AMD Ryzen™ 9 9950X Motherboard:ASUS PRIME X870-P WIFI",
        categoria: "PC Gamer"
    },
    {
        id: "3",
        nombre: "PC GAMER RDY Y70 Liquid Hybrid Max",
        precio: 2000000,
        imagenes: ["assets/img/pc3.webp"],
        descripcion: "Processor:Intel® Core™ Ultra 9 285K Mother-board:ASUS ROG STRIX Z890-E WIFI",
        categoria: "PC Gamer"
    },
    {
        id: "4",
        nombre: "PC GAMER RDY Y70 B05",
        precio: 1799000,
        imagenes: ["assets/img/pc4.webp"],
        descripcion: "Processor:Intel® Core™ Ultra 9 285K Motherboard:Asus Z890 Max Gaming WIFI 7",
        categoria: "PC Gamer"
    },
    {
        id: "5",
        nombre: "TECLADO GAMER REDRAGON UCAL K673",
        precio: 62350,
        imagenes: ["assets/img/[20837] TECLADO1 GAMER REDRAGON UCAL K673 (Negro).webp"],
        descripcion: "Keycaps PBT Premium",
        categoria: "Teclado"
    },
    {
        id: "6",
        nombre: "TECLADO REDRAGON K530W DRACONIC BLC",
        precio: 70350,
        imagenes: [
            "assets/img/[20260] TECLADO2 REDRAGON K530W DRACONIC BLC.png",
            "assets/img/tecladob1.webp",
            "assets/img/tecladob2.webp"
        ],
        descripcion: "Keycaps PBT Premium",
        categoria: "Teclado"
    },
    {
        id: "7",
        nombre: "TECLADO GAMER REDRAGON SHIVA K512 RGB",
        precio: 100000,
        imagenes: ["assets/img/[20005] TECLADO GAMER REDRAGON SHIVA K512 RGB (Negro).png"],
        descripcion: "Keycaps PBT Premium",
        categoria: "Teclado"
    },
    {
        id: "8",
        nombre: "GAMING MOUSE Logitech G305 Lightspeed",
        precio: 68000,
        imagenes: ["assets/img/mause1LOGITECH.webp"],
        descripcion: "Brand:Logitech Sensor:HERO",
        categoria: "Mouse"
    },
    {
        id: "9",
        nombre: "GAMING MOUSE REDRAGON K1NG 1K M724",
        precio: 65350,
        imagenes: ["assets/img/[20839] MOUSE2 GAMER REDRAGON K1NG 1K M724 (Negro).webp"],
        descripcion: "Switches: Huano Sensor:Pixart 3327",
        categoria: "Mouse"
    },
    {
        id: "10",
        nombre: "GAMING MOUSE LOGITECH G203 LIGHTSYNC",
        precio: 98000,
        imagenes: ["assets/img/[20474] MOUSE3 GAMER LOGITECH G203 LIGHTSYNC (Negro).webp"],
        descripcion: "Brand:Logitech Sensor:HERO",
        categoria: "Mouse"
    },
    {
        id: "11",
        nombre: "SILLA GAMER – COUGAR TERMINATOR",
        precio: 265000,
        imagenes: ["assets/img/SILLA GAMER 5COUGAR TERMINATOR.png"],
        descripcion: "Polipiel Hyper-Dura Respaldo flexible de PAFRP.",
        categoria: "Silla"
    },
    {
        id: "12",
        nombre: "SILLA 2GAMER CORSAIR TC200",
        precio: 160000,
        imagenes: ["assets/img/[20069] SILLA 2GAMER CORSAIR TC200 (Negro, Cuero sintético).webp"],
        descripcion: "Tejido suave y forjada en acero",
        categoria: "Silla"
    },
    {
        id: "13",
        nombre: "SILLA 1GAMER COUGAR TITAN PRO",
        precio: 240000,
        imagenes: ["assets/img/[20060] SILLA 1GAMER COUGAR TITAN PRO.png"],
        descripcion: "Polipiel Hyper-Dura Respaldo flexible de PAFRP",
        categoria: "Silla"
    },
    {
        id: "14",
        nombre: "CONSOLA NINTENDO SWITCH 2",
        precio: 599000,
        imagenes: ["assets/img/switch22.png"],
        descripcion: "capacidad: 256 GB.Incluye 2 controles.Memoria RAM de 12GB.",
        categoria: "Consola"
    },
    {
        id: "15",
        nombre: "CONSOLA PS5",
        precio: 699000,
        imagenes: ["assets/img/ps5.png"],
        descripcion: "capacidad: 500 GB.Incluye 1 control.lector de discos Blu-ray Ultra HD 4K.",
        categoria: "Consola"
    },
    {
        id: "16",
        nombre: "CONTROL GAME PAD XBOX",
        precio: 55000,
        imagenes: ["assets/img/[20790] CONTROL GAME PAD XBOX INALAMBRICO SKY CIPHER .png"],
        descripcion: "inalambrico sky cipher",
        categoria: "Control"
    },
    {
        id: "17",
        nombre: "DUALSENSE SONY PS5",
        precio: 65000,
        imagenes: ["assets/img/[20792] CONTROL GAME PAD DUALSENSE SONY PS5 INALAMBRICO (Negro).png"],
        descripcion: "inalambrico (Negro)",
        categoria: "Control"
    },
    {
        id: "18",
        nombre: "HYPERX CLOUD ALPHA",
        precio: 98000,
        imagenes: ["assets/img/HyperX_Cloud_Alpha_BlackRed_1_main_M2016147.png"],
        descripcion: "Marco de aluminio duradero.Compatibilidad multiplataforma",
        categoria: "Audifono"
    },
    {
        id: "19",
        nombre: "MOUSE PADC LOGITECH",
        precio: 40000,
        imagenes: ["assets/img/mausepad.webp"],
        descripcion: "LED RGB",
        categoria: "Mousepad"
    },
    {
        id: "20",
        nombre: "JUEGO DE MESA CATAN",
        precio: 70000,
        imagenes: ["assets/img/Made with insMind-catan.png"],
        descripcion: "Marca: Devir.Edicion:Base.Idioma:Español",
        categoria: "Juego de Mesa"
    },
    {
        id: "21",
        nombre: "JUEGO DE MESA CARCASSONNE",
        precio: 70000,
        imagenes: ["assets/img/Carcassonne.png"],
        descripcion: "Marca: Devir.Edicion:Base.Idioma:Español",
        categoria: "Juego de Mesa"
    },
    {
        id: "22",
        nombre: "POLERA LEVEL-UP-GAMER",
        precio: 20000,
        imagenes: ["assets/img/polera.png"],
        descripcion: "algodon.serigrafia",
        categoria: "Ropa"
    }
];

// 2. LÓGICA DEL CARRITO
let carrito = [];

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
    actualizarCarritoVisual();
}

function agregarAlCarrito(productoNuevo) {
    const existe = carrito.find(item => item.id === productoNuevo.id);
    if (existe) {
        existe.cantidad += productoNuevo.cantidad;
    } else {
        carrito.push({ ...productoNuevo });
    }
    actualizarCarritoVisual();
    guardarCarritoEnLocalStorage();
}

function actualizarCarritoVisual() {
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

    const productList = document.querySelector('.product-list');
    const totalAmount = document.querySelector('.total-amount');

    if (productList && totalAmount) {
        productList.innerHTML = '';
        let totalCalculado = 0;
        carrito.forEach(item => {
            const imagenUrl = item.imagenes && item.imagenes.length > 0 ? item.imagenes[0] : '';
            
            const itemHTML = `
                <div class="product-item" data-id="${item.id}">
                    <div class="product-image">
                        <img src="${imagenUrl}" alt="${item.nombre}" style="width: 100%; height: auto;">
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

// 3. LÓGICA DE LA PÁGINA DE DETALLES
function cargarDetallesProducto(productId) {
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    const mainProductImage = document.getElementById('mainProductImage');

    if (!productName || !productPrice || !productDescription || !mainProductImage) {
        console.error("Faltan elementos HTML para leer los datos del producto.");
        return;
    }

    const producto = productos.find(p => p.id === productId);

    if (!producto) {
        console.error("Producto no encontrado.");
        return;
    }

    productName.textContent = producto.nombre;
    productPrice.textContent = `$${producto.precio.toLocaleString('es-ES')}`;
    productDescription.textContent = producto.descripcion;
    mainProductImage.src = producto.imagenes[0];
    mainProductImage.alt = producto.nombre;

    const thumbnailsContainer = document.getElementById('productThumbnails');
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        producto.imagenes.forEach((imagenUrl, index) => {
            const thumbnailHTML = `
                <div class="thumbnail">
                    <img class="thumbnail-image" src="${imagenUrl}" data-full-image="${imagenUrl}" alt="Miniatura ${index + 1}">
                </div>
            `;
            thumbnailsContainer.innerHTML += thumbnailHTML;
        });

        const thumbnailImages = document.querySelectorAll('.thumbnail-image');
        thumbnailImages.forEach(thumb => {
            thumb.addEventListener('click', (event) => {
                const fullImageUrl = event.target.dataset.fullImage;
                document.getElementById('mainProductImage').src = fullImageUrl;
            });
        });
    }

    const productosRelacionados = productos.filter(p => p.categoria === producto.categoria && p.id !== producto.id).slice(0, 4);
    const relatedProductsGrid = document.querySelector('.related-products-grid');

    if (relatedProductsGrid) {
        relatedProductsGrid.innerHTML = '';
        productosRelacionados.forEach(prodRel => {
            const productCard = document.createElement('div');
            productCard.classList.add('related-product-card');
            productCard.innerHTML = `
                <a href="detalle.html?id=${prodRel.id}">
                    <img src="${prodRel.imagenes[0]}" alt="${prodRel.nombre}">
                    <p class="related-product-name">${prodRel.nombre}</p>
                    <p class="related-product-price">$${prodRel.precio.toLocaleString('es-ES')}</p>
                </a>
            `;
            relatedProductsGrid.appendChild(productCard);
        });
    }
}

// 4. MANEJO DE EVENTOS (Unificado)
document.addEventListener('DOMContentLoaded', () => {
    cargarCarritoDeLocalStorage();

    const carritoBtn = document.getElementById('carritoBtn');
    const dropdownCarrito = document.getElementById('dropdownCarrito');
    let mouseOutTimer;

    if (carritoBtn && dropdownCarrito) {
        carritoBtn.addEventListener('mouseover', () => {
            clearTimeout(mouseOutTimer);
            if (carrito.length > 0) {
                dropdownCarrito.classList.add('mostrar-carrito');
            }
        });
        carritoBtn.addEventListener('mouseout', () => {
            mouseOutTimer = setTimeout(() => {
                dropdownCarrito.classList.remove('mostrar-carrito');
            }, 500);
        });
        dropdownCarrito.addEventListener('mouseover', () => {
            clearTimeout(mouseOutTimer);
        });
        dropdownCarrito.addEventListener('mouseout', () => {
            mouseOutTimer = setTimeout(() => {
                dropdownCarrito.classList.remove('mostrar-carrito');
            }, 500);
        });
    }

    const addToCartBtn = document.getElementById('addToCartBtn');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const params = new URLSearchParams(window.location.search);
            const productId = params.get('id');

            if (!productId) {
                 console.error("Error: El ID del producto no se encontró en la URL.");
                 return;
            }

            const productoEncontrado = productos.find(p => p.id === productId);
            const quantityInput = document.getElementById('quantity');
            
            if (productoEncontrado && quantityInput) {
                const cantidad = parseInt(quantityInput.value);
                if (!isNaN(cantidad) && cantidad > 0) {
                    const productoParaCarrito = { ...productoEncontrado, cantidad: cantidad };
                    agregarAlCarrito(productoParaCarrito);
                } else {
                    console.error("El valor de la cantidad no es un número válido.");
                }
            } else {
                console.error("No se pudo agregar al carrito. Producto no encontrado o falta el campo de cantidad.");
            }
        });
    }

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

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    if (productId) {
        cargarDetallesProducto(productId);
    }
});
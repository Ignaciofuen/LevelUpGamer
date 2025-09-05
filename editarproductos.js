document.addEventListener('DOMContentLoaded', () => {
    const formularioProducto = document.getElementById('formularioProducto');
    const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Función para mostrar mensajes de confirmación
    function showMessage(message, type = 'success') {
        if (mensajeConfirmacion) {
            mensajeConfirmacion.textContent = message;
            mensajeConfirmacion.classList.remove('alert-success', 'alert-danger', 'hidden');
            mensajeConfirmacion.classList.add(`alert-${type}`);
            setTimeout(() => {
                mensajeConfirmacion.classList.add('hidden');
            }, 3000);
        }
    }

    // Verificar si el usuario está autenticado
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
        window.location.href = 'inicio-sesion.html';
        return;
    }

    // Lógica para cerrar sesión
    const botonCerrarSesion = document.getElementById('botonCerrarSesion');
    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener('click', () => {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userName');
            window.location.href = 'inicio-sesion.html';
        });
    }

    // Función para cargar los datos del producto en el formulario
    function cargarProducto(id) {
        const productos = JSON.parse(localStorage.getItem('productos')) || [];
        const producto = productos.find(p => p.id === parseInt(id));

        if (producto) {
            document.getElementById('codigoProducto').value = producto.codigo;
            document.getElementById('nombreProducto').value = producto.nombre;
            document.getElementById('descripcionProducto').value = producto.descripcion;
            document.getElementById('precioProducto').value = producto.precio;
            document.getElementById('stockProducto').value = producto.stock;
            document.getElementById('stockCritico').value = producto.stockCritico || '';
            document.getElementById('categoriaProducto').value = producto.categoria;
            document.getElementById('imagenProducto').value = producto.imagenes[0] || '';
        } else {
            showMessage('Producto no encontrado.', 'danger');
        }
    }

    // Manejar el envío del formulario
    if (formularioProducto) {
        formularioProducto.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Obtener los datos del formulario
            const productos = JSON.parse(localStorage.getItem('productos')) || [];
            const productoIndex = productos.findIndex(p => p.id === parseInt(productId));

            if (productoIndex !== -1) {
                const productoActualizado = {
                    ...productos[productoIndex],
                    codigo: document.getElementById('codigoProducto').value,
                    nombre: document.getElementById('nombreProducto').value,
                    descripcion: document.getElementById('descripcionProducto').value,
                    precio: parseFloat(document.getElementById('precioProducto').value),
                    stock: parseInt(document.getElementById('stockProducto').value, 10),
                    stockCritico: parseInt(document.getElementById('stockCritico').value, 10),
                    categoria: document.getElementById('categoriaProducto').value,
                    imagenes: [document.getElementById('imagenProducto').value]
                };

                productos[productoIndex] = productoActualizado;
                localStorage.setItem('productos', JSON.stringify(productos));
                showMessage('Producto actualizado con éxito.', 'success');
                setTimeout(() => {
                    window.location.href = 'GestionProductos.html';
                }, 1000);
            } else {
                showMessage('Error al actualizar el producto.', 'danger');
            }
        });
    }

    if (productId) {
        cargarProducto(productId);
    } else {
        showMessage('ID de producto no proporcionado en la URL.', 'danger');
    }
});
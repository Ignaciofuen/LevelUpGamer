document.addEventListener('DOMContentLoaded', () => {
    const formularioProducto = document.getElementById('formularioProducto');
    const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (!isAuthenticated) {
        window.location.href = 'index.html'; 
    }

    const userName = localStorage.getItem('userName');
    if (document.getElementById('saludoUsuario')) {
        document.getElementById('saludoUsuario').textContent = `Hola, ${userName}!`;
    }
    
    const botonCerrarSesion = document.getElementById('botonCerrarSesion');
    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener('click', () => {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userName');
            window.location.href = 'index.html';
        });
    }

    // Lógica para el formulario de agregar/editar producto
    if (formularioProducto) {
        formularioProducto.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtener datos del formulario
            const inputCodigo = document.getElementById('codigoProducto');
            const inputNombre = document.getElementById('nombreProducto');
            const inputPrecio = document.getElementById('precioProducto');
            const inputStock = document.getElementById('stockProducto');
            const inputDescripcion = document.getElementById('descripcionProducto');
            const inputCategoria = document.getElementById('categoriaProducto');
            const inputImagenes = document.getElementById('imagenProducto');
            
            if (!inputCodigo || !inputNombre || !inputPrecio || !inputStock || !inputDescripcion || !inputCategoria || !inputImagenes) {
                console.error("Error: Uno o más elementos del formulario no fueron encontrados en el HTML.");
                if (mensajeConfirmacion) {
                    mensajeConfirmacion.textContent = 'Error: Faltan elementos en el formulario.';
                    mensajeConfirmacion.classList.remove('hidden');
                    mensajeConfirmacion.style.color = 'red';
                }
                return;
            }

            // Obtener datos del formulario
            const productoData = {
                id: Date.now().toString(), // Generar un ID único basado en el timestamp
                codigo: inputCodigo.value,
                nombre: inputNombre.value,
                precio: parseFloat(inputPrecio.value),
                stock: parseInt(inputStock.value),
                descripcion: inputDescripcion.value,
                categoria: inputCategoria.value,
                imagenes: inputImagenes.value.split(',').map(url => url.trim())
            };

            try {
                // Obtener productos existentes de localStorage
                const productos = JSON.parse(localStorage.getItem('productos')) || [];

                // Agregar el nuevo producto
                productos.push(productoData);

                // Guardar los productos actualizados en localStorage
                localStorage.setItem('productos', JSON.stringify(productos));

                // Mostrar mensaje de éxito
                if (mensajeConfirmacion) {
                    mensajeConfirmacion.textContent = 'Producto guardado con éxito.';
                    mensajeConfirmacion.classList.remove('hidden');
                    mensajeConfirmacion.style.color = 'green';
                }
                
                // Limpiar campos del formulario después de guardar
                formularioProducto.reset();

            } catch (error) {
                if (mensajeConfirmacion) {
                    mensajeConfirmacion.textContent = `Error al guardar el producto: ${error.message}`;
                    mensajeConfirmacion.classList.remove('hidden');
                    mensajeConfirmacion.style.color = 'red';
                }
                console.error('Error al guardar el producto:', error);
            }
        });
    }
});
let productosEnMemoria = [];
        let productoAEliminarId = null;
        let modalEditar = null;

       
        function obtenerProductos() {
            const productosJSON = localStorage.getItem('productos');
            if (productosJSON === null) {
                const productosIniciales = [
                    { id: 1, codigo: "PRO001", nombre: "PC GAMER RDY Y70 TI B04", precio: 2499000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=PC+Gamer+1"], descripcion: "Processor:Intel® Core™ i9-14900KF Motherboard:MSI PRO Z790-A MAX WiFi", categoria: "PC Gamer", stock: 200 },
                    { id: 2, codigo: "PRO002", nombre: "PC GAMER RDY Y70 R06", precio: 1499000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=PC+Gamer+2"], descripcion: "Processor:AMD Ryzen™ 9 9950X Motherboard:ASUS PRIME X870-P WIFI", categoria: "PC Gamer", stock: 200 },
                    { id: 3, codigo: "PRO003", nombre: "PC GAMER RDY Y70 Liquid Hybrid Max", precio: 2000000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=PC+Gamer+3"], descripcion: "Processor:Intel® Core™ Ultra 9 285K Mother-board:ASUS ROG STRIX Z890-E WIFI", categoria: "PC Gamer", stock: 200 },
                    { id: 4, codigo: "PRO004", nombre: "PC GAMER RDY Y70 B05", precio: 1799000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=PC+Gamer+4"], descripcion: "Processor:Intel® Core™ Ultra 9 285K Motherboard:Asus Z890 Max Gaming WIFI 7", categoria: "PC Gamer", stock: 200 },
                    { id: 5, codigo: "PRO005", nombre: "TECLADO GAMER REDRAGON UCAL K673", precio: 62350, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Teclado+1"], descripcion: "Keycaps PBT Premium", categoria: "Teclado", stock: 200 },
                    { id: 6, codigo: "PRO006", nombre: "TECLADO REDRAGON K530W DRACONIC BLC", precio: 70350, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Teclado+2"], descripcion: "Keycaps PBT Premium", categoria: "Teclado", stock: 200 },
                    { id: 7, codigo: "PRO007", nombre: "TECLADO GAMER REDRAGON SHIVA K512 RGB", precio: 100000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Teclado+3"], descripcion: "Keycaps PBT Premium", categoria: "Teclado", stock: 200 },
                    { id: 8, codigo: "PRO008", nombre: "GAMING MOUSE Logitech G305 Lightspeed", precio: 68000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Mouse+1"], descripcion: "Brand:Logitech Sensor:HERO", categoria: "Mouse", stock: 200 },
                    { id: 9, codigo: "PRO009", nombre: "GAMING MOUSE REDRAGON K1NG 1K M724", precio: 65350, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Mouse+2"], descripcion: "Switches: Huano Sensor:Pixart 3327", categoria: "Mouse", stock: 200 },
                    { id: 10, codigo: "PRO010", nombre: "GAMING MOUSE LOGITECH G203 LIGHTSYNC", precio: 98000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Mouse+3"], descripcion: "Brand:Logitech Sensor:HERO", categoria: "Mouse", stock: 200 },
                    { id: 11, codigo: "PRO011", nombre: "SILLA GAMER – COUGAR TERMINATOR", precio: 265000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Silla+1"], descripcion: "Polipiel Hyper-Dura Respaldo flexible de PAFRP.", categoria: "Silla", stock: 200 },
                    { id: 12, codigo: "PRO012", nombre: "SILLA 2GAMER CORSAIR TC200", precio: 160000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Silla+2"], descripcion: "Tejido suave y forjada en acero", categoria: "Silla", stock: 200 },
                    { id: 13, codigo: "PRO013", nombre: "SILLA 1GAMER COUGAR TITAN PRO", precio: 240000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Silla+3"], descripcion: "Polipiel Hyper-Dura Respaldo flexible de PAFRP", categoria: "Silla", stock: 200 },
                    { id: 14, codigo: "PRO014", nombre: "CONSOLA NINTENDO SWITCH 2", precio: 599000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Consola+1"], descripcion: "capacidad: 256 GB.Incluye 2 controles.Memoria RAM de 12GB.", categoria: "Consola", stock: 200 },
                    { id: 15, codigo: "PRO015", nombre: "CONSOLA PS5", precio: 699000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Consola+2"], descripcion: "capacidad: 500 GB.Incluye 1 control.lector de discos Blu-ray Ultra HD 4K.", categoria: "Consola", stock: 200 },
                    { id: 16, codigo: "PRO016", nombre: "CONTROL GAME PAD XBOX", precio: 55000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Control+1"], descripcion: "inalambrico sky cipher", categoria: "Control", stock: 200 },
                    { id: 17, codigo: "PRO017", nombre: "DUALSENSE SONY PS5", precio: 65000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Control+2"], descripcion: "inalambrico (Negro)", categoria: "Control", stock: 200 },
                    { id: 18, codigo: "PRO018", nombre: "HYPERX CLOUD ALPHA", precio: 98000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Audifono+1"], descripcion: "Marco de aluminio duradero.Compatibilidad multiplataforma", categoria: "Audifono", stock: 200 },
                    { id: 19, codigo: "PRO019", nombre: "MOUSE PADC LOGITECH", precio: 40000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Mousepad+1"], descripcion: "LED RGB", categoria: "Mousepad", stock: 200 },
                    { id: 20, codigo: "PRO020", nombre: "JUEGO DE MESA CATAN", precio: 70000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Juego+Mesa+1"], descripcion: "Marca: Devir.Edicion:Base.Idioma:Español", categoria: "Juego de Mesa", stock: 200 },
                    { id: 21, codigo: "PRO021", nombre: "JUEGO DE MESA CARCASSONNE", precio: 70000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Juego+Mesa+2"], descripcion: "Marca: Devir.Edicion:Base.Idioma:Español", categoria: "Juego de Mesa", stock: 200 },
                    { id: 22, codigo: "PRO022", nombre: "POLERA LEVEL-UP-GAMER", precio: 20000, imagenes: ["https://placehold.co/150x150/34D399/FFFFFF?text=Polera+1"], descripcion: "algodon.serigrafia", categoria: "Ropa", stock: 200 }
                ];
                guardarProductos(productosIniciales);
                return productosIniciales;
            }
            return JSON.parse(productosJSON);
        }

        // Función para guardar productos en localStorage.
        function guardarProductos(productos) {
            localStorage.setItem('productos', JSON.stringify(productos));
        }

        // Función para renderizar la tabla de productos.
        function renderizarTabla() {
            const cuerpoTablaProductos = document.getElementById('cuerpoTablaProductos');
            if (!cuerpoTablaProductos) return;

            cuerpoTablaProductos.innerHTML = '';
            if (productosEnMemoria.length === 0) {
                cuerpoTablaProductos.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-gray-500">No hay productos registrados.</td></tr>`;
            } else {
                productosEnMemoria.forEach(producto => {
                    const imagenSrc = producto.imagenes && producto.imagenes.length > 0 ? producto.imagenes[0] : 'https://placehold.co/50x50/e5e7eb/6b7280?text=Sin+Imagen';
                    const fila = `
                        <tr class="hover:bg-gray-50 transition-colors duration-150">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${producto.id}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${producto.codigo}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${producto.nombre}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${producto.categoria}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${producto.stock}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$${parseFloat(producto.precio).toLocaleString('es-CL')}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm">
                                <img src="${imagenSrc}" alt="${producto.nombre}" class="w-12 h-12 rounded-full object-cover shadow-sm">
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button class="btn-editar bg-blue-500 text-white font-semibold py-1 px-3 rounded-lg hover:bg-blue-600 transition-colors duration-200" data-id="${producto.id}" data-bs-toggle="modal" data-bs-target="#modalEditar">Editar</button>
                                <button class="btn-eliminar bg-red-500 text-white font-semibold py-1 px-3 rounded-lg hover:bg-red-600 transition-colors duration-200 ml-2" data-id="${producto.id}" data-bs-toggle="modal" data-bs-target="#modalEliminar">Eliminar</button>
                            </td>
                        </tr>
                    `;
                    cuerpoTablaProductos.innerHTML += fila;
                });
            }

            // Añadimos los event listeners para los botones de eliminar y editar
            document.querySelectorAll('.btn-eliminar').forEach(button => {
                button.addEventListener('click', (e) => {
                    productoAEliminarId = e.target.getAttribute('data-id');
                });
            });

            document.querySelectorAll('.btn-editar').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productoId = parseInt(e.target.getAttribute('data-id'));
                    const productoAEditar = productosEnMemoria.find(p => p.id === productoId);
                    if (productoAEditar) {
                        // Rellenar el formulario del modal de edición
                        document.getElementById('edit-id-producto').value = productoAEditar.id;
                        document.getElementById('edit-codigo').value = productoAEditar.codigo;
                        document.getElementById('edit-nombre').value = productoAEditar.nombre;
                        document.getElementById('edit-categoria').value = productoAEditar.categoria;
                        document.getElementById('edit-stock').value = productoAEditar.stock;
                        document.getElementById('edit-precio').value = productoAEditar.precio;
                        document.getElementById('edit-descripcion').value = productoAEditar.descripcion;
                        // Mostrar el modal
                        modalEditar.show();
                    }
                });
            });
        }

        // Lógica principal al cargar el documento
        document.addEventListener('DOMContentLoaded', () => {
            productosEnMemoria = obtenerProductos();
            renderizarTabla();

            // Inicializar los modales
            const modalElementEliminar = document.getElementById('modalEliminar');
            const modalEliminar = new bootstrap.Modal(modalElementEliminar);

            const modalElementEditar = document.getElementById('modalEditar');
            modalEditar = new bootstrap.Modal(modalElementEditar);

            const confirmarEliminarBtn = document.getElementById('confirmarEliminar');
            if (confirmarEliminarBtn) {
                confirmarEliminarBtn.addEventListener('click', () => {
                    if (productoAEliminarId) {
                        const indexToDelete = productosEnMemoria.findIndex(p => String(p.id) === productoAEliminarId);
                        if (indexToDelete !== -1) {
                            productosEnMemoria.splice(indexToDelete, 1);
                            guardarProductos(productosEnMemoria);
                            renderizarTabla();
                        }
                        modalEliminar.hide();
                        productoAEliminarId = null;
                    }
                });
            }

            // Manejar el envío del formulario de edición
            const formEditar = document.getElementById('form-editar-producto');
            formEditar.addEventListener('submit', (e) => {
                e.preventDefault();
                const idProducto = parseInt(document.getElementById('edit-id-producto').value);
                const productoAActualizar = productosEnMemoria.find(p => p.id === idProducto);
                if (productoAActualizar) {
                    productoAActualizar.codigo = document.getElementById('edit-codigo').value;
                    productoAActualizar.nombre = document.getElementById('edit-nombre').value;
                    productoAActualizar.categoria = document.getElementById('edit-categoria').value;
                    productoAActualizar.stock = parseInt(document.getElementById('edit-stock').value);
                    productoAActualizar.precio = parseFloat(document.getElementById('edit-precio').value);
                    productoAActualizar.descripcion = document.getElementById('edit-descripcion').value;
                    guardarProductos(productosEnMemoria);
                    renderizarTabla();
                    modalEditar.hide();
                }
            });
        });

        // Evento para detectar cambios en localStorage desde otras pestañas
        window.addEventListener('storage', (e) => {
            if (e.key === 'productos') {
                productosEnMemoria = obtenerProductos();
                renderizarTabla();
            }
        });
document.addEventListener('DOMContentLoaded', () => {
    // Verificar si el usuario está autenticado
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
        window.location.href = 'index.html'; // Redirigir a la página de inicio de sesión
    }

    // Obtener información del usuario de localStorage y actualizar la UI
    const userName = localStorage.getItem('userName');
    const userRole = localStorage.getItem('userRole');

    if (document.getElementById('saludoUsuario')) {
        document.getElementById('saludoUsuario').textContent = `Hola, ${userName}!`;
    }
    if (document.getElementById('rolUsuario')) {
        document.getElementById('rolUsuario').textContent = `Tu rol actual es: ${userRole}.`;
    }

    // Manejar el cierre de sesión
    document.getElementById('botonCerrarSesion').addEventListener('click', () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userName');
        window.location.href = 'index.html'; // Redirigir a la página de inicio de sesión
    });
});


const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

async function manejarLogin(e) {
    e.preventDefault();
    const run = document.getElementById('inputRUN').value.trim();
    const password = document.getElementById('inputContrasena').value.trim();
    const mensajeAuth = document.getElementById('mensajeAuth');
    

    if (run === '19011022K' && password === 'admin123') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', 'Administrador');
        localStorage.setItem('userName', 'Admin');
        window.location.href = 'adminHome.html';
    } else {
        mensajeAuth.textContent = 'RUN o contraseña incorrectos.';
        mensajeAuth.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formularioAuth').addEventListener('submit', manejarLogin);
});

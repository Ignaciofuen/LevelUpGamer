


function cargarArchivo(id, archivo) {
    fetch(archivo)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error("Error cargando " + archivo, err));
}

document.addEventListener("DOMContentLoaded", () => {
    cargarArchivo("header", "header.html");
    cargarArchivo("footer", "footer.html");
});

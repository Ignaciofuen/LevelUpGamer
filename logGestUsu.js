
const regionesYComunas = {
  "Región Metropolitana": ["Santiago", "Puente Alto", "La Florida", "Maipú"],
  "Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana"],
  "Biobío": ["Concepción", "Talcahuano", "Los Ángeles"],
  "Antofagasta": ["Antofagasta", "Calama", "Mejillones"]
};


function obtenerUsuarios() {
  const usuariosJSON = localStorage.getItem("usuarios");
  return usuariosJSON ? JSON.parse(usuariosJSON) : [];
}

function guardarUsuarios(usuarios) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}


function mostrarUsuarios() {
  const usuarios = obtenerUsuarios();
  const cuerpo = document.getElementById("cuerpoTablaUsuarios");
  if (!cuerpo) return;

  cuerpo.innerHTML = "";
  usuarios.forEach(usuario => {
    cuerpo.innerHTML += `
      <tr>
        <td>${usuario.id}</td>
        <td>${usuario.run}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.correo}</td>
        <td>${usuario.telefono}</td>
        <td>${usuario.tipo}</td>
        <td>
          <button class="btn btn-sm btn-warning me-1" onclick="abrirEditar(${usuario.id})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="abrirEliminar(${usuario.id})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}


let idEliminar = null;


function abrirEditar(id) {
  const usuarios = obtenerUsuarios();
  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) return;

  document.getElementById("edit-id").value = usuario.id;
  document.getElementById("edit-run").value = usuario.run;
  document.getElementById("edit-nombre").value = usuario.nombre;
  document.getElementById("edit-apellido").value = usuario.apellido;
  document.getElementById("edit-correo").value = usuario.correo;
  document.getElementById("edit-telefono").value = usuario.telefono;
  document.getElementById("edit-tipo").value = usuario.tipo;

  const modal = new bootstrap.Modal(document.getElementById("modalEditar"));
  modal.show();
}


function abrirEliminar(id) {
  idEliminar = id;
  const modal = new bootstrap.Modal(document.getElementById("modalEliminar"));
  modal.show();
}


document.addEventListener("DOMContentLoaded", () => {

 
  mostrarUsuarios();

 
  const formAgregar = document.getElementById("form-agregar-usuario");
  const regionSelect = document.getElementById("add-region");
  const comunaSelect = document.getElementById("add-comuna");

  if (regionSelect) {
    
    Object.keys(regionesYComunas).forEach(region => {
      const option = document.createElement("option");
      option.value = region;
      option.textContent = region;
      regionSelect.appendChild(option);
    });

    
    regionSelect.addEventListener("change", () => {
      comunaSelect.innerHTML = '<option value="">Seleccione una comuna</option>';
      const comunas = regionesYComunas[regionSelect.value] || [];
      comunas.forEach(comuna => {
        const option = document.createElement("option");
        option.value = comuna;
        option.textContent = comuna;
        comunaSelect.appendChild(option);
      });
    });
  }

  if (formAgregar) {
    formAgregar.addEventListener("submit", e => {
      e.preventDefault();

      const nuevoUsuario = {
        id: Date.now(),
        run: document.getElementById("add-run").value,
        nombre: document.getElementById("add-nombre").value,
        apellido: document.getElementById("add-apellido").value,
        correo: document.getElementById("add-correo").value,
        telefono: document.getElementById("add-telefono").value,
        region: document.getElementById("add-region").value,
        comuna: document.getElementById("add-comuna").value,
        tipo: document.getElementById("add-tipo").value
      };

      const usuarios = obtenerUsuarios();
      usuarios.push(nuevoUsuario);
      guardarUsuarios(usuarios);

      alert("Usuario agregado correctamente.");

      formAgregar.reset(); 
      mostrarUsuarios();   
    });
  }

 
  const formEditar = document.getElementById("form-editar-usuario");
  if (formEditar) {
    formEditar.addEventListener("submit", e => {
      e.preventDefault();

      const usuarios = obtenerUsuarios();
      const index = usuarios.findIndex(u => u.id == document.getElementById("edit-id").value);

      if (index !== -1) {
        usuarios[index] = {
          ...usuarios[index],
          run: document.getElementById("edit-run").value,
          nombre: document.getElementById("edit-nombre").value,
          apellido: document.getElementById("edit-apellido").value,
          correo: document.getElementById("edit-correo").value,
          telefono: document.getElementById("edit-telefono").value,
          tipo: document.getElementById("edit-tipo").value
        };
        guardarUsuarios(usuarios);
        mostrarUsuarios();

        bootstrap.Modal.getInstance(document.getElementById("modalEditar")).hide();
      }
    });
  }


  const btnEliminar = document.getElementById("confirmarEliminar");
  if (btnEliminar) {
    btnEliminar.addEventListener("click", () => {
      let usuarios = obtenerUsuarios();
      usuarios = usuarios.filter(u => u.id !== idEliminar);
      guardarUsuarios(usuarios);
      mostrarUsuarios();
      bootstrap.Modal.getInstance(document.getElementById("modalEliminar")).hide();
    });
  }

});

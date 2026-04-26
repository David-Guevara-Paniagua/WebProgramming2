
let usuarios = [];
const form = document.getElementById('formUsuario');
const tabla = document.getElementById('tablaUsuarios');
const inputArchivo = document.getElementById('importarJSON');
const BtnDescargar = document.getElementById('descargarBtn');
function generarID(){
    return usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
}
form.addEventListener('submit', 
    function(e) { 
        e.preventDefault(); 
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('correo').value.trim();
        usuarios.push({ id: generarID(), nombre, email });
        mostrarUsuarios(); 
        form.reset();      
}); 
function mostrarUsuarios() {
    tabla.innerHTML = '';
    usuarios.forEach((user,index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td contenteditable onblur="ediarCampo(${index},'nombre', this.textContent)">${user.nombre}</td>
            <td contenteditable onblur="ediarCampo(${index},'', this.textContent)">${user.email}</td>
            <td><button onclick="eliminarUsuario(${index})">Eliminar</button></td>
        `;
        tabla.appendChild(row);
    });
}

function ediarCampo(index, campo, valor) {
    usuarios[index][campo] = valor.trim(); 

}

function eliminarUsuario(index) {
    if( confirm('¿Estás seguro de eliminar este usuario?')) {
        usuarios.splice(index, 1);
        mostrarUsuarios();
    }
}

inputArchivo.addEventListener('change', 
    function(e) {
    const archivo = e.target.files[0]; 
    const lector = new FileReader(); 
    
    
    lector.onload = function(e) {
        try {
            const datos = JSON.parse(e.target.result);  
            if (Array.isArray(datos)) {
                usuarios = datos; 
                mostrarUsuarios(); 
            } else {
                throw new Error('El archivo JSON debe contener un arreglo de usuarios');
            }
        }catch (error) {
            alert('Error al cargar el archivo JSON: ' + error.message);
        }
    };
    lector.readAsText(archivo); 

});

BtnDescargar.addEventListener('click', 
    function() {
        const blb = new Blob([JSON.stringify(usuarios, null, 2)], { type: 'application/json' }); 
        const url = URL.createObjectURL(blb); 
        const a = document.createElement('a'); 
        a.href = url; 
        a.download = 'usuarios.json'; 
        document.body.appendChild(a); 
        a.click(); 
        document.body.removeChild(a); 
        URL.revokeObjectURL(url); 

    });
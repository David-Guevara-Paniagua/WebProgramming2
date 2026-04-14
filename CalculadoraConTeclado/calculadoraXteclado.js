function limpiarPantalla(){
    pantalla.value = ""
}

function agregarPantalla(value){
    pantalla.value += value;
}

function calcularResultado(){
    pantalla.value = eval(pantalla.value);
}

function procesarTecla(event){
    let tecla = event.key;
    if (!isNaN(tecla) || ["+", "-", "*", "/"].includes(tecla)){
        agregarPantalla(tecla);
    }
    if (tecla === "Enter") calcularResultado();
    if (tecla === 'c') limpiarPantalla();
    
}

const pantalla = document.getElementById("pantalla");

document.addEventListener("keydown", procesarTecla);
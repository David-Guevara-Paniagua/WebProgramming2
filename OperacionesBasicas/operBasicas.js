let opc = parseInt(prompt("1. Suma\n2. Resta\n3.Multiplicacion\n4.Division"));

let a = parseInt(prompt("Dame el primer numero"));
let b = parseInt(prompt("Dame el segundo numero"));

switch(opc){
    case 1: console.log(a+" + "+b+" = "+(a+b)); break;
    case 2: console.log(a+" - "+b+" = "+(a-b)); break;
    case 3: console.log(a+" * "+b+" = "+(a*b)); break;
    case 4: console.log(a+" / "+b+" = "+(a/b)); break;
    default: console.log("No has seleccionado una opcion valida")
}

document.body.innerText = "Revisa la consola!";
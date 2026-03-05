let dia = parseInt(prompt("Elige un dia:\n"+
    "1. Lunes\n"+
    "2. Martes\n"+
    "3. Miercoles\n"+
    "4. Jueves\n"+
    "5. Viernes\n"+
    "6. Sabado\n"+
    "7. Domingo"
));
switch (dia){
    case 1: console.log("Hoy es lunes"); break;
    case 2: console.log("Hoy es martes"); break;
    case 3: console.log("Hoy es miercoles"); break;
    case 4: console.log("Hoy es jueves"); break;
    case 5: console.log("Hoy es viernes"); break;
    case 6: console.log("Hoy es sabado"); break;
    case 7: console.log("Hoy es domingo"); break;
    default: console.log("No elegiste un numero valido: " + dia);
}
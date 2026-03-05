const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let vidas = 3;
let gano = false;

console.log("¡Bienvenido al reto! Tienes 3 vidas para adivinar un número del 1 al 10.");

while (vidas > 0) {
    let intento = parseInt(prompt(`Te quedan ${vidas} vidas. ¿Cuál es el número?`));

    if (intento === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número. 🏆");
        gano = true;
        break; 
    } 
    
    if (intento > numeroSecreto){
      console.log("Casi. El numero es menor!")
      vidas--;
    }
    
    if (intento < numeroSecreto){
      console.log("No. El numero es mayor!")
      vidas--;
    }
    
}

if (!gano) {
    console.log(`Se acabaron las vidas. El número era el ${numeroSecreto}. ¡Suerte la próxima! 💀`);
}
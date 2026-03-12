
lista=[];
continuar=true;
while(continuar){
    lista.push(prompt("Que fruta quieres?"));
    continuar=confirm("Quieres otra fruta?");
}
console.log("Tus compras son: " + lista);
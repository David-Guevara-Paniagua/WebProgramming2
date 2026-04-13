function funcGenerarLista(){
    let numero = Number(inputNum.value);
    const lista = document.createElement("ul")
    for (let index = 0; index < numero; index++) {
        const li = document.createElement("li");
        li.innerText = "Elemento " + (index + 1);
        lista.appendChild(li);
    }
    document.body.appendChild(lista);
}

const inputNum = document.createElement("input");
inputNum.type = "number";
document.body.appendChild(inputNum);

const botonGenerar = document.createElement("button");
botonGenerar.innerText = "Generar lista";
botonGenerar.onclick = funcGenerarLista;
document.body.appendChild(botonGenerar);

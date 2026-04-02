let productos =[
    {nombre: 'camisa',   precio: 300, stock: 3},
    {nombre: 'pantalon', precio: 550, stock: 2},
    {nombre: 'zapatos',  precio: 750, stock: 3},
    {nombre: 'sombrero', precio: 550, stock: 5},
    {nombre: 'tenis',    precio: 1200, stock: 4}
];

let carrito=[];

function  mostrarMenu(){
   let menu = "Seleecione un producto para agregar al carrito\n";
   for( let i = 0 ;i< productos.length ; i++ ){
        menu += (i+1)+" .- " + productos[i].nombre + "- $"+ productos[i].precio+"\n";
   } 

   menu += (productos.length+1)+".- Ver carrito y Total\n";
   menu += (productos.length+2)+".- Salir\n";

   return menu;
}


function agregarAlCarrito(index){  
    let productoSeleccionado = productos[index];
    if (productoSeleccionado.stock > 0){
        carrito.push(productoSeleccionado);
        console.log(`Producto ${productoSeleccionado.nombre} se agrego al carrito`);
        productoSeleccionado.stock--;
    } else{
        console.log("El producto "+productoSeleccionado+" ya no tiene existencias :(")
    }

}
function mostrarCarritoTotaL(){
    if(carrito.length===0){

        console.log("El carrito esta vacio");
    }else{
        let mensajeCarrito ="Carrito de compras\n";
        let total = 0;
        for ( let i = 0; i<carrito.length;i++){
            mensajeCarrito+= (i+1)+" .- "+carrito[i].nombre+" - $"+carrito[i].precio+"\n";
            total+= carrito[i].precio;
        }
        mensajeCarrito+="\n Total: $"+total;
        console.log(mensajeCarrito);
    }
}
/*--Menu de inicio--*/ 
let opcion;
do{
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);
    //verificar si la opcion es valida
    if(isNaN(opcion)|| opcion<1 || opcion>productos.length+2){
        console.log("Opcion no valida, por favor intenta nuevamenete")
    }else if( opcion >= 1 && opcion <= productos.length){
        agregarAlCarrito(opcion-1);
    }else if( opcion === productos.length+1 ){
            mostrarCarritoTotaL();
    }
}while( opcion !== productos.length+2);

console.log("Gracias por su compra :)");
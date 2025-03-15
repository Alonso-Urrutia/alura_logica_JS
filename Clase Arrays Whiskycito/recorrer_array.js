// recorrer un array (4)

// " for" es una estructura de control que nos permite repetir un bloque de codigo un numero determinado de veces.
let frutas = ['manzana', 'pera', 'uva', 'sandia', 'melon', 'platano', 'fresa', 'mango', 'kiwi', 'naranja'];
for (let i = 1; i <= frutas.length; i++) { //resumen
    console.log(frutas[i]);
}

//forEach es utiizado para recorrer cada elemento de un array. realiza una accion sobre cada valor sin modificar el array original.
array.forEach(function (elemento, indice,array){
    //codigo a ejecutar
});


// Ejemplo básico.

let frutas = ['manzana', 'pera', 'uva', 'sandia', 'melon', 'platano', 'fresa', 'mango', 'kiwi', 'naranja'];

frutas.forEach(function (frutas){
    console.log(frutas);
});

// Ejemplo con indice

let frutas = ['manzana', 'pera', 'uva', 'sandia', 'melon', 'platano', 'fresa', 'mango', 'kiwi', 'naranja'];

frutas.forEach(function (frutas, indice){
    console.log(`Índice ${indice}: ${frutas}`); // averigguar esta estructura de impresión
});

/* let frutas = ["Manzana", "Banana", "Cereza"];

frutas.forEach((fruta, indice) => {
    console.log(`Índice ${indice}: ${fruta}`);
});*/

/*
*  map()
* filter()
*
* */
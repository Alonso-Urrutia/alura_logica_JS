// verifica si un indice o propiedad existe en un objeto o array.

// ejemplo con objetos:

let persona = { nombre: "Ana", edad: 30 };
console.log("nombre" in persona);  // true
console.log("altura" in persona);  // false


// ejemplo con arrays:

let numeros = [10, 20, 30];
console.log(1 in numeros);  // true (índice 1 existe)
console.log(5 in numeros);  // false (índice 5 no existe)

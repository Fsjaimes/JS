/**
 * crear algoritmo que tome un array de objetos y devuelva un array de pares
 */

let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

let pares = [
    [1, { id: 1, name: 'Nicolas'}],
    [2, { id: 2, name: 'Felipe'}],
    [3, { id: 3, name: 'Chanchito'}],
];

// Funcion con bucle for in
// function toPairs(arr) {
//     let pairs = [];
//     for(idx in arr){
//         let elemento = arr[idx];
//         pairs[idx] = [elemento.id, elemento];
//     }
//     return pairs;
// }

//Funcion con bucle For convencional
function toPairs(arr) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        let elemento = arr[i];
        pairs[i] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);
/**
 * Crear un array de longitud N, y que sus elementos sean números de 1 hasta n
 */

let longitud = 20;

function crearArray(n){
    let array = [n];
    let cont = 0;
    for(let i = 0; i < n ; i++){
        array[i] = ++cont;
    }
    return array;
}

let resultado = crearArray(longitud);
console.log(resultado);

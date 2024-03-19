/**
 * Indice validar que no sea menor a cero y que el elemento exista en el array
 */

function getByIdx (arr, idx){
    if(idx >= 0 && idx < arr.length) {
        return arr[idx];
    }
    else {
        return "Elemento no existe";
    }
}

let resultado = getByIdx([1,2,3,4,5,6],0);
console.log(resultado);

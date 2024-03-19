/**
 * Crear un algoritmo que devuelva la cantidad de numeros positivos de un array
 */

let array = [2, 5, 7, 15, 5, -100, 55];

function cuantosPositivos(arr){
    cont = 0;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] >= 1){
            cont++;
        }
    }
    return cont;
}

let resultado = cuantosPositivos(array);
console.log(resultado);
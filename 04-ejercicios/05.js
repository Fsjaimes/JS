//Crear un algoritmo que devuelva el número menor y mayor de un array

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr){

    let minimo = array[0]; // Inicializar el mínimo con el primer elemento del array
    let maximo = array[0]; // Inicializar el máximo con el primer elemento del array

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimo) {
            minimo = array[i]; // Actualizar el mínimo si se encuentra un número menor
        } else if (array[i] > maximo) {
            maximo = array[i]; // Actualizar el máximo si se encuentra un número mayor
        }
    }

    return [minimo, maximo];
}


//let numeros = getMenorMayor(array);
console.log(getMenorMayor(array));
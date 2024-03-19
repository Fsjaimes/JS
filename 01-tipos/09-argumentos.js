function suma(a, b) {   
    console.log(arguments);  //<-- Se utiliza para acceder a todos los valores que se le pasan a la funcion
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);
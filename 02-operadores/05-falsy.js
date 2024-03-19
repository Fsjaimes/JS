//Short circuir - corto circuito

//Falso - ejemplos

// false
// 0
// ''
// null
// undefined
// NaN

let nombre = 'Frank';
let username = nombre || 'anonimo';
console.log(username);

//And se utiliza para evaluar funciones siempre y cuando la primera haya evaluado en "true"

function fn1() {
    console.log('soy funcion 1');
    return false;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();  //Ejecuta la funcion que este en true
function cualEsMayor(a, b) {
    if (a > b){
        return a;
    }
    else if (b > a) {
        return b;
    }
    else {
        console.log('Los numeros son iguales');
    }

    //También se puede hacer con el operador ternario de una forma más rápida
    //return (a > b) ? a : b;   //Con esta linea estariamos haciendo lo mismo que arriba
}

let mayor = cualEsMayor(5, 10);

console.log(mayor);


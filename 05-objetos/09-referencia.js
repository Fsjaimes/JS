let a = 1;

function suma(n){
    n++;
}
 
suma(n);
console.log(a); //El resultado sería 1, no cambia porque es un tipo de dato primitivo, y lo que copiaria sería la direccion en memoria 

//Mientras que aquí el resultado sería 2:
let b = { prop: 1};

function suma(n){
    n.prop++;
}
 
suma(b);
console.log(b);  //Porque es un tipo de dato de referencia
                 //De Referencia: objetos, array, funciones
                 /**
                  * Primitivos: Se copian
                  * De Referencia: Se referencian
                  */
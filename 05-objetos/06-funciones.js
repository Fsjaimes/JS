//Las funciones en JS también son objetos y pueden ser asignadas a otras variables, pasadas como
//argumentos a otras funciones o temabién retornadas de otras funciones, además también tienen propiedades
//Por ejemplo, esta función:

function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);  //Propiedad name, que devuelve el nombre de la funcion
console.log(Usuario.length); //Propiedad length, Indica la cantidad de elementos de la función

const U = Usuario;    //las funciones se pueden asignar a otras variables
let user = new U('Nicolas');

console.log(user);

function of(Fn, arg){    //Se puede passar una función como argumento en otra funcion
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

function returned(){  //Retornar dentro de otras funciones
    return function(){
        console.log('Hola Mundo');
    }
}

let saludo = returned();
saludo(); 
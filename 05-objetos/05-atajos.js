let obj = {};

/**
 * new Array(); []
 * new String(); "" '' ´´
 * new Number(); 12
 * new Boolean(); true false  
 */

function Usuario(){
    this.name = "Chanchito feliz";
}

let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1,s2);  //Si miramos consola saldría "1 + 1", y el String hecho con el constructor no se mostraría
console.log(s2.valueOf());  //valueOf sirve para mostrar el contenido de ese constructor, 
                            //en este caso mostraría "1 + 1", pero si simplemente ponemos "s2" en consola no mostraría nada

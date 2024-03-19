
function crearUsuario(name, emailx) {
    return  {  //Objeto
        email: emailx,  //Datos
        name,
        activo: true,
        resuperarClave: function () {   //Esto es un comportamiento
            console.log('Recuperando clave...');
        },
    }; 
}


let user1 = crearUsuario('Nicolas', 'Nico@holamundo.io');
let user2 = crearUsuario('Frank', 'Fsjaimes@uts.edu.co');

console.log(user1);
console.log(user2);

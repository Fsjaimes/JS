//

const user = {id: 1};

user.name = 'Frank';
user.guardar = function (){
    console.log('Guardando', user.name);
}

user.guardar();
console.log(user);

delete user.name;
delete user.guardar;
console.log(user);

//const user1 = Object.freeze({id: 1});  //Con freeze no podriamos cambiar, quitar ni agregar propiedades
const user1 = Object.seal({id: 1}); //Con seal podriamos cambiar las propiedades pero no agregar ni quitar
user1.name = 'Francho';
user1.id = 2;
console.log(user1);

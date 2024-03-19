// { id: 1, recuperarClave: function(){} }

function Usuario(){
    this.id = 1;
    this.recuperarClave = function () {
        console.log('recuperando clase...');
    }
}

let usuario = new Ususario();  

console.log(usuario);
//POO, encapsular datos y comportamientos que son comunes entre si, dentro de una variable que en este caso es un objeto

let user = {  //Objeto
    email: 'fsjaimes@uts.edu.co',  //Datos
    name: 'Frank',
    direccion: {
        calle: '26 AN',
        numero: 57,
    }, 
    activo: true,
    resuperarClave: function () {   //Esto es un comportamiento
        console.log('Recuperando clave...');
    },
};
//Personaje de Tv

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let Personaje = {
    nombre: "Tanjiro",     //Llave: "valor"
    anime: "Demon Slayer",
    edad: 16,
};  // <-- Objeto

console.log(Personaje);
console.log(Personaje.nombre);   // <--- Se llama a la propiedad nombre
console.log(Personaje["edad"]);     // <--- Se llama a la propiedad edad. Esta es otra forma pero funciona igual que la de arriba

Personaje.edad = 13;  // <-- Cambiar el valor a edad

let llave = edad;       //Ejemplo de la otra manera
Personaje[llave] = 15;

delete Personaje.anime;  //Borrar un atributo del objeto

console.log(Personaje);


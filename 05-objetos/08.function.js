function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...'); }
}

//Extender objetos - Sirve para reutilizar código
let punto = {z:7};
Punto.call(punto, 1, 2);  //Call permite llamar funciones a las cuales le puedes pasar el contexto de this y aumentar los objetos que le estas pasando
Punto.apply(punto, [1,2]); //apply hace lo mismo que call pero los argumentos se le deben pasar como un array

console.log(punto);

// const Point = new Function('x','y',`
//     this.x = x;
//     this.y = y;
//     this.dibujar = function() {console.log('Dibujando...'); }
//     `);

// const p = new Point(1,2);
// console.log(p);
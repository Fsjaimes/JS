/**
 * Crear algoritmo que devuelva el precio del producto más el impuesto
 */

function precioCompleto(precio, impuesto){
    let precioTotal = precio + (precio * impuesto);
    return precioTotal;  
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);
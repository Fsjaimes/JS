//Algoritmo que me muestre los numeros impares que hay del 0 al 10

for (let i = 0; i <= 10; i++) {
    if(i % 2 !== 0) {
        console.log('Impar: ', i);
    }
}

let i = 0;
while(i <= 10) {
    if(i % 2 !== 0) {
        console.log('Impar: ', i);
    }
    i++;
}
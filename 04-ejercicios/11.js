//Hacer un algortimo que muestre los numeros primos que hay entre el 1 y el 10

let cont = 0;

for(let i = 1; i <= 10 ; i++){
    for(let j = 1; j <= i; j++){
        if(i % j == 0){
            cont++;
        }
    } 
    if(cont <= 2){
        console.log(i);
    }
    cont = 0;
}




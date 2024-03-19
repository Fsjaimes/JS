let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue;    //Con el "continue" vuelve al loop para ejecutar el siguiente numero, basicamente se salta el loop una vez
    }
    if (i === 4) {
        break;      //Detiene la ejecución del loop por completo
    }
    console.log(i);
}
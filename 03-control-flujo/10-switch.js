let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log("Accion de listar");
        break;     //Si se comenta este "break" el switch ejecutaria ambas acciones, es importante poner el "break"
    case 'guardar':
        console.log("Accion de guardar");
        break;
    default:        //Cuando no entra en ninguno de los casos
        console.log('Accion no reconocida');
}
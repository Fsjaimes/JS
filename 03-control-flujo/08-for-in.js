let user = {
    id: 1,
    name: 'Frank Jaimes',
    age: 25,
};

for (let propiedad in user) {
    console.log(propiedad ,user[propiedad]);
}

let animales = ['Chancho', 'Dragon', 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}
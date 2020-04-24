const personas = [
    { nombre: 'Juan', edad: 33 },
    { nombre: 'Pablo', edad: 50 },
    { nombre: 'Alejandra', edad: 23, aprendiendo: 'Javascript' },
    { nombre: 'Miguel', edad: 20 },
    { nombre: 'Karem', edad: 40 }

]

console.table(personas);

// funcion filter

const mayores = personas.filter(persona => {
    return persona.edad > 25;
})

console.log(mayores);

// extraer solo alejandra 

const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';
})

console.log(alejandra);

let { aprendiendo } = alejandra;
console.log(aprendiendo);

// funcion reduce 

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total);
console.log(total / personas.length);
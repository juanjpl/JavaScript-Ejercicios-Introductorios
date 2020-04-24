const persona = {
    nombre: 'Juan',
    apellido: 'Lima',
    edad: 80,
    trabajo: true,
    musica: ['Trance', 'Rock', 'Grunge'],
    hogar: {
        ciudad: 'Buenos Aires',
        pais: 'Argentina'
    }
}

console.log(persona);

console.log(persona.edad);
console.log(persona.musica[2]);
console.log(persona.hogar.pais);

console.log(persona['hogar']['ciudad']);
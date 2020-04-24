// scope.. local .. global


var musica = 'Rock';

if (musica) {
    var musica = 'Grunge';
    console.log('Dentro del if ' + musica);
}

console.log('Fuera del if ' + musica);

let color = 'Azul';

if (color) {
    let color = 'Rojo';
    console.log('Dentro del if ' + color);
}

console.log('Fuera del if ' + color);

const dia = 'Lunes';

if (dia) {
    let dia = 'Viernes';
    console.log('Dentro del if ' + dia);
}

console.log('Fuera del if ' + dia);
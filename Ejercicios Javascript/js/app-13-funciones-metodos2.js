const suma = function(a = 0, b = 0) {
    return a + b;
}

const multiplicar = function(a) {
    return a * 5;
}

let total;


let resultadoSuma = suma(1, 3);

total = multiplicar(resultadoSuma);

console.log(total);

const dividir = a => {
    return a / 2;
}

totaldiv = dividir(8);
console.log(totaldiv);

const multiplicados = a => a * 5;

const sumados = (a = 0, b = 0) => a + b;

totalsumados = sumados(20, 50);
console.log(totalsumados);


/*=========================================*/

let viajando = function(destino) {
    return 'Viajando a la ciudad de ' + destino;
}

let programa = destino => 'Viajando a la ciudad de ' + destino;

let viaje;


viaje = viajando('Londres');
console.log(viaje);
viaje = viajando('Paris');

console.log(viaje);

let viajecito;

viajecito = programa('New york');
console.log(viajecito);
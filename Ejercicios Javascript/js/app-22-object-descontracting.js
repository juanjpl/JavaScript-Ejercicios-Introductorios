const cliente = {
    nombre: 'Alejandra',
    tipo: 'Premiun',
    datos: {
        ubicacion: {
            ciudad: 'Buenos Aires',
            pais: 'Argentina',
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        }
    },
    gustos: {
        musica: ['trance', 'rock']
    }
}

console.log(cliente);

/*
const nombreCliente = cliente.nombre;

console.log(nombreCliente);

let { nombre, tipo } = cliente;
console.log(nombre);
console.log(tipo);
*/

let { nombre, tipo } = cliente;
let { datos: { ubicacion } } = cliente;

console.log(ubicacion);
console.log(tipo);


/*
const nombrecliente = cliente.nombre,
    tipocliente = cliente.tipo,
    ubicacioncliente = cliente.datos.ubicacion;

console.log(ubicacioncliente);
*/


let { datos: { cuenta: { saldo } } } = cliente;
console.log(saldo);

let { gustos: musica } = cliente;
console.log(musica);
// otros iteradores

const pendientes = ['tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Disco' }
];

// en el objeto

let automovil = {
    modelo: 'Camaro',
    motor: 5.0,
    anio: 1967,
    marca: 'chevrolet'
}

for (let i = 0; i < pendientes.length; i++) {

    console.log(pendientes[i]);
}

for (pendiente of pendientes) {
    console.log(pendiente);
}

for (producto of carrito) {
    console.log(producto.producto);
}


/* no funciona para esta clase de objetos 
for (info of automovil) {
    console.log(info);
}

*/

for (info of Object.values(automovil)) {
    console.log(info);
}

// foreach ... otro iterador que recorrer todo el arreglo

pendientes.forEach(function(tarea) {
    console.log(tarea);
});

pendientes.forEach(tarea => {
    console.log(tarea);
});

// funcion map crea una copia del arreglo

pendientes.map(tarea => {
    console.log(tarea);
});


// diferencias entre ambos

let nuevoArreglo = pendientes.forEach(tarea => {
    console.log(tarea);

});

let nuevoArreglo2 = pendientes.map(tarea => {
    console.log(tarea);
});

let nuevoArreglo3 = carrito.map(tarea => {
    console.log(tarea.producto);
});


//
Object.values(automovil).forEach(tarea => {
    console.log(tarea);
})

Object.keys(automovil).forEach(tarea => {
    console.log(tarea);
})


Object.values(automovil).map(tarea => {
    console.log(tarea);
})
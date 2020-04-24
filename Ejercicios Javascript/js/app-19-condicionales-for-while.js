// for condicional

for (let i = 0; i < 10; i++) {
    console.log(`Numero: ${i}`);
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}


for (let i = 0; i < carrito.length; i++) {
    console.log(`Producto en el carrito: ${carrito[i]} `);
}

// while
let i = 0;
while (i < 10) {
    console.log(`Numero. ${i}`);
    i++;
}
let x = 0;
while (x < carrito.length) {
    console.log(carrito[x]);
    x++;
}


// do while realiza una vez la condicion

do {
    console.log(x);
    x++;

} while (x < 10);
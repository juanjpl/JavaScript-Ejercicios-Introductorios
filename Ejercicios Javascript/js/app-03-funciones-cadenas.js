// usaremos funciones para cadenas 

let banda = 'Metallica';
cancion = 'Enter Sandman';



let nombre;

nombre = banda + " " + cancion;
console.log(nombre);
nombre = `${banda} ${cancion}`;
console.log(nombre);

// usamos la funcion para saber la cantidad de caracteres
console.log(banda.length);

// funcion concat. ....
nombre = nombre.concat(" ", "y es genial");
console.log(`${nombre}`);


// todo en mayuscula ...
nombre = nombre.toLocaleUpperCase();
console.log(`${nombre}`);

//split... separa cadena de texto

let actividad = 'Estoy aprendiendo javascript con el curso';

/*nombre = actividad.split("");
console.log(`${nombre}`);

let intereses = 'leer, caminar, escuchar musica, escribir, aprender a probramar';
nombres = intereses.split("1");

console.log(`${nombres}`);*/


//funcion ... reemplazamos

//nombre = actividad.replace("javascript", "JS");
//console.log(`${nombre}`);


//funcion ... includes

nombre = actividad.includes("javascript");
console.log(nombre);


//ejercicio email

let email = 'correo@correo.com';

nombreEmail = email.includes('@');
console.log(`${nombreEmail}`);

// funcion repetir

let master = `Master `;

puppets = `Of Puppets`;

console.log(`${master} ${puppets}`);

console.log(master.repeat(3));
console.log(puppets);
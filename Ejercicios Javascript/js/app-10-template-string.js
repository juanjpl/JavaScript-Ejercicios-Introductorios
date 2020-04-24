//template

const nombre = 'Juan',
    trabajo = 'Desarrollador Web';

console.log('Nombre:' + nombre + ' , Trabajo: ' + trabajo);
console.log('Nombre: ' + `${nombre}` + ', Trabajo: ' + `${trabajo}`);


console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);


const contenedorApp = document.querySelector("#mensaje");

let html = '<ul>' +
    '<li> Nombre: ' + nombre + '</li>' +
    '<li> Nombre: ' + trabajo + '</li>' +
    '</ul>';

console.log(html);

//contenedorApp.innerHTML = html;

//console.log(contenedorApp);


let html2 = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>`;

contenedorApp.innerHTML = html2;
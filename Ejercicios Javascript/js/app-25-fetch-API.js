// usando apis
descargarUsuarios(100);


function descargarUsuarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;

    // fetch

    fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => imprimirHTML(datos.results));
}


function imprimirHTML(datos) {
    datos.forEach(usuario => {

        console.log(usuario);
        const li = document.createElement('li');

        const { name: { first }, name: { last }, picture: { medium }, nat } = usuario;

        li.innerHTML = `
                Nombre: ${first} ${last}
                Pais: ${nat}
                Imagen: <img src="${medium}">
        `;

        document.querySelector("#mensaje").appendChild(li);
    });
}
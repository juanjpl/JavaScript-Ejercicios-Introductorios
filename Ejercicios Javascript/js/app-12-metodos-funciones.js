//metodos ---- funciones usadas con los objetos


const musica = {
    reproducir: function(cancion) {
        console.log('Reproduciendo la cancion: ' + cancion);
    },
    pausar: function() {
        console.log('Paused...');

    }
}



musica.borrar = function(id) {
    console.log('Borrando la canción con el ID: ' + id);
}


musica.reproducir('Hotel California');
musica.reproducir('Nothing Else Matters');
musica.reproducir('Vogues');


musica.pausar();
musica.reproducir('Nothing Else Matters');
musica.borrar(121);
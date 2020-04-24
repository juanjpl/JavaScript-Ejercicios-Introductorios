//funciones 


/*
console.log('Hola');

alert('hola');

prompt('Ingresa tu nombre:');*/

// creamos la funcion....


saludar(); // se puede llamar antes que la funcion.... FUNCTION DECLARATION


function saludar() {
    console.log('Hola!');
}

//para que funcione..... hay que llamarla....

saludar();

// FUNCTION EXPRESSION

// suma();  NO SE PUEDE LLAMAR ANTES QUE LA FUNCION

const suma = function() {
    console.log(1 + 2);
}

suma();


// agregamos parametros
//la funcion puede usarse tantas veces lo necesitemos




saludar2('Juan', 'Desarrollador Web');
saludar2('Pedro', 'Medico');
saludar2('Sebastian', 'Abogado');
saludar2('Alejandra', 'veterinaria');
saludar2('Laura', 'Ingeniera');




function saludar2(nombre, trabajo) {
    console.log('Hola ' + nombre + ' tu trabajo es ' + trabajo);
}

const sumados = function(a = 0, b = 0) {
    console.log(a + b);
}

sumados();
sumados(10, 20);
sumados(30, 50);
sumados(-100, 100);


//iifi
// se llama automaticamente °°° genial .----


(function() {
    console.log('Aqui estoy!');
})();

// pasemos parametros

(function(tecnologia) {
    console.log('Aqui estoy! Aprendiendo' + tecnologia);
})('Javascript');
// objetos constructores

const persona = {
    nombre: 'Juan',
    edad: 80,
    anioNacimiento: function() {
        return new Date().getFullYear() - this.edad
    }
}

console.log(persona);
console.log(persona.anioNacimiento());

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;

}

// algunas tareas
const tarea1 = new Tarea('Aprender Javascript', 'Urgente');
const tarea2 = new Tarea('Preparar café', 'Urgente');
const tarea3 = new Tarea('Pasear al perro', 'Urgente');
const tarea4 = new Tarea('Conocer a mis suegros', 'Urgente');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);

class tareas {
    constructor(nombre, urgencia) {
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
}

const tarea11 = new tareas('Aprender Javascript', 'Urgente');
const tarea22 = new tareas('Preparar café', 'Urgente');
const tarea33 = new tareas('Pasear al perro', 'Urgente');
const tarea44 = new tareas('Conocer a mis suegros', 'Urgente');

console.log(tarea11);
console.log(tarea22);
console.log(tarea33);
console.log(tarea44);
// echas 

const diaHoy = new Date();


let valor = diaHoy;

//retorna mes 0 = enero
valor = diaHoy.getMonth();
console.log(valor);

//dia -- 0 domingo
valor = diaHoy.getDay();
console.log(valor);

//numero dia del mes
valor = diaHoy.getDate();
console.log(valor);

//numero dia del mes
valor = diaHoy.getFullYear();
console.log(valor);

//numero dia del mes
valor = diaHoy.getMinutes();
console.log(valor);

//numero dia del mes
valor = diaHoy.getHours();
console.log(valor);

//numero dia del mes
valor = diaHoy.getTime();
console.log(valor);


valor = diaHoy.setFullYear(1998);
valor = diaHoy.getFullYear();

console.log(valor);


/*==========================================*/

const unDia = new Date(1995, 07, 12);


console.log(unDia);

let valores;

valores = unDia.getDay();

console.log(valores);


/*==============================================*/
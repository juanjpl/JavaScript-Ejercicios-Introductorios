// switch

const metodoPago = 'bitcoin';

switch (metodoPago) {
    case 'efectivo':

        console.log(`Pagaste con ${metodoPago}`);
        break;

    case 'cheque':

        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos`);
        break;

    case 'tarjeta':

        console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;
    default:
        console.log('Aun no has pagado o metodo no valido');
        break;
}


function hola() {
    console.log('hola amigos');
}
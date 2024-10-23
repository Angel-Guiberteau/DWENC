let array = [];
let numeroCuenta;

numeroCuenta = prompt("Introduce el número de cuenta (introduce un número negativo para parar)");

while (numeroCuenta >= 0) {
    
    let nombre = prompt("Introduce el nombre");
    let saldoActual = prompt("Introduce el saldo actual");

    array.push({
        numeroCuenta: numeroCuenta,
        nombre: nombre,
        saldoActual: parseFloat(saldoActual)
    });

    numeroCuenta = prompt("Introduce el número de cuenta (introduce un número negativo para parar)");

};  // El bucle termina si se introduce un número de cuenta negativo

let cuenta = prompt("Introduce el número de cuenta para buscar");

mostrarDatos(cuenta);

let sumaTotal = sumaAcreedor();
document.write(`<p>La suma de los saldos acreedores es: ${sumaTotal}</p>`);

//FUNCIONES

function mostrarDatos(cuenta) {

    let cuentaEncontrada = array.find(c => c.numeroCuenta == cuenta);
    
    if (cuentaEncontrada) {
        let estado = estadoCuenta(cuentaEncontrada.saldoActual);

        document.write(`<p>Número de Cuenta: ${cuentaEncontrada.numeroCuenta}</p>`);
        document.write(`<p>Nombre: ${cuentaEncontrada.nombre}</p>`);
        document.write(`<p>Saldo Actual: ${cuentaEncontrada.saldoActual}</p>`);
        document.write(`<p>Estado actual: ${estado}</p>`);
    } else {
        document.write(`<p>Cuenta no encontrada</p>`);
    }

}

function estadoCuenta(saldo) {
    if (saldo > 0) 
        return "Acreedor";
    else if (saldo < 0) 
        return "Deudor";
    else 
        return "Nulo";
}

function sumaAcreedor() {
    let suma = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].saldoActual > 0) {
            suma += array[i].saldoActual;
        }
    }

    return suma;
}

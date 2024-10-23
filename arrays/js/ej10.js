let array = [];

numeroCuenta = parseInt(prompt("Introduce el número de cuenta (introduce 0 para parar)"));

while (numeroCuenta != 0) {
     
    let edad = parseInt(prompt("Introduce la edad"));
    let sexo = prompt("Introduce el sexo (M/F)").toUpperCase();

    array.push({
        numeroCuenta: numeroCuenta,
        edad: edad,
        sexo: sexo
    });

    numeroCuenta = parseInt(prompt("Introduce el número de cuenta (introduce 0 para parar)"));

};  // El bucle termina si se introduce un número de cuenta 0

cantidadTotal = array.length;
cantidadHombres = array.filter(item => item.sexo === 'M').length;
cantidadMujeres = array.filter(item => item.sexo === 'F').length;
cantidadHombresMayores = array.filter(item => item.sexo === 'M' && ( item.edad >= 16 && item.edad <= 65)).length;

document.write(`Cantidad total de personas: ${cantidadTotal}<br>`);
document.write(`Cantidad de hombres: ${cantidadHombres}<br>`);
document.write(`Cantidad de mujeres: ${cantidadMujeres}<br>`);
document.write(`Cantidad de hombres mayores de 16 y menores de 65: ${cantidadHombresMayores}<br>`);
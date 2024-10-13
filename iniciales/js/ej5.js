
let array = ['blanco', 'negro', 'azul', 'verde', 'gris'];

let color = prompt("Introduce un color: ");

array.push(color); // Introduce el valor de la variable en el ultimo indice del array

array.forEach(function(elemento) {
    document.write('["' + elemento + '"] - ');
});
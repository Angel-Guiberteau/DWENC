
// let array = [1,2,3,4,50,6,7,8,9,10];

// array.forEach(function(elemento) {
//     document.write(elemento + ' , ');
// });

// let max = Math.max(...array); // Muestra el valor mas grande

// document.write("el elemento mayor es: " + max);

let array2 = [];

do{
    let n1 = parseInt(prompt("Introduce un numero: "));
    array2.push(n1);
}while (mensaje() !== "stop")

let max = Math.max(...array2);

document.write("El array completo es:");

array2.forEach(function(elemento) {
    document.write(' [' + elemento + '] ');
});

document.write(" y el elemento mayor es: " + max);

function mensaje(){
    return prompt("Introduce stop si quieres parar: ");
}

let n1 = parseInt(prompt("Introduce un número"));

let n2 = parseInt(prompt("Introduce el numero hasta el que quieres contar"));

for (let i = 0; i <= n2; i++){
    document.write(n1 + ' * ' + i + '=' + n1*i + "<br>");
}
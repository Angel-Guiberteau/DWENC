
let array = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < array.length; i++) {
    let resultado = comprobar(array[i]);
    document.write(resultado);
}

function comprobar(numero) {

    if (numero % 2 === 0) 
        return `El número del indice [${numero}] es par <br>`;
    else
        return `El número del indice [${numero}] es impar <br>`;

}   
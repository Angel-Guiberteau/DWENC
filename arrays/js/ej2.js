
let array = [5,6,9,2,10,8,7,4,3,10];

for (i=0; i < array.length; i++) {
   
    let resultado = comprobar(array[i]);

    if (resultado)
        document.write(`La nota ${i + 1} es >= a un 7 <br>`);
    else
        document.write(`La nota ${i + 1} es < a un 7 <br>`);

}

function comprobar(n){

    if (n >= 7)
        return true;
    else
        return false;

}

let n1 = window.prompt("Introduce un número");

if (!parseInt(n1)){ 
    document.write("No has introducido ningún número");
}
else{
    Par(n1);
}


function Par(n1){

    if ( n1 % 2 == 0 ){
        document.write("El número introducido es par");
    }
    else{
        document.write("El número es impar");
    }

}

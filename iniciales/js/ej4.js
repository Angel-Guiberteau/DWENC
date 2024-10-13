
const ano_actual = new Date().getFullYear(); //Obtener el año actual

let nacimiento = parseInt(prompt("Introduce tu año de nacimiento"));

let edad = ano_actual - nacimiento;

document.write("Tienes " + edad + " años");

if(edad >= 18){
    document.write(" y eres mayor de edad");
}else{
    document.write(" y eres menor de edad");
}
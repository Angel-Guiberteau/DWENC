

let empleados = [
    {nombre: '', salario: ''},
    {nombre: '', salario: ''},
    {nombre: '', salario: ''},
    {nombre: '', salario: ''}, 
    {nombre: '', salario: ''}
]

introducirDatos(empleados);
let menores = menores300(empleados);
let mayores = mayores300(empleados);
let total = sumaTotal(empleados);
mostrarDatos(empleados,menores,mayores, total);


function introducirDatos(empleados){
    for (let i = 0; i < empleados.length; i++) {
        empleados[i].nombre = prompt('Introduce el nombre del empleado');
        do{
            empleados[i].salario = parseInt(prompt('Introduce el salario del empleado'));
        }while(empleados[i].salario < 100 || empleados[i].salario > 500);
    }
}

function menores300(empleados){
    let contador = 0;
    for (let i = 0; i < empleados.length; i++) {
        if(empleados[i].salario < 300){
            contador++;
        }
    }
    return contador;
}

function mayores300(empleados){
    let contador = 0;
    for (let i = 0; i < empleados.length; i++) {
        if(empleados[i].salario > 300){
            contador++;
        }
    }
    return contador;
}

function sumaTotal(empleados){
    let total = 0;
    for (let i = 0; i < empleados.length; i++) {
        total += empleados[i].salario;
    }
    return total;
}

function mostrarDatos(empleados, menores, mayores, total){
    for (let i = 0; i < empleados.length; i++) {
        document.write(`Empleado ${i+1}: ${empleados[i].nombre} - ${empleados[i].salario}<br>`);
    }

    document.write(`Empleados con salario menor a 300: ${menores}<br>`);
    document.write(`Empleados con salario mayor a 300: ${mayores}<br>`);
    document.write(`Total de gasto en salarios: ${total}`);
}
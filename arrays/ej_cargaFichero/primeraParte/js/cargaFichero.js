let empleadosArray = [];

let datoEmpleados = 
`12345,Javier Arias Carroza,45,Masculino,Gerente
67890,Pablo Caldito Gomez,33,Masculino,Desarrollador
11223,Levi Josue Candeias de Figueiredo,29,Masculino,Analista
44556,Jose Luis del Valle del Pino,50,Masculino,Contador
33445,David Fariña Morena,40,Masculino,Diseñador
22883,Alvaro Gomez Delgado,31,Masculino,Desarrollador
56789,Fernando Jose Gonzalez Bernaldez,38,Masculino,Consultor
34567,Angel Guiberteau Franco,47,Masculino,Administrador
12333,Paloma Hernandez Sanchez,28,Femenino,Marketing
67676,Miriam Lopez Vega,34,Femenino,Recursos Humanos
99887,Ceus Martin Llera,29,Masculino,Asistente
77665,Celia Moruno Herrojo,32,Femenino,Analista
55665,Ismael Paz Bernal,41,Masculino,Gerente de Proyecto
66778,Mauricio Peña Dominguez,36,Masculino,Auditor
88777,Carlos Rodriguez Botello,45,Masculino,Programador
33211,Alberto Sanchez Diaz,39,Masculino,Ingeniero
99123,David Silva Vega,35,Masculino,Soporte Técnico
78111,Hugo Sanchez Gallardo,28,Masculino,Diseñador
66112,Joaquin Francisco Telo Nuñez,52,Masculino,Director Financiero
11234,Maria Vidigal Barroso,30,Femenino,Contadora `;

let lineas = datoEmpleados.trim().split('\n');

for (let i = 0; i < lineas.length; i++) {
    let [id, nombre, edad, sexo, puesto] = lineas[i].split(',');
    empleadosArray.push({
        id,
        nombre,
        edad: parseInt(edad),
        sexo,
        puesto
    });
}

console.log(empleadosArray);

mostrarDatos(empleadosArray); // Muestra todos los datos

let buscar = (prompt('Introduce el id del empleado a buscar'));

buscarEmpleado(empleadosArray,buscar); // Buscar empleado por id

añadirEmpleado(empleadosArray); // Añade empleado

let eliminar = (prompt('Introduce el id del empleado a eliminar'));

eliminarEmpleado(empleadosArray,eliminar); // Elimina empleado por id

console.log(empleadosArray);


// FUNCIONES

    //FUNCION PARA MOSTRAR TODOS LOS DATOS

function mostrarDatos(empleados) {

    for (let i = 0; i < empleados.length; i++) {
        console.log(`ID: ${empleados[i].id} Nombre: ${empleados[i].nombre} Edad: ${empleados[i].edad} Sexo: ${empleados[i].sexo} Puesto: ${empleados[i].puesto}`);
    }

}

    //FUNCION PARA BUSCAR EMPLEADO POR ID Y MOSTRAR SUS DATOS

function buscarEmpleado(empleados, buscar) {

    let encontrado = empleados.find(e => e.id == buscar);

    if (encontrado){
        console.log(`Empleado encontrado: ID: ${encontrado.id} Nombre: ${encontrado.nombre} Edad: ${encontrado.edad} Sexo: ${encontrado.sexo} Puesto: ${encontrado.puesto}`);
    }
    else {
        console.log('Empleado no encontrado');
    }

}

    //FUNCION PARA AÑADIR EMPLEADO

function añadirEmpleado(empleados) {


    let id = prompt("Id del nuevo empleado");
    let nombre = prompt("Nombre del nuevo empleado");
    let edad = parseInt(prompt("Edad del nuevo empleado"));
    let sexo = prompt("Sexo del nuevo empleado");
    let puesto = prompt("Puesto del nuevo empleado");

    empleados.push({
        id,
        nombre,
        edad,
        sexo,
        puesto
    });

}

    //FUNCION PARA ELIMINAR EMPLEADO POR ID

function eliminarEmpleado(empleados, eliminar) {

    let indice = empleados.findIndex(e => e.id == eliminar);

    if (indice != -1)
    {
        empleados.splice(indice,1); 
    }
    else
        console.log('Empleado no encontrado');

    

}
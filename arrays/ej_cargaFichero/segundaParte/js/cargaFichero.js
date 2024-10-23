'use strict'

let empleadosArray = [];

window.addEventListener("load", function (event) {

    function cargarFichero() {
        fetch("empleados2DAW.txt")
            .then(response => {
                if(!response.ok)
                    throw new Error("Error al cargar el archivo");
                return response.text();
            })
            .then(data => {
                procesarDatos(data);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    }

    function procesarDatos(datos) {
        let lineas = datos.trim().split('\n');

        for (let i = 0; i < lineas.length; i++) {
            let [id, nombre, edad, sexo, puesto] = lineas[i].split(',');
            empleadosArray.push({
                numeroDocumento: id,
                nombre,
                edad: parseInt(edad),
                sexo,
                puesto
            });
        }

        // Mostrar datos una vez procesados
        mostrarEmpleados(empleadosArray);
    }

    // Función para mostrar los empleados utilizando document.write
    let mostrarEmpleados = (empleados) => {
        empleados.forEach((valor, indice) => {
            document.write(`<p>Número de documento: ${valor.numeroDocumento}</p>`);
            document.write(`<p>Nombre: ${valor.nombre}</p>`);
            document.write(`<p>Edad: ${valor.edad}</p>`);
            document.write(`<p>Sexo: ${valor.sexo}</p>`);
            document.write(`<p>Puesto: ${valor.puesto}</p>`);
            document.write(`<hr>`);
        });
    }

    // "Main"
    cargarFichero();
});



function mostrar() {
    const url = 'https://rickandmortyapi.com/api/character/';
    fetch(url) // Hacer una petición a la API
        .then(respuesta => respuesta.json()) // Convertir la respuesta a JSON
        .then(datos => { // Procesar los datos obtenidos
            datos.results.forEach(element => { // Recorremos el objeto que queremos del array datos
                document.write(`<img src="${element.image}">`); //mostramos la imagen 
            });
        })
        document.write(`<div><a href="index.html">Volver</a></div>`);

}

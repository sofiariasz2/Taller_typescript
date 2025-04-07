var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }
    return Serie;
}());
// No necesitas importar Serie porque estará en el mismo archivo después de la compilación
var series = [
    new Serie(1, "Breaking Bad", "AMC", 5),
    new Serie(2, "Orange Is the New Black", "Netflix", 6),
    new Serie(3, "Game of Thrones", "HBO", 7),
    new Serie(4, "The Big Bang Theory", "CBS", 12),
    new Serie(5, "Sherlock", "BBC", 4),
    new Serie(6, "A Very English Scandal", "BBC", 2)
];
// No necesitas importar series porque estará en el mismo archivo después de la compilación
// Función para cargar las series en la tabla
function loadSeries() {
    console.log("Cargando series...", series); // Para depuración
    var tableBody = document.querySelector("#series-table tbody");
    if (tableBody) {
        series.forEach(function (serie) {
            var row = document.createElement("tr");
            row.innerHTML = "\n                <td>".concat(serie.id, "</td>\n                <td>").concat(serie.name, "</td>\n                <td>").concat(serie.channel, "</td>\n                <td>").concat(serie.seasons, "</td>\n            ");
            tableBody.appendChild(row);
        });
    }
    else {
        console.error("No se encontró el cuerpo de la tabla");
    }
}
// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadSeries);

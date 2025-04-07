"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
// Función para cargar las series en la tabla
function loadSeries() {
    console.log("Cargando series...", data_js_1.series); // Para depuración
    var tableBody = document.querySelector("#series-table tbody");
    if (tableBody) {
        data_js_1.series.forEach(function (serie) {
            var row = document.createElement("tr");
            row.innerHTML = "\n                <td>".concat(serie.id, "</td>\n                <td>").concat(serie.name, "</td>\n                <td>").concat(serie.channel, "</td>\n                <td>").concat(serie.seasons, "</td>\n            ");
            tableBody.appendChild(row);
        });
    }
    else {
        console.error("No se encontró el cuerpo de la tabla");
    }
}
// Ejecutar inmediatamente y también cuando el DOM esté listo
loadSeries();
document.addEventListener('DOMContentLoaded', loadSeries);

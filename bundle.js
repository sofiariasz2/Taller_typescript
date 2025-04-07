define("serie", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Serie = void 0;
    var Serie = /** @class */ (function () {
        function Serie(id, name, channel, seasons) {
            this.id = id;
            this.name = name;
            this.channel = channel;
            this.seasons = seasons;
        }
        return Serie;
    }());
    exports.Serie = Serie;
});
define("data", ["require", "exports", "serie"], function (require, exports, serie_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.series = void 0;
    exports.series = [
        new serie_1.Serie(1, "Breaking Bad", "AMC", 5),
        new serie_1.Serie(2, "Orange Is the New Black", "Netflix", 6),
        new serie_1.Serie(3, "Game of Thrones", "HBO", 7),
        new serie_1.Serie(4, "The Big Bang Theory", "CBS", 12),
        new serie_1.Serie(5, "Sherlock", "BBC", 4),
        new serie_1.Serie(6, "A Very English Scandal", "BBC", 2)
    ];
});
define("main", ["require", "exports", "data"], function (require, exports, data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadSeries = loadSeries;
    // Función para cargar las series en la tabla
    function loadSeries() {
        console.log("Cargando series...", data_1.series); // Para depuración
        var tableBody = document.querySelector("#series-table tbody");
        if (tableBody) {
            data_1.series.forEach(function (serie) {
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
});

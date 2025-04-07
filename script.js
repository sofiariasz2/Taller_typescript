// Definición de la clase Serie
class Serie {
  constructor(id, name, channel, seasons) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
  }
}

// Datos de series
const series = [
  new Serie(1, "Breaking Bad", "AMC", 5),
  new Serie(2, "Orange Is the New Black", "Netflix", 6),
  new Serie(3, "Game of Thrones", "HBO", 7),
  new Serie(4, "The Big Bang Theory", "CBS", 12),
  new Serie(5, "Sherlock", "BBC", 4),
  new Serie(6, "A Very English Scandal", "BBC", 2)
];

// Función para cargar las series
function loadSeries() {
  console.log("Cargando series...", series);
  
  const tableBody = document.querySelector("#series-table tbody");
  
  if (tableBody) {
    series.forEach(serie => {
      const row = document.createElement("tr");
      
      row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
      
      tableBody.appendChild(row);
    });
  } else {
    console.error("No se encontró el cuerpo de la tabla");
  }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadSeries); 
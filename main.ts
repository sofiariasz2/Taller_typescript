// Este archivo ya no es necesario porque toda la funcionalidad
// ha sido movida a serie.ts

// No necesitas importar series porque estará en el mismo archivo después de la compilación
// Elimina esta función ya que ahora está en serie.ts
// function loadSeries(): void {
//     console.log("Loading series...", series);
//     
//     const tableBody = document.querySelector("#series-table tbody");
//     
//     if (tableBody) {
//         series.forEach(serie => {
//             const row = document.createElement("tr");
//             
//             row.innerHTML = `
//                 <td>${serie.id}</td>
//                 <td>${serie.name}</td>
//                 <td>${serie.channel}</td>
//                 <td>${serie.seasons}</td>
//             `;
//             
//             tableBody.appendChild(row);
//         });
//     } else {
//         console.error("Table body not found");
//     }
// }

// Elimina también este event listener ya que ahora está en serie.ts
// document.addEventListener('DOMContentLoaded', loadSeries);


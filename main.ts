// No necesitas importar series porque estará en el mismo archivo después de la compilación
// Function to load the series into the table
function loadSeries(): void {
    console.log("Loading series...", series);
    
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
        console.error("Table body not found");
    }
}

// Execute when the DOM is ready
document.addEventListener('DOMContentLoaded', loadSeries);


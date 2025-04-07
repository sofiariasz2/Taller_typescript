namespace SeriesApp {
  interface Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    website: string;
    poster: string;
  }

  const series: Serie[] = [
    {
      id: 1,
      name: "Breaking Bad",
      channel: "AMC",
      seasons: 5,
      description: "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer",
      website: "https://www.amc.com/shows/breaking-bad",
      poster: "https://wallpapers.com/images/hd/grunge-yellow-breaking-bad-poster-bkbu0hjpevu9ouog.jpg"
    },
    {
      id: 2,
      name: "Orange Is the New Black",
      channel: "Netflix",
      seasons: 6,
      description: "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary",
      website: "https://www.netflix.com/title/70242311",
      poster: "https://m.media-amazon.com/images/M/MV5BYjYyM2FmMmMtZDgyZi00NGU3LWI3NzktODllZDY0YzQyNzgyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
      id: 3,
      name: "Game of Thrones",
      channel: "HBO",
      seasons: 7,
      description: "American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels.",
      website: "https://www.hbo.com/game-of-thrones",
      poster: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
    },
    {
      id: 4,
      name: "The Big Bang Theory",
      channel: "CBS",
      seasons: 12,
      description: "The show originally centered on five characters living in Pasadena, California: Leonard Hofstadter and Sheldon Cooper, both physicists at Caltech, who share an apartment",
      website: "https://www.cbs.com/shows/big_bang_theory/",
      poster: "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg"
    },
    {
      id: 5,
      name: "Sherlock",
      channel: "BBC",
      seasons: 4,
      description: "Sherlock depicts consulting detective Sherlock Holmes solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr. John Watson",
      website: "https://www.bbc.co.uk/programmes/b018ttws",
      poster: "https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
    },
    {
      id: 6,
      name: "A Very English Scandal",
      channel: "BBC",
      seasons: 2,
      description: "British television comedy-drama series based on John Preston's book of the same name. The series is a dramatisation of the 1976–1979 Jeremy Thorpe scandal",
      website: "https://www.bbc.co.uk/programmes/p065smy4",
      poster: "https://m.media-amazon.com/images/M/MV5BNTE4OTIwNWQtZjNkOC00MzhhLTgwYTgtNjliYTM0OTEwYzgxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    }
  ];

  // Función para cargar las series en la tabla
  function loadSeries(): void {
    const seriesBody = document.getElementById('series-body');
    if (!seriesBody) return;

    seriesBody.innerHTML = '';
    
    series.forEach(serie => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${serie.id}</td>
        <td class="serie-name" data-id="${serie.id}">${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
      seriesBody.appendChild(row);
    });

    // Calcular y mostrar el promedio de temporadas
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const average = totalSeasons / series.length;
    
    const seasonsAverage = document.getElementById('seasons-average');
    if (seasonsAverage) {
      seasonsAverage.innerHTML = `Seasons average: ${average.toFixed(1)}`;
    }

    // Agregar event listeners a los nombres de las series
    const serieNames = document.querySelectorAll('.serie-name');
    serieNames.forEach(name => {
      name.addEventListener('click', function(this: HTMLElement) {
        const serieId = parseInt(this.getAttribute('data-id') || '0');
        showSerieDetail(serieId);
      });
    });
  }

  // Función para mostrar el detalle de una serie
  function showSerieDetail(serieId: number): void {
    const serie = series.find(s => s.id === serieId);
    if (!serie) return;

    const detailContainer = document.getElementById('serie-detail');
    if (!detailContainer) return;

    detailContainer.innerHTML = `
      <div class="card">
        <img src="${serie.poster}" class="card-img-top" alt="${serie.name}" onerror="this.src='https://via.placeholder.com/300x450?text=No+Image+Available'">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <a href="${serie.website}" class="card-link" target="_blank">${serie.website}</a>
        </div>
      </div>
    `;
  }

  // Inicializar la aplicación cuando el DOM esté cargado
  document.addEventListener('DOMContentLoaded', () => {
    loadSeries();
  });
}
  
async function imagesFilmesSeries(titulo) {
  let url = `http://www.omdbapi.com/?apikey=b95abd07&t=${titulo}`;
  const response = await fetch(url);
  const image = await response.json();
  return image.Poster;
}

document.getElementById("comentario").addEventListener("click", function () {
  var modal = new bootstrap.Modal(document.getElementById("comentariosModal"));
  modal.show();
});

async function listarFilmes() {
  try {
    const response = await fetch(url_api_back + "Film");
    const data = await response.json();

    const filmesContainer = document.getElementById("filmesContainer");
    filmesContainer.innerHTML = "";

    for (const filme of data) {
      const card = document.createElement("div");
      card.classList.add("col-lg-4");
      const imageSrc = await imagesFilmesSeries(filme.titulo);

      card.innerHTML = `
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src="${imageSrc}" alt="${filme.titulo}" style="width: 404px; height: 400px;" />
            <div class="card-body">
              <h5 class="card-title">${filme.titulo}</h5>
              <p class="card-text">Diretor: ${filme.diretor}</p>
              <p class="card-text">Elenco: ${filme.elenco}</p>
              <p class="card-text">País: ${filme.pais}</p>
              <p class="card-text">Ano: ${filme.ano}</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary avaliar-btn" data-id="${filme.id}" data-tipo="Filme">Avaliações: ${filme.avaliacao}</span></button>
            </div>
            <button type="button" class="btn btn-primary" id="comentario">
              Comentarios
            </button>
          </div>
        </div>
      `;
      filmesContainer.appendChild(card);
    }

    const botoesAvaliacao = document.querySelectorAll(".avaliar-btn");
    botoesAvaliacao.forEach((botao) => {
      botao.addEventListener("click", function () {
        const Id = this.getAttribute("data-id");
        const tipoMidia = this.getAttribute("data-tipo");
        adicionarAvaliacao(Id, tipoMidia);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

async function listarSeries() {
  try {
    const response = await fetch(url_api_back + "Series");
    const data = await response.json();

    const seriesContainer = document.getElementById("seriesContainer");
    seriesContainer.innerHTML = "";

    for (const serie of data) {
      const card = document.createElement("div");
      card.classList.add("col-lg-4");

      const imageSrc = await imagesFilmesSeries(serie.titulo);

      card.innerHTML = `
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src="${imageSrc}" alt="${serie.titulo}" style="width: 404px; height: 400px;" />
            <div class="card-body">
              <h5 class="card-title">${serie.titulo}</h5>
              <p class="card-text">Diretor: ${serie.diretor}</p>
              <p class="card-text">Elenco: ${serie.elenco}</p>
              <p class="card-text">País: ${serie.pais}</p>
              <p class="card-text">Ano: ${serie.anoLancamento}</p>
              <p class="card-text">Temporadas: ${serie.numeroTemporadas}</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary avaliar-btn" data-id="${serie.id}" data-tipo="Serie">Avaliações: ${serie.avaliacao}</span></button>
            </div>
          </div>
        </div>
      `;
      seriesContainer.appendChild(card);
    }
    const botoesAvaliacao = document.querySelectorAll(".avaliar-btn");
    botoesAvaliacao.forEach((botao) => {
      botao.addEventListener("click", function () {
        const Id = this.getAttribute("data-id");
        const tipoMidia = this.getAttribute("data-tipo");
        adicionarAvaliacao(Id, tipoMidia);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

async function listarLivros() {
  try {
    const response = await fetch(url_api_back + "Book");
    const data = await response.json();

    const livrosContainer = document.getElementById("livrosContainer");
    livrosContainer.innerHTML = "";

    for (const livro of data) {
      const card = document.createElement("div");
      card.classList.add("col-lg-4");

      card.innerHTML = `
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src="" alt="${livro.titulo}" style="width: 404px; height: 400px;" />
            <div class="card-body">
              <h5 class="card-title">${livro.titulo}</h5>
              <p class="card-text">Autor: ${livro.autor}</p>
              <p class="card-text">Editora: ${livro.editora}</p>
              <p class="card-text">País: ${livro.pais}</p>
              <p class="card-text">Ano: ${livro.ano}</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary avaliar-btn" data-id="${livro.id}" data-tipo="Livro">Avaliações: ${livro.avaliacao}</span></button>
              <button class="btn btn-primary comentarios-btn" data-id="${livro.id}" data-tipo="Livro">Comentários</button>
            </div>
          </div>
        </div>
      `;
      livrosContainer.appendChild(card);
    }
    const botoesAvaliacao = document.querySelectorAll(".avaliar-btn");
    botoesAvaliacao.forEach((botao) => {
      botao.addEventListener("click", function () {
        const Id = this.getAttribute("data-id");
        const tipoMidia = this.getAttribute("data-tipo");
        adicionarAvaliacao(Id, tipoMidia);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

async function adicionarAvaliacao(Id, tipoMidia) {
  try {
    // Envie o ID do filme e o tipo de mídia para o backend
    const response = await fetch(url_api_back + "User/avaliacoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tipo: tipoMidia,
        id: Id,
      }),
    });
    const result = await response.json();
    console.log(result); // Faça o que for necessário com a resposta do backend
  } catch (error) {
    console.error(error);
  }
}

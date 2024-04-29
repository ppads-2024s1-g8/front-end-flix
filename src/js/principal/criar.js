function criarFilmes() {
  let Titulo = document.getElementById("tituloFilme").value;
  let Diretor = document.getElementById("diretorFilme").value;
  let Elenco = document.getElementById("elencoFilme").value;
  let Pais = document.getElementById("paisFilme").value;
  let Ano = document.getElementById("anoFilme").value;

  let erros = [];

  const data = {
    titulo: Titulo,
    diretor: Diretor,
    elenco: Elenco,
    pais: Pais,
    ano: Ano,
  };

  if (Titulo == "" || temNumeroNoMeio(Titulo)) {
    erros.push("O Titulo não pode ser vazio ou conter numeros!\n");
  }
  if (Diretor == "" || temNumeroNoMeio(Diretor)) {
    erros.push("O Diretor não pode ser vazio ou conter numeros!\n");
  }
  if (Elenco == "" || temNumeroNoMeio(Elenco)) {
    erros.push("O Elenco não pode ser vazio ou conter numeros!\n");
  }
  if (Pais == "" || temNumeroNoMeio(Pais)) {
    erros.push("O Pais não pode ser vazio ou conter numeros!\n");
  }
  if (Ano == "") {
    erros.push("O Ano não pode ser vazio ou conter letras!\n");
  }

  if (erros.length == 0) {
    fetch(url_api_back + "Film", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        alert("O filme " + result.filmTitulo + " foi cadastrado com sucesso !");
        location.reload();
      })
      .catch((error) => {
        Swal.fire({
          title: "Erro",
          text: "Houver um erro ao salvar os dados" + error,
          icon: "error",
        });
      });
  } else {
    alert("Preencha os campos corretamente");
  }
  return false;
}

function criarSeries() {
  let Titulo = document.getElementById("tituloSerie").value;
  let Diretor = document.getElementById("diretorSerie").value;
  let Elenco = document.getElementById("elencoSerie").value;
  let Pais = document.getElementById("paisSerie").value;
  let Ano = document.getElementById("anoSerie").value;
  let Temporadas = document.getElementById("temporadas").value;

  let erros = [];

  const data = {
    titulo: Titulo,
    diretor: Diretor,
    elenco: Elenco,
    pais: Pais,
    ano: Ano,
    temporadas: Temporadas,
  };

  if (Titulo == "" || temNumeroNoMeio(Titulo)) {
    erros.push("O Titulo não pode ser vazio ou conter numeros!\n");
  }
  if (Diretor == "" || temNumeroNoMeio(Diretor)) {
    erros.push("O Diretor não pode ser vazio ou conter numeros!\n");
  }
  if (Elenco == "" || temNumeroNoMeio(Elenco)) {
    erros.push("O Elenco não pode ser vazio ou conter numeros!\n");
  }
  if (Pais == "" || temNumeroNoMeio(Pais)) {
    erros.push("O Pais não pode ser vazio ou conter numeros!\n");
  }
  if (Ano == "") {
    erros.push("O Ano não pode ser vazio ou conter letras!\n");
  }
  if (Temporadas == "") {
    erros.push("O numero de temporadas não pode ser vazio ou conter letras!\n");
  }

  if (erros.length == 0) {
    fetch(url_api_back + "Series", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(
          "A serie " + result.serieTitulo + " foi cadastrado com sucesso !"
        );
        location.reload();
      })
      .catch((error) => {
        Swal.fire({
          title: "Erro",
          text: "Houver um erro ao salvar os dados" + error,
          icon: "error",
        });
      });
  } else {
    alert("Preencha os campos corretamente");
  }
  return false;
}

function criarLivro() {
  let Titulo = document.getElementById("tituloLivro").value;
  let Autor = document.getElementById("autor").value;
  let Editora = document.getElementById("editora").value;
  let Pais = document.getElementById("paisLivro").value;
  let Ano = document.getElementById("anoLivro").value;

  let erros = [];

  const data = {
    titulo: Titulo,
    autor: Autor,
    editora: Editora,
    pais: Pais,
    ano: Ano,
  };

  if (Titulo == "" || temNumeroNoMeio(Titulo)) {
    erros.push("O Titulo não pode ser vazio ou conter numeros!\n");
  }
  if (Autor == "" || temNumeroNoMeio(Autor)) {
    erros.push("O Diretor não pode ser vazio ou conter numeros!\n");
  }
  if (Editora == "" || temNumeroNoMeio(Editora)) {
    erros.push("O Elenco não pode ser vazio ou conter numeros!\n");
  }
  if (Pais == "" || temNumeroNoMeio(Pais)) {
    erros.push("O Pais não pode ser vazio ou conter numeros!\n");
  }
  if (Ano == "") {
    erros.push("O Ano não pode ser vazio ou conter letras!\n");
  }

  if (erros.length == 0) {
    fetch(url_api_back + "Book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        alert("O livro " + result.bookTitulo + " foi cadastrado com sucesso !");
        location.reload();
      })
      .catch((error) => {
        Swal.fire({
          title: "Erro",
          text: "Houver um erro ao salvar os dados" + error,
          icon: "error",
        });
      });
  } else {
    alert("Preencha os campos corretamente");
  }
  return false;
}

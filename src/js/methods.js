function excluir(id) {
  fetch(url_api_back + "/Film/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      alert("O filme " + data.titulo + " foi apagado com sucesso !");
      listar();
    })
    .catch((error) => {
      alert("Ocorreu um erro ao deletar o filme! ", error);
    });
}

function atualizar(id) {
  fetch(url_api_back + "/Film/" + id, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("titulo").value = data.titulo;
      document.getElementById("diretor").value = data.diretor;
      document.getElementById("elenco").value = data.elenco;
      document.getElementById("pais").value = data.pais;
      document.getElementById("ano").value = data.ano;
    })
    .catch((error) => {
      console.error(error);
    });
}

function UpdateAsync() {
  let id = filmeEmEdicao;
  let Titulo = document.getElementById("titulo").value;
  let Diretor = document.getElementById("diretor").value;
  let Elenco = document.getElementById("elenco").value;
  let Pais = document.getElementById("pais").value;
  let Ano = document.getElementById("ano").value;
  const data = {
    titulo: Titulo,
    diretor: Diretor,
    elenco: Elenco,
    pais: Pais,
    ano: Ano,
  };

  fetch(url_api_back + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("O filme " + data.titulo + " foi atualizado com sucesso !");
      location.reload();
    })
    .catch((error) => {
      alert("Ocorreu um erro ao atualizar filme: " + data.titulo, error);
    });
  return false;
}

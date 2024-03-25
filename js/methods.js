var condition = false;
var filmeEmEdicao;

function listar() {
  document.getElementById("form").style.display = "none";

  fetch("https://localhost:7256/Film", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      renderizar(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function renderizar(Filmes) {
  let tabela = document.querySelector("#tabela tbody");
  while (tabela.firstChild) {
    tabela.removeChild(tabela.firstChild);
  }
  for (let filme of Filmes) {
    let linha = `
        <tr>
          <td>${filme.id}</td>
          <td>${filme.titulo}</td>
          <td>${filme.diretor}</td>
          <td>${filme.elenco}</td>
          <td>${filme.pais}</td>
          <td>${filme.ano}</td>
          <td>
            <a href="javascript: excluir(${filme.id});">Excluir</a>
          </td>
          <td>
            <a href="javascript: atualizar(${filme.id});">Atualizar</a>
          </td>
        </tr>
    `;
    let tr = document.createElement("tr");
    tr.innerHTML = linha;
    tabela.appendChild(tr);
  }
}

function excluir(id) {
  fetch("https://localhost:7256/Film/" + id, {
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
  document.getElementById("form").style.display = "block";
  document.getElementById("button-atualizar").style.display = "block";

  filmeEmEdicao = id;
  fetch("https://localhost:7256/Film/" + id, {
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

  fetch("https://localhost:7256/Film/" + id, {
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

function CreateAsync() {
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

  fetch("https://localhost:7256/Film", {
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
      alert("Ocorreu um erro ao cadastrar: " + result.filmTitulo, error);
    });

  return false;
}

function hideShowForm() {
  document.getElementById("button-atualizar").style.display = "none";
  if (condition == false) {
    document.getElementById("form").style.display = "block";
    condition = true;
  } else {
    document.getElementById("form").style.display = "none";
    condition = false;
  }
}

function hideShowTable() {
  if (condition == false) {
    document.getElementById("tabela").style.display = "block";
    condition = true;
  } else {
    document.getElementById("tabela").style.display = "none";
    condition = false;
  }
}

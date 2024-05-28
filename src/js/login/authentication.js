var url_api_back = "https://backend-flix.azurewebsites.net/";

document
  .getElementById("form-login")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    autenticarUsuario();
  });

async function autenticarUsuario() {
  let Usuario = document.getElementById("username").value;
  let Senha = document.getElementById("password").value;

  const data = {
    Username: Usuario,
    Password: Senha,
  };

  fetch(url_api_back + "User/Login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "Usuário Autenticado") {
        window.location.href = "principal.html";
      } else {
        alert("Usuario ou senha errados ");
      }
    });

  return false;
}

document
  .getElementById("form-cadastro")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrarUsuario();
});

async function cadastrarUsuario() {
  let Usuario = document.getElementById("cadastro-username").value;
  let Nascimento = document.getElementById("cadastro-birthdate").value;
  let Senha = document.getElementById("cadastro-password").value;
  let ConfirmacaoSenha = document.getElementById("cadastro-confirm-password").value;

  // Verificar se as senhas coincidem
  if (Senha !== ConfirmacaoSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  const data = {
    username: Usuario,
    dataDeNascimento: Nascimento,
    password: Senha,
    rePassword: ConfirmacaoSenha
  };

  fetch(url_api_back + "User/Cadastro", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((result) => {
      alert(result + " cadastrado com sucesso!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error('Erro ao cadastrar usuário:', error);
      alert("Erro ao cadastrar usuário");
    });
}
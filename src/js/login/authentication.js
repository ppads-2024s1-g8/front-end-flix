var url_api_back = "https://localhost:7256/";

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

  fetch(url_api_back + "User/login", {
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

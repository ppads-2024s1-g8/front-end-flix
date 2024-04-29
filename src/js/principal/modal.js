document.getElementById("criar-filme").addEventListener("click", function () {
  var modal = new bootstrap.Modal(document.getElementById("modalCriarFilme"));
  modal.show();
});
document.getElementById("criar-livro").addEventListener("click", function () {
  var modal = new bootstrap.Modal(document.getElementById("modalCriarLivro"));
  modal.show();
});
document.getElementById("criar-serie").addEventListener("click", function () {
  var modal = new bootstrap.Modal(document.getElementById("modalCriarSerie"));
  modal.show();
});
document.getElementById("editar-perfil").addEventListener("click", function () {
  var modal = new bootstrap.Modal(
    document.getElementById("modalAtualizarUsuario")
  );
  modal.show();
});

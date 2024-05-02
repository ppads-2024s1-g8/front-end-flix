function temNumeroNoMeio(string) {
  var regex = /.*\d+.*$/;
  return regex.test(string);
}

var filmeEmEdicao;
var url_api_back = "https://backend-flix.azurewebsites.net/";
var url_filmes_series = "http://www.omdbapi.com/?apikey=b95abd07&t=";

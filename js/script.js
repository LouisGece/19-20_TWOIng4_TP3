
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);
      var ville = "";

      if(document.getElementById('searchTxt').value)
      {
        ville = document.getElementById('searchTxt').value + " : <br><br>";
      }
      else
      {
        ville = "Paris : <br><br>"
      }

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = ville + main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
/*
function getThreeDayForecast()
{
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      var data = response.data;

      var ville = "";
      if(document.getElementById('searchTxt').value)
      {
        ville = document.getElementById('searchTxt').value + " : <br><br>";
      }
      else
      {
        ville = "Paris : <br><br>"
      }

      var main = [3], description = [3], temp = [3], icon = [3];

      // On récupère l'information principal
      for (var i = 0; i < 3; i++) {
        const main[i] = data.weather[0].main;
        const description[i] = data.weather[0].description;
        const temp[i] = data.main.temp;
        const icon[i] = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);
      }

      document.getElementById('today-forecast-main').innerHTML = ville + main[i];
      document.getElementById('today-forecast-more-info').innerHTML = description[i];
      document.getElementById('icon-weather-container').innerHTML = icon[i];
      document.getElementById('today-forecast-temp').innerHTML = temp[i] + `°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
    
}
*/


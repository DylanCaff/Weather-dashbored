var fetchWeather = document.getElementById("fetchWeather");

function getAPI() {
    var requestUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={614d5587d0f7ae1f2ff3e491d2d2a761}";

    fetch(requestUrl)
        .then(function)
}
var fetchWeather = document.getElementById("fetchWeather");
var apiKey = "614d5587d0f7ae1f2ff3e491d2d2a761"
var searchBtn = document.getElementById("search-btn")
function getLatLon(city) {
var geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid="+apiKey;
fetch(geoUrl).then(function(response){
    return response.json()
}).then(function(data){
    var lat = data[0].lat
    var lon = data[0].lon
    getWeather(lat,lon)
})
}
function getWeather(lat,lon) {
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
fetch(weatherUrl).then(function(response){
    return response.json()
}).then(function(data){
   console.log(data)
})
}
searchBtn.addEventListener("click", function(){
    var cityValue = document.getElementById("city-value").value
    getLatLon(cityValue)
})



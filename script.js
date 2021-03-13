let city = 'Vancouver';

let weather = {
  apikey : "0fc6feddfe7397fb225cfa9a3e731808",
  fetchWeather: function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather.apikey}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML=data.main.temp;
      document.querySelector(".icon").setAttribute("src","https://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png");
      document.querySelector(".description").innerHTML=data.weather[0].description;
      document.querySelector(".humidity").innerHTML=data.main.humidity;
      document.querySelector(".wind").innerHTML=data.wind.speed;

    })
  },
}

weather.fetchWeather();


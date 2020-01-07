var weatherAPI = '46787f6b49aba46062b95df0b46828d9';

$(document).ready(function () {

    var austinEl = $("#austin");
    var chicagoEl = $("#chicago");
    var newYorkEl = $("#newYork");
    var orlandoEl = $("#orlando");
    var sanFranciscoEl = $("#sanFrancisco");
    var seattleEl = $("#seattle");
    var denverEl = $("#denver");
    var atlantaEl = $("#atlanta");

    var citySearchBar = $("#citySearch");
    var searchBtn = $("#searchBtn");
    var curWeather = $('#curWeather');



    // Creating an AJAX call for the api link above.
    $('#searchBtn').on('click', function () {
        console.log(citySearchBar.val());

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + citySearchBar.val() + "&units=imperial&appid=" + weatherAPI,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // Display City Name
            var cityName = response.name;
            $("#cityName").html(cityName);

            // Display City Temp
            var cityTemp = response.main.temp;
            $("#curTemp").html("Temperature: " + cityTemp + "&deg;F");

            // Display City Humidity
            var cityHumidity = response.main.humidity;
            $("#humidityIn").html("Humidity: " + cityHumidity + "%");

            // Display City Wind
            var cityWind = response.wind.speed;
            $("#windIn").html("Wind: " + cityWind + " m.p.h.");
        })

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearchBar.val() + "&units=imperial&appid=" + weatherAPI,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        })

    });

});






// citySearchBar.val() + 
$(document).ready(function () {


    var curWeather = $('#curWeather');
    var cityInput = document.getElementById("cityInput").value;


    console.log(cityInput);

    // Creating an AJAX call for the api link above.
    $('#cityInput').on('click', function () {

        $.ajax({

            url: "http://api.openweathermap.org/data/2.5/weather?id=524901&q=" + cityInput + "&units=imperial" + "&APPID=46787f6b49aba46062b95df0b46828d9",

            method: "GET"
        }).then(function (response) {

            console.log(response);

            $('#searchBtn').on('click', function (cityInput) {
                curWeather.html(response.main.temp);
            });
        })
    });

});





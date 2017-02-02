$(document).ready(function(){
	var temperature;
	var units = "imperial";
	getWeather(units);

	$("#unitSwitch").on("click", function(){
		if(units === "imperial"){
			units = "metric";
			getWeather(units);
		}
		else {
			units = "imperial";
			getWeather(units);
		}
	});

	// http://ip-api.com/json

	function getWeather(units){	
		var windLabel = ""; 
		var tempLabel = "";
		if(units === "imperial"){windLabel = " miles per hour"; tempLabel = " Farenheit";}
		else{ windLabel = " meters per second"; tempLabel = " Celsius";};
		// get weather
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				

				// pass position.coords.latitude and position.coords.longitude to the open weather api
				var weatherCall = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=79fa4289db999b8e15c0f7dcb061b6db&units=" + units;
				$.getJSON(weatherCall, function(json){
					
					$("#theReport").html("Expect <b>" + json.weather[0].main + "</b> in " + json.name + " today with wind speeds of " +json.wind.speed + windLabel);

					$("#temp").html(json.main.temp + tempLabel);
					var iconSrc = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
					$("#icon").attr("src", iconSrc);
					temperature = json.main.temp;

					if(temperature < 32){
						$("body").css("background-image", "url('../snowy.jpg')");
					}
					else if(temperature > 90){
						$("body").css("background-image", "url('../sunny.jpg')");
					}
					else if($("#condition").text().includes("rain")){
						$("body").css("background-image", "url('../rain.jpg')");
					}
				});
			});
		}
	};

});
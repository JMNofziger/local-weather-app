$(document).ready(function(){
	var response = {};
	// get weather
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			// pass position.coords.latitude and position.coords.longitude to the open weather api
			var weatherCall = "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=79fa4289db999b8e15c0f7dcb061b6db&units=imperial";
			$.getJSON(weatherCall, function(json){
				// take response, filter for what you want, then print to the appropriate tags 
				city = json.name;
				wind = json.wind.speed;
				weather = json.weather[0].description;
				temperature = json.main.temp;
				response = {city, wind, weather, temperature};
			});
		});
		$("#location").html(response.city);
		$("#condition").html(response.weather);
		$("#wind").html(response.wind);
		$("#temp").html(response.temperature);

		// toggle weather units
		$("#unitSwitch").on("click", function(){
			// perform unit switch and print to tag
			// °F to °C	Deduct 32, then multiply by 5, then divide by 9
			// °C to °F	Multiply by 9, then divide by 5, then add 32
		});
	};
});
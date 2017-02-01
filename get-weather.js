$(document).ready(function(){

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

	function getWeather(units){	
		// get weather
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				// pass position.coords.latitude and position.coords.longitude to the open weather api
				var weatherCall = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=79fa4289db999b8e15c0f7dcb061b6db&units=" + units;
				$.getJSON(weatherCall, function(json){
					// take response, filter for what you want, then print to the appropriate tags 
					$("#location").html(json.name);
					$("#condition").html(json.weather[0].description);
					$("#wind").html(json.wind.speed);
					$("#temp").html(json.main.temp);
				});
			});
		}
	};
});

// page loads

// if metric is checked then it changes api call to include metric
// else runs with api call using imperial

// if a button is pushed

//

		// // toggle weather units
		// $("#unitSwitch").on("click", function(){
		// 	//
		// 	// perform unit switch and print to tag
		// 	// °F to °C	Deduct 32, then multiply by 5, then divide by 9
		// 	// °C to °F	Multiply by 9, then divide by 5, then add 32
		// });
		




		// $('input').click(function() {
		// 	var unitType = $("input:radio[name ='unitToggle']:checked").val();
		// 	var weatherCall = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=79fa4289db999b8e15c0f7dcb061b6db&units=" + unitType;
		// 	$.getJSON(weatherCall, function(json){
		// 		// take response, filter for what you want, then print to the appropriate tags 
		// 		$("#location").html(json.name);
		// 		$("#condition").html(json.weather[0].description);
		// 		$("#wind").html(json.wind.speed);
		// 		$("#temp").html(json.main.temp);
		// 	})
  //        });

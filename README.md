# local-weather-app

User Story: I can see the weather in my current location.

User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.

User Story: I can push a button to toggle between Fahrenheit and Celsius.

### Resources

OpenWeatherMap.org API: [http://openweathermap.org/](http://openweathermap.org/)
I had to expose my API key to get things to work correctly... Lemme know if you find a keyless API for weather.

You can serve the project locally and the call to the weather api will use the browser's location capability as expected. However, my linked codepen example doesn't use the browsers location capabilities because I can't serve an encrypted version from codepen. Here's the chromium error note you'll see in the console if you attempt to use either 'getCurrentPosition()' or 'watchPosition()' over an http connection:

>getCurrentPosition() and watchPosition() no longer work on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS.

Sooooo, I modified the codepen example to get the position using the client ip address. This uses an api offered by [http://ip-api.com/](http://ip-api.com/)

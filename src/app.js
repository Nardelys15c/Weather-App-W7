let apiKey = "5c97bd60362f1c74e3f19cd744b9a085  ";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;

axios.get(Url).then(displaytemperature);

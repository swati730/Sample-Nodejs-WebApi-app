var http = require("http");
//url = "http://www.myweather2.com/developer/forecast.ashx?uac=N9P5agyUbq&query=44011&temp_unit=f&ws_unit=kph&output=json";

exports.weatherDetails = function(zip,callback){
var zipcode = zip;

var url = "http://www.myweather2.com/developer/forecast.ashx?uac=N9P5agyUbq&query="+ zipcode + "&temp_unit=f&ws_unit=kph&output=json";
var request = http.get(url, function (response) {
               var buffer = "",
                   data,
                   route;
          response.on("data", function (chunk) {
             buffer += chunk;
               });
     response.on("end", function (err) {
//        console.log(buffer);
  //      console.log("\n");
        data = JSON.parse(buffer);
        route = data.weather.curren_weather[0];
//console.log(data.weather.curren_weather[0].humidity);
if(callback)
{
callback(data);
}
               });
               });
};

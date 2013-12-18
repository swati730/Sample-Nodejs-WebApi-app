var express = require('express');
var path = require('path');
var app = exports.app = express();
var weather = require('./weatherController.js');
app.use(express.bodyParser());
app.set('view engine','ejs');
app.use(express.json());
 var PORT = 3000;

 app.get('/', function (req, res) {
//   res.send("Hello World!");
   res.render('index');  
 res.end();
   });

app.post('/',function(req,res){
var zip = req.body.zip;
weather.weatherDetails(zip,function(data1)
{
//console.log(data1);
res.render('weather',{data:data1});
});

});

   app.listen(PORT)
   console.log('Running on http://localhost:' + PORT);

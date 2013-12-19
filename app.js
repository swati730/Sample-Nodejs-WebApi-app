var express = require('express');
var path = require('path');
<<<<<<< HEAD
var passport = require('passport');
var app = exports.app = express();
var weather = require('./weatherController.js');
var auth = require('./auth.js');
var https = require('https');
app.use(express.bodyParser());
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine','ejs');
app.use(express.json());
auth.git_authenticate();
var request = require('request');
=======
var app = exports.app = express();
var weather = require('./weatherController.js');
app.use(express.bodyParser());
app.set('view engine','ejs');
app.use(express.json());
>>>>>>> 8b13576fa3a30707b53b2a74fcefc1a6a0426490
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
<<<<<<< HEAD
app.get('/auth/github',
  passport.authenticate('github'),
  function(req, res){
  });
app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
var user = req.user;
var options = {
 url :'https://api.github.com/users/'+ req.user,
  
  headers: {'User-Agent': req.user}
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        
    //    console.log(body);
      var data = JSON.parse(body);
     res.render('user_profile',{profile:data});
    }
}

request(options, callback);

});

 

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
app.get('/logout', function(req, res){
  req.logout();
  res.render('index');
});
=======

>>>>>>> 8b13576fa3a30707b53b2a74fcefc1a6a0426490
   app.listen(PORT)
   console.log('Running on http://localhost:' + PORT);

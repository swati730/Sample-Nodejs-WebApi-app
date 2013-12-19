
var express = require('express')
  , passport = require('passport')
  , GitHubStrategy = require('passport-github').Strategy;

var GITHUB_CLIENT_ID = "f5d924e0dd0b8b9b486f"
var GITHUB_CLIENT_SECRET = "40c44a1f462b5e3dc44c9cb004038c1bdea8b230";

passport.serializeUser(function(user, done) {
console.log(user);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


exports.git_authenticate = function(){
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://192.168.1.189:49160/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile.username);
    }));
  };

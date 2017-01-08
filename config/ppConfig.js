var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');

passport.serializeUser(function(user, callback) {
  callback(null, user.id);
});

passport.deserializeUser(function(id, callback) {
  db.user.findById(id).then(function(user) {
    callback(null, user);
  }).catch(callback);
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, callback) {
  db.user.find({
    where: {
      email: email
    }
  }).then(function(user) {
    if(!user || !user.validPassword(password)) {
      callback(null, false);
    } else {
      callback(null, user);
    }
  }).catch(callback);
}));

module.exports = passport;
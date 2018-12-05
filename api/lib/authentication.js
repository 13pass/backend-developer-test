'use strict';

const passport = require('koa-passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const config = require('../../config');

exports.passportSetup = passportSetup;

function passportSetup () {
  let strategy = new GoogleStrategy({
    clientID: config.google.clientId,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackPath
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      if (!profile) {
        return done(null, {});
      }
      const email = profile.emails[0].value;
      const name = profile.displayName;
      return done(null, {email, name});
    } catch (e) {
      return done(e);
    }
  });
  passport.use(strategy);
}
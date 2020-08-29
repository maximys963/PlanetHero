const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');

const User = require('./models/user');

const config = require('./etc/config');

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = (user) => jwt.sign(user, config.secretKey, { expiresIn: 360000 });

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secretKey,
};

exports.jwtPassport = passport.use(new JwtStrategy(opts,
  (jwt_payload, done) => {
    console.log(' JWT payload : ', jwt_payload);
    User.findOne({ _id: jwt_payload._id }, (err, user) => {
      if (err) {
        return done(err, false);
      } if (user) {
        return done(null, user);
      }
      return done(null, false);
    });
  }));

exports.verifyAdmin = (req, res, next) => {
  const { user } = req;
  if (!user) {
    err = new Error('User not found!');
    err.status = 404;
    next(err);
  } else if (user.admin) {
    next();
  } else {
    err = new Error('You are not authorized to perform this operation!');
    err.status = 403;
    next(err);
  }
};

exports.verifyUser = passport.authenticate('jwt', { session: false });

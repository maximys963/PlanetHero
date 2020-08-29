const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('../models/user');
const cors = require('./cors');

const authenticate = require('../authenticate');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

/* GET users listing. */
userRouter.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200)});
userRouter.route('/')
  .get(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    try {
      const users = await User.find({});
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
    } catch (err) {
      next(err);
    }
  });

userRouter.route('/signup')
  .post((req, res) => {
    const {
      username,
      password,
    } = req.body;

    console.log('req.body', req.body);

    User.register(new User({ username }),
      password,
      (err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({ err });
        } else {
          user.save((saveErr) => {
            if (saveErr) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.json({ error: saveErr });
            }
            passport.authenticate('local')(req, res, () => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json({ success: true, status: 'Registration Success' });
            });
          });
        }
      });
  });

userRouter.post('/login', cors.corsWithOptions, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        success: false,
        status: 'Login Unsuccessful!',
        err: info,
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({
          success: false,
          status: 'Login Unsuccessful!',
          err: 'Could not log in user !',
        });
      }
      const token = authenticate.getToken({ _id: req.user._id });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        success: true,
        token,
        status: 'Login Successful',
      });
    });
  })(req, res, next);
});

userRouter.route('/user/:userId')
  .get((req, res, next) => {

  });

userRouter.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  } else {
    const err = new Error('You are not logged in');
    err.status = 403;
    next(err);
  }
});

userRouter.get('/facebook/token', passport.authenticate('facebook-token'), (req, res) => {
  if (req.user) {
    const token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      success: true,
      token,
      status: 'Registration Successfully logged in',
    });
  }
});

userRouter.get('/checkJWToken', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      return res.json({ status: 'JWT invalid!', success: false, err: info });
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.json({ status: 'JWT valid!', success: true, user });
  })(req, res);
});

module.exports = userRouter;

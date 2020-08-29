const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');

const Events = require('../models/event');

const authenticate = require('../authenticate');

const eventRouter = express.Router();

eventRouter.use(bodyParser.json());

eventRouter.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200) });

eventRouter.route('/')
  .get(cors.cors, authenticate.verifyUser, async (req, res, next) => {
    try {
      const events = await Events.find({});
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      await res.json(events);
    } catch (err) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      next(err);
    }
  })
  .post(cors.cors, authenticate.verifyUser, async (req, res, next) => {
    try {
      console.log('req', req.body);
      const event = await Events.create(req.body);
      console.log('event created', event);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      await res.json(event);
    } catch (err) {
      next(err);
      res.statusCode = 400;
      res.end();
    }
  })
  .put(authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end('operation PUT not supported on /events');
  })
  .delete(authenticate.verifyUser, async (req, res, next) => {
    try {
      const resp = await Events.remove({});
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      await res.json(resp);
    } catch (err) {
      next(err);
    }
  });

eventRouter.route('/:eventId')
  .get(authenticate.verifyUser, async (req, res, next) => {
    try {
      const event = await Events.findById(req.params.eventId);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      await res.json(event);
    } catch (err) {
      next(err);
    }
  })
  .post(authenticate.verifyUser, async (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /events/ ${req.params.eventId}`);
  })
  .put(authenticate.verifyUser, async (req, res, next) => {
    try {
      const { dishId } = req.params;
      const event = await Events.findByIdAndUpdate(
        dishId,
        { $set: res.body },
        { new: true },
      );
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      await res.json(event);
    } catch (err) {
      next(err);
    }
  })
  .delete(authenticate.verifyUser, async (req, res, next) => {
    try {
      const { dishId } = req.params;
      const resp = await Events.findOneAndRemove(dishId);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      await res.json(resp);
    } catch (err) {
      next(err);
    }
  });

module.exports = eventRouter;

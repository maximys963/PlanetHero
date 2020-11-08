const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');

const Teams = require('../models/team');

const authenticate = require('../authenticate');

const teamRouter = express.Router();

teamRouter.use(bodyParser.json());

teamRouter.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200) });

teamRouter.route('/')
    .get(cors.cors, authenticate.verifyUser, async (req, res, next) => {
        try {
            const events = await Teams.find({});
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
            const event = await Teams.create(req.body);
            console.log('team created', event);
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
            const resp = await Teams.remove({});
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            await res.json(resp);
        } catch (err) {
            next(err);
        }
    });

teamRouter.route('/:teamId')
    .get(authenticate.verifyUser, async (req, res, next) => {
        try {
            const event = await Teams.findById(req.params.teamId);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            await res.json(event);
        } catch (err) {
            next(err);
        }
    })
    .post(authenticate.verifyUser, async (req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /events/ ${req.params.teamId}`);
    })
    .put(authenticate.verifyUser, async (req, res, next) => {
        try {
            const { dishId } = req.params;
            const event = await Teams.findByIdAndUpdate(
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
            const resp = await Teams.findOneAndRemove(dishId);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            await res.json(resp);
        } catch (err) {
            next(err);
        }
    });

teamRouter.route('/members/:userId')
    .post(async (req, res, next) => {
        try {
            const { userId } = req.params;
            Teams.members.push(userId);
            const updatedTeams = await Teams.save();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            await res.json(updatedTeams);
        } catch (err) {
            next(err);
        }
    });

module.exports = teamRouter;

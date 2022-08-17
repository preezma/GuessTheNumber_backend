const express = require('express');
const controller = require('./controller');

const routes = express.Router();

routes.route('/').get(controller.getNewGame);
routes.route('/:id').get(controller.getGame);
routes.route('/:id').put(controller.submitResponse);
routes.route('/:id').delete(controller.stopGame);

module.exports = routes;

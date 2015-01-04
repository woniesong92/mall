'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	items = require('../../app/controllers/items.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/api/items')
		.get(items.list)
		.post(users.requiresLogin, items.create);

	app.route('/api/items/:itemId')
		.get(items.read)
		.put(users.requiresLogin, items.hasAuthorization, items.update)
		.delete(users.requiresLogin, items.hasAuthorization, items.delete);

	// Finish by binding the item middleware
	app.param('itemId', items.itemByID);
};
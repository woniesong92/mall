'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Item Schema
 */
var ItemSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	category1: {
		type: String,
		default: '',
		trim: true,
		required: 'category1 cannot be blank'
	},
	category2: {
		type: String,
		default: '',
		trim: true,
		required: 'category2 cannot be blank'
	},
	brand: {
		type: String,
		default: '',
		trim: true,
		required: 'brand cannot be blank'
	},
	short_description: {
		type: String,
		default: '',
		trim: true,
		required: 'short_description cannot be blank'
	},
	long_description: {
		type: String,
		default: '',
		trim: true,
		required: 'long_description cannot be blank'
	},
	price: {
		type: Number,
		default: 0,
		trim: true,
		required: 'long_description cannot be blank'
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Item', ItemSchema);
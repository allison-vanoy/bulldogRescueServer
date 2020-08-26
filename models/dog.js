const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailsSchema = new Schema({
	status: {
		type: String,
		required: true
	},
	weight: {
		type: String
	},
	age: {
		type: String
	},
	gender: {
		type: String,
		required: true
	},
	about: {
		type: String
	},
});

const dogSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	images: [{
		type: String
	}],
	details: [detailsSchema]
}, {
	timestamps: true
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
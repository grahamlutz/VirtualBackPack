var mongoose = require('mongoose');

var GearSchema = new mongoose.Schema({
    category: String,
  	manufacturer: String,
  	name: String,
  	weight: Number,
  	units: String,
  	nickname: String,
  	price: Number,
    owner: String
});

mongoose.model('Gear', GearSchema);

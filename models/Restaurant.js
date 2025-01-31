const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    restaurant_id:  { type: Number },
    name: String,
    city: String,
    address: {
        building: String,
        street: String,
        zipcode: String
    },
    cuisine: String
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
require('dotenv').config();
const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');
const restaurants = require('./data/Restaurants');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');

        await Restaurant.deleteMany();
        await Restaurant.insertMany(restaurants);

        console.log('Database Seeded Successfully!');
        mongoose.connection.close();
    })
    .catch(err => console.error('Error:', err));

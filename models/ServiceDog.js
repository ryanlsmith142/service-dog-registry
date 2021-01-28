const mongoose = require('mongoose');

const ServiceDogSchema = new mongoose.Schema({
    name: String
});

module.exports = ServiceDog = mongoose.model('serviceDog', ServiceDogSchema);
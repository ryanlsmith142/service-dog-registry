const mongoose = require('mongoose');

const ServiceDogSchema = new mongoose.Schema({
    name: String,
    qrCode: String
});

module.exports = ServiceDog = mongoose.model('serviceDog', ServiceDogSchema);
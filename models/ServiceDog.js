const mongoose = require('mongoose');

const ServiceDogSchema = new mongoose.Schema({
    name: String,
    handler: String,
    certifyingOrganization: String,
    dateLastCertified: Number,
    qrCode: String
});

module.exports = ServiceDog = mongoose.model('serviceDog', ServiceDogSchema);
const mongoose = require('mongoose');

const ServiceDogProfileSchema = new mongoose.Schema({
    serviceDogName: String,
    handlerFirstName: String,
    handlerLastName: String,
    certifyingOrganizationName: String,
    dateLastCertified: Number,
    qrCode: String
});

module.exports = ServiceDogProfile = mongoose.model('serviceDogProfile', ServiceDogProfileSchema);
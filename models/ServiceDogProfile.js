const mongoose = require('mongoose');

const ServiceDogProfileSchema = new mongoose.Schema({
    name: String,
    handler: String,
    certifyingOrganization: String,
    dateLastCertified: Number,
    qrCode: String
});

module.exports = ServiceDogProfile = mongoose.model('serviceDogProfile', ServiceDogProfileSchema);
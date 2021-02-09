const mongoose = require('mongoose');

const ServiceDogProfileSchema = new mongoose.Schema({
    
    serviceDogName: String,
    handlerFirstName: String,
    handlerLastName: String,
    certifyingOrganizationName: String,
    certifyingOrganizationId: Number,
    dateLastCertified: Number,
    qrCode: String,
    dogProfilePicture: String
});

module.exports = ServiceDogProfile = mongoose.model('serviceDogProfile', ServiceDogProfileSchema);
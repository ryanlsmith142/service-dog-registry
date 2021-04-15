const mongoose = require('mongoose');

const ServiceDogProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    handlerFirstName: {
        type: String,
        required: true,
    },
    handlerLastName: {
        type: String,
        required: true,
    },
    certifyingOrganizationName: {
        type: String,
        required: true,
    },
    certifyingOrganizationId: {
        type: String,
        required: true,
    },
    dateLastCertified: {
        type: Date,
    },
    qrCode: {
        type: String,
        required: true
    },
    dogProfilePicture: {
        type: String
    }
});

module.exports = ServiceDogProfile = mongoose.model('serviceDogProfile', ServiceDogProfileSchema);
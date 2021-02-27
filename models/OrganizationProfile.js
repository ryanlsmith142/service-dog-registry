const mongoose = require('mongoose');

const OrganizationProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    website: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userIdThatOwnsOrganization: {
        type: String,
        required: true,
    }
});

module.exports = OrganizationProfile = mongoose.model('organizationProfile', OrganizationProfileSchema);
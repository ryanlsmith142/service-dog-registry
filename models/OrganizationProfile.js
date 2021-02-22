const mongoose = require('mongoose');

const OrganizationProfileSchema = new mongoose.Schema({
    certifyingOrganizationName: String,
    website: String,
    address: String,
    phoneNumber: Number,
    email: String,
    ownerId: String
});

module.exports = OrganizationProfile = mongoose.model('organizationProfile', OrganizationProfileSchema);
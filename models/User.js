const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    userFirstName: String,
    userLastName: String,
    certifyingOrganizationId: String,
    email: String
});

module.exports = User = mongoose.model('user', UserSchema);
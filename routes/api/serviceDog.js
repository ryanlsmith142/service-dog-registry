const express = require('express');
const router = express.Router();
var http = require("https");
const ServiceDog = require('../../models/ServiceDog');

router.post('/', async function (request, response) {

    await newServiceDog.save();

    response.json(newServiceDog);
});

router.get('http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100', async function(request, response) {
    response.json(response);
})

module.exports = router;
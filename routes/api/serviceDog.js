const express = require('express');
const router = express.Router();

const ServiceDog = require('../../models/ServiceDog');

router.post('/', function (request, response) {

    const newServiceDog = new ServiceDog({
        name: "Ryan"
    });
    newServiceDog.save();
    response.send("POST request from serviceDog.js");
});

module.exports = router;
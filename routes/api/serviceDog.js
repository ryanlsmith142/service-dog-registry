const express = require('express');
const router = express.Router();

const ServiceDog = require('../../models/ServiceDog');

router.post('/', async function (request, response) {
    const { name } = request.body;

    const newServiceDog = new ServiceDog({
        name
    });

    await newServiceDog.save();
    response.json(newServiceDog);
});

module.exports = router;
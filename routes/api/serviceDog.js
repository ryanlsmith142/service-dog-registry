const express = require('express');
const router = express.Router();
const ServiceDog = require('../../models/ServiceDog');
const request = require('request');



router.post('/', function (req, res) {
    const { serviceDogName } = req.body;
    console.log(serviceDogName);
    console.log(req.body);
    res.json("Creating or updating a service dog profiles.")
});

router.get('/:serviceDogProfileId', function (req, res) {
    console.log(req.params)
    res.json("Getting a service dog profile.");
});

router.get('/getAllServiceDogs', function (req, res) {
    res.json("Getting all service dog profiles.");
});

router.delete('/:serviceDogProfileId', function (req, res) {
    console.log(req.params);
    res.json("Delete a service dog profile.")
})

module.exports = router;
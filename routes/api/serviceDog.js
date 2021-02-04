const express = require('express');
const router = express.Router();
const ServiceDog = require('../../models/ServiceDog');
const request = require('request');



router.post('/', function (req, res) {
    res.json("Creating or updating a service dog profiles.")
});

router.get('/', function (req, res) {
    res.json("Getting a service dog profile.");

});

router.get('/getAllServiceDogs', function (req, res) {
    res.json("Getting all service dog profiles.");
});

router.delete('/', function (req, res) {
    res.json("Delete a service dog profile.")
})

module.exports = router;
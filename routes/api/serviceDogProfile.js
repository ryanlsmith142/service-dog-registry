const express = require('express');
const router = express.Router();
const ServiceDogProfile = require('../../models/ServiceDogProfile');
const request = require('request');


// @route   POST api/serviceDogProfile
// @desc    Create or update a service dog profile
// @access  Private
router.post('/', function (req, res) {
    const { serviceDogName } = req.body;
    console.log(serviceDogName);
    console.log(req.body);
    res.json("Creating or updating a service dog profiles.")
});

// @route   GET api/serviceDogProfile/:serviceDogProfileId
// @desc    Get a service dog profile by id
// @access  Private
router.get('/:serviceDogProfileId', function (req, res) {
    console.log(req.params)
    res.json("Getting a service dog profile.");
});

// @route   GET api/serviceDogProfile/getAllServiceDogs
// @desc    Get all service dog profiles
// @access  Private
router.get('/getAllServiceDogProfiles', function (req, res) {
    res.json("Getting all service dog profiles.");
});

// @route   DELETE api/serviceDogProfile/:serviceDogProfileId
// @desc    Get a service dog profile by id
// @access  Private
router.delete('/:serviceDogProfileId', function (req, res) {
    console.log(req.params);
    res.json("Delete a service dog profile.")
})

module.exports = router;
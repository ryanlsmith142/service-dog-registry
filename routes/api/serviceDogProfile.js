const express = require('express');
const router = express.Router();
const ServiceDogProfile = require('../../models/ServiceDogProfile');
const request = require('request');


// @route   POST api/serviceDogProfile
// @desc    Create or update a service dog profile
// @access  Private
router.post('/', async function (req, res) {
    const { serviceDogName, handlerFirstName, handlerLastName, certifyingOrganizationName, dateLastCertified, qrCode, dogProfilePicture } = req.body;

    try {

        let serviceDogProfile = {};
        serviceDogProfile.serviceDogName = req.body.serviceDogName;
        serviceDogProfile.handlerFirstName = req.body.handlerFirstName;
        serviceDogProfile.handlerLastName = req.body.handlerLastName;
        serviceDogProfile.certifyingOrganizationName = req.body.certifyingOrganizationName;
        serviceDogProfile.dateLastCertified = req.body.dateLastCertified;
        serviceDogProfile.qrCode = req.body.qrCode;
        serviceDogProfile.dogProfilePicture = req.body.dogProfilePicture;


        serviceDogProfile = new ServiceDogProfile(serviceDogProfile);

        await serviceDogProfile.save();
        res.json(serviceDogProfile);

      } catch(error) {
        console.error(error.message);
        res.status(500).send('Server Error, unable to create or update service dog profile');
      }
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
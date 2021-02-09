const express = require('express');
const router = express.Router();
const ServiceDogProfile = require('../../models/ServiceDogProfile');
const request = require('request');


// @route   POST api/serviceDogProfile
// @desc    Create or update a service dog profile
// @access  Private
router.post('/', async function (req, res) {
    //Is this required?
    const { serviceDogName, handlerFirstName, handlerLastName, certifyingOrganizationName, certifyingOrganizationId, dateLastCertified, qrCode, dogProfilePicture } = req.body;

    try {

        let serviceDogProfile = {};
        serviceDogProfile.serviceDogName = req.body.serviceDogName;
        serviceDogProfile.handlerFirstName = req.body.handlerFirstName;
        serviceDogProfile.handlerLastName = req.body.handlerLastName;
        serviceDogProfile.certifyingOrganizationName = req.body.certifyingOrganizationName;
        serviceDogProfile.certifyingOrganizationId = req.body.certifyingOrganizationId
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

// @route   GET api/serviceDogProfile/getAllServiceDogs
// @desc    Get all service dog profiles
// @access  Private
router.get('/getAllServiceDogProfiles/:certifyingOrganizationId', async function (req, res) {
    try {
        const serviceDogProfiles = await ServiceDogProfile.find({ certifyingOrganizationId: req.params.certifyingOrganizationId});
        res.json(serviceDogProfiles)
    } catch(error) {
        console.error(error.message);
        res.status(500).send('Server Error, unable to get all service dog profiles');
    }
});

// @route   GET api/serviceDogProfile/:serviceDogProfileId
// @desc    Get a service dog profile by id
// @access  Private
router.get('/:serviceDogProfileId', async function (req, res) {

    try {
        const serviceDogProifle = await ServiceDogProfile.findOne({ _id: req.params.serviceDogProfileId});
        res.json(serviceDogProifle);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error, unable to find service dog profile by id');
    }
});

// @route   DELETE api/serviceDogProfile/:serviceDogProfileId
// @desc    Get a service dog profile by id
// @access  Private
router.delete('/:serviceDogProfileId', function (req, res) {
    console.log(req.params);
    res.json("Delete a service dog profile.")
})

module.exports = router;
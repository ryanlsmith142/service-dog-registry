const express = require('express');
const router = express.Router();
const OrganizationProfile = require('../../models/OrganizationProfile');
const request = require('request');
const { json } = require('express');


// @route   POST api/organizationProfile
// @desc    Create an organization profile
// @access  Private
router.post('/', async function (req, res) {

    try {

        let organizationProfile = setOrganizationProfileFieldsFromRequestObject(req);
        
        organizationProfile = new OrganizationProfile(organizationProfile);
        await organizationProfile.save();
        res.json(organizationProfile);
        
      } catch(error) {
        console.error(error.message);
        res.status(500).send('Server Error, unable to create a organization profile');
      }
});

// @route   POST api/organizationProfile/:organizationProfileId
// @desc    Update an organization profile.
// @access  Private
router.post('/:organizationProfileId', async function (req, res) {

    let organizationProfile = setOrganizationProfileFieldsFromRequestObject(req);

    try {
        let organizationProfileFromDB = await OrganizationProfile.findOneAndUpdate(
            { _id: req.params.organizationProfileId }, 
            { $set: organizationProfile },
            { new: true}
            );

        res.json(organizationProfileFromDB);
    } catch(error) {
        console.error(error.message);
        res.status(500).send('Server Error, unable to update organization profile');
    }
});

// @route   GET api/organizationProfile/getAllOrganizationProfiles
// @desc    Get all organization profiles
// @access  Private
router.get('/organizationProfiles/getAllOrganizationProfiles', async function (req, res) {
    try {
        const organizationProfiles = await OrganizationProfile.find();

        res.json(organizationProfiles)
        
    } catch(error) {
        console.error(error.message);
        res.status(500).send('Server Error, unable to get all organization profiles.');
    }
});

// @route   GET api/organizationProfile/:organizationProfileId
// @desc    Get a organization proifle by Id
// @access  Private
router.get('/:organizationProfileId', async function (req, res) {

    try {
        const organizationProfile = await OrganizationProfile.findOne({ _id: req.params.organizationProfileId});
        res.json(organizationProfile);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error, unable to find organization profile');
    }
});

// ### DO NOT USE, WILL IMPLEMENT SOFT DELETE LATER ###
// @route   DELETE api/organizationProfile/:organizationProfileId
// @desc    Delete a organization profile by id
// @access  Private
router.delete('/:organizationProfileId', async function (req, res) {
    try {
        const organizationProfile = await OrganizationProfile.deleteOne({ _id: req.params.organizationProfileId })
        res.json(organizationProfile);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error, unable to delete organization profile');
    }
})

function setOrganizationProfileFieldsFromRequestObject(req) {
    let organizationProfile = {};
    
    organizationProfile.certifyingOrganizationName = req.body.certifyingOrganizationName;
    organizationProfile.website = req.body.website;
    organizationProfile.address = req.body.address;
    organizationProfile.phoneNumber = req.body.phoneNumber;
    organizationProfile.email = req.body.email;
    organizationProfile.ownerId = req.body.email;

    return organizationProfile;
}

module.exports = router;
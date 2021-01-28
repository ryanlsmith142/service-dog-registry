const express = require('express');
const router = express.Router();
const ServiceDog = require('../../models/ServiceDog');
const request = require('request');


router.post('/', async function (req, response) {

    await newServiceDog.save();

    response.json(newServiceDog);
});

router.get('/', function (req, res) {
    
    
    res.end();
})

module.exports = router;
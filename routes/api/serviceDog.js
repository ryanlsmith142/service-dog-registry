const express = require('express');
const router = express.Router();
const ServiceDog = require('../../models/ServiceDog');
const request = require('request');
const http = require('http');

router.post('/', async function (req, response) {
    console.log(req.headers);

    response.end();

    // await newServiceDog.save().then(serviceDog => {
    //     response.send("Item saved to database " + serviceDog);
    // });

    // // response.json("Service Dog Profile was successfully created for: ");
});

router.get('/', function (req, res) {

    console.log(req.headers);
    
    res.status(404).end();
})

module.exports = router;
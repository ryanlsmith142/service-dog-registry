const express = require('express');
const router = express.Router();
var http = require("https");
const ServiceDog = require('../../models/ServiceDog');
const request = require('request');

router.post('/', async function (request, response) {

    await newServiceDog.save();

    response.json(newServiceDog);
});

router.get('/', function (request, response) {
    

})

const options = {
    url: 'https://api.github.com/repos/request/request',
    headers: {
      'User-Agent': 'request'
    }
  };
  
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("hey there");
    }
  }
  
  request(options, callback);

module.exports = router;
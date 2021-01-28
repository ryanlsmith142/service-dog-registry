const express = require('express');
const router = express.Router();
const ServiceDog = require('../../models/ServiceDog');
const request = require('request');


router.post('/', async function (req, response) {

    await newServiceDog.save();

    response.json(newServiceDog);
});

router.get('/', function (req, res) {

    var options = {
        "method": "GET",
        "hostname": "qrcode3.p.rapidapi.com",
        "port": null,
        "path": "/generateQR?ec_level=M&format=svg&fill_style=solid&text=Test%20QR%20Code",
        "headers": {
            "x-rapidapi-host": "qrcode3.p.rapidapi.com",
            "x-rapidapi-key": "0b8627d3acmsh5faf1c627b85881p11f72ejsn31c0267e4eb9",
            "useQueryString": true
        }
    };
      
      function callback(error, response, body) {
          console.log("Hey there before");
        if (!error && response.statusCode == 200) {
          res.json(response);
        } else {
            res.json("error");
        }
      }
      
      request(options, callback);

})

module.exports = router;
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
            "frame_name": "no-frame",
            "qr_code_text": "https://www.qr-code-generator.com/",
            "image_format": "SVG",
            "background_color": "#ffffff",
            "foreground_color": "#fa6e79",
            "marker_right_inner_color": "#2d7cda",
            "marker_right_outer_color": "#00bfff",
            "marker_left_template": "version13",
            "marker_right_template": "version13",
            "marker_bottom_template": "version13"
        
    };
      
      function callback(error, response, body) {
          res.json(response);
      }
      
      request(options, callback);
    
    
    res.end();
})

module.exports = router;
const express = require('express');
const router = express.Router();

const ServiceDog = require('../../models/ServiceDog');

router.post('/', async function (request, response) {
    const { name } = request.body;
    var http = require("https");

    var options = {
        "method": "GET",
        "hostname": "qrcode3.p.rapidapi.com",
        "port": null,
        "path": "/generateQR?ec_level=M&format=svg&fill_style=solid&text=Test%20QR%20Code",
        "headers": {
            "x-rapidapi-host": "qrcode3.p.rapidapi.com",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "useQueryString": true
        }
    };

    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });

    const qrCode = "Hey I'm a QR code";
    req.end();
    const newServiceDog = new ServiceDog({
        name,
        qrCode
    });

    await newServiceDog.save();

    response.json(newServiceDog);
});

module.exports = router;
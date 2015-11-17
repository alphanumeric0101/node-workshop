var prompt = require('prompt');
var request = require('request');

Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
};

var issLoca = [];
var userLoca = [];

//make the Request for the ISS position

request('http://api.open-notify.org/iss-now.json', function(error, response, body) {

    if (!error && response.statusCode === 200) {
        var theResult = JSON.parse(body);

        var coordinates = theResult.iss_position;

        for (var properties in coordinates) {
            issLoca.push(coordinates[properties]);
        }
    }
});

// Begin Prompting for user location

prompt.start();

prompt.get(['city'], function(err, result) {
    console.log('Command-line input received:');
    console.log('  city: ' + result.city);
    var userCity = result.city;

    // Start request for user location based on userCity

    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + userCity, function(error, response, body) {

        if (!error && response.statusCode === 200) {
            var theResult = JSON.parse(body);

            var coordinates = theResult.results[0].geometry.location;

            for (var properties in coordinates) {
                userLoca.push(coordinates[properties]);
            }

            var lat1 = issLoca[0];
            var lat2 = userLoca[0];
            var lon1 = issLoca[1];
            var lon2 = userLoca[1];

            var R = 6371000; // metres
            var φ1 = lat1.toRadians();
            var φ2 = lat2.toRadians();
            var Δφ = (lat2 - lat1).toRadians();
            var Δλ = (lon2 - lon1).toRadians();

            var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            var d = R * c;

            console.log('Your distance from the ISS, in metres, is: ' + d);
        }
    });
})

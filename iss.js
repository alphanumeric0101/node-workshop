var request = require('request');

request('http://api.open-notify.org/iss-now.json', function (error, response, body) {
    
  if (!error && response.statusCode === 200) {
    var theResult = JSON.parse(body);
    
    var coordinates = theResult.iss_position;
    
    console.log(coordinates);
    
    for (var properties in coordinates) {
        console.log(Math.round(coordinates[properties]*100)/100);
    }
    // or...
    // var titles = documents.map(function(doc) {return doc.title;});
  }  
});

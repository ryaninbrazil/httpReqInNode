var https = require('https'); 



function getAndPrintHTML() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  

  https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  let wholeData = ""; 
  response.on('data', function(data) {
    wholeData += data;
  });


  response.on('end', function() {
    console.log(wholeData);
  });


  });
}

getAndPrintHTML();
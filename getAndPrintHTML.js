var https = require('https'); 


function getAndPrintHTML() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  
  https.get(requestOptions, function (response) {

  response.setEncoding('utf8');


  response.on('data', function(data) {
    console.log('Chunk Received. Length: ', data.length);
  });


  response.on('end', function() {
    console.log('Response Steam Complete.');
  });


  });
}
console.log('I did it!');
getAndPrintHTML();
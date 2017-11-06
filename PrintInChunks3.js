var https = require('https'); 

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  https.get(options, function (response) {
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


console.log(options);
getAndPrintHTML(options);




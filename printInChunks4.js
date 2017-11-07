var https = require('https'); 


function getHTML (options, callback) {

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
  callback();
}

  
  function printHTML (html) {
    console.log(html);
  }

  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions, printHTML);
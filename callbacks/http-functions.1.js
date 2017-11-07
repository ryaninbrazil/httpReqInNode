var https = require('https'); 

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};
function getHTML (options, callback) {

  https.get(options, function (response) {
    response.setEncoding('utf8');

    let wholeData = "";
    response.on('data', function(data) {
      wholeData += data;
    });
    
    response.on('end', function() {
      callback(wholeData);
    });
  });  
}

  
  function printHTML (html) {
    console.log(html);
  }

getHTML(requestOptions, printHTML);

module.exports = function getHTML (options, callback) {
    
      https.get(options, function (response) {
        response.setEncoding('utf-8');
    
        let wholeData = "";
        response.on('data', function(data) {
          wholeData += data;
        });
        
        response.on('end', function() {
          callback(wholeData);
        });
      });  
};
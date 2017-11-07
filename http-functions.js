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
      console.log(wholeData);
    });
  });  
  callback();
}

  
  function printHTML (html) {
    console.log(html);
  }

getHTML(requestOptions, printHTML);

module.exports = function getHTML (options, callback) {
  /* Your code here */
};
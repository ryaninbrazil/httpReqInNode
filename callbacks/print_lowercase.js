
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printToLowerCase (html) {
  console.log('Inside print upper case');
  console.log(html.toLowerCase());

}

getHTML(requestOptions, printToLowerCase);
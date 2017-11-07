
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5/uppercase.html'
};

function printUpperCase (html) {
  console.log('Inside print upper case');
  console.log(html.toUpperCase());

}

getHTML(requestOptions, printUpperCase);
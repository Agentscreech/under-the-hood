var request = require('request');
var cheerio = require('cheerio');

var URL = 'https://tiresize.com/chart/';

request(URL, function(err, response, body) {
  var $ = cheerio.load(body);
  var size = $(".tabscontent");
  console.log(size);
  var chart = [];
  var carRegex = /(\d{3}\/\d{2}R\d{2})/g;
  var truckRegex = /([34]\dX\dR\d\d)|([34]\d.\dX\dR\d\d)|([34]\d.\dX\d\dR\d\d)|([34]\d.\dX\d\d.\dR\d\d)|([34]\d.\dX\d.\dR\d\d)|([34]\dX\d.\dR\d\d)/g;
  var carSize = size.match(carRegex);
  chart.push(carSize);
  var truckSize = size.match(truckRegex);
  chart.push(truckSize);
  console.log(chart);
	// iterate through the list of found plays
  // sizes.each(function(index, size) {
  //   // the each function gives us the raw HTML element.
	//   // convert the element back to a cheerio
  //   // size = $(size);
  //
  //
  //
  // });
});

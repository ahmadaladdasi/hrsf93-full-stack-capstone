//Require Dependencies
var Twit = require('twit');
// var config = require('./config');

//Create Twitter Instance
var Twitter = new Twit({
  consumer_key: '5kOVzaBAsEOoh5V1jNTiDzeBM',
  consumer_secret: '1E3P4F06HGHR4Z1B24hq2WELK1KnWRKVYU6Dp4CzJlPGttePlK',
  access_token: '1095288439-gvmOB8xebw4b3D3ubNmpcEbI9au3RhAZSqtJlWP',
  access_token_secret: 'MPEweElt7EEFVccRBxOUHlW1i7gAxUZfbH2KdVj55fkJM',
});


module.exports = Twitter;

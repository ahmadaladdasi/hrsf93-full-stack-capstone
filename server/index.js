'use strict';
const app = require('./app');
const db = require('../db');
const path = require('path');
const PORT = process.env.port || 3000;

let Twitter = require('./Twitter');
let sentiment = require('./NodeSentiment.js');
let twitterStream = Twitter;

let server = app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
});
/*
Create Server and Socket.io Instance
==================*/

let io = require('socket.io').listen(server);
let connections = [];

//Create socket.io Connection with Client
//All Socket Listeners Here
io.sockets.on('connection', function(socket) {

  connections.push(socket);
  console.log('%s Connected. %s sockets connected', socket.id, connections.length);

  let prevSearch = false;
  let twitterStream;

  socket.on('search', function(payload) {
    console.log('Keyword: %s', payload.keyword);

    if(prevSearch) {
      twitterStream.stop();
      console.log(prevSearch);
      console.log('stop stream');

    } else {
      prevSearch = true;
    }

    twitterStream = Twitter.stream('statuses/filter', {language: 'en', track: payload.keyword});


    let lastTimestamp = Date.now();
    let speedLimiter = 2000; //800ms

    //Turn on Twitter Stream
    twitterStream.on('tweet', function(tweet) {

      if(tweet.timestamp_ms - lastTimestamp > speedLimiter) {

        lastTimestamp = Date.now();

        // Send Tweet Object to Client
        socket.emit('sendTweet', {tweet: sentiment.getSentiment(tweet, socket)});
      }
    });

    socket.once('disconnect', function() {
      connections.splice(connections.indexOf(socket), 1);
      socket.disconnect();
      twitterStream.stop();
      console.log('Socket disconnected: %s sockets remaining', connections.length);
    });
  });

}); //END io.sockets.on

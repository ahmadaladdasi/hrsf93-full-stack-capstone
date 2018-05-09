const TwitterStream = require('twitter-stream-api');
const fs = require('fs');
const keys = require('./config.js');
const Sentiment = require('sentiment');
const knex = require('knex')(require('../knexfile'));

// const saveToDb = () => {
//   console.log('ran');
//   return knex('keywords').insert({body: 'stuff3'}).then((data) => console.log('success'));
// };


var Twitter = new TwitterStream(keys, false);
Twitter.stream('statuses/filter', {
  track: '@realDonaldTrump'
});
Twitter.on('data', (obj) => {
  let result = JSON.parse(obj);
  let sentiment = new Sentiment();
  let sentimentScore = sentiment.analyze(result.text);
  knex('tweets').insert({
    id_str: result.id_str, screen_name: result.user.screen_name,
    created_at: result.created_at, name: result.user.name,
    text: result.text, sentiment_score: sentimentScore.score
  })
    .then(() => console.log('success'))
    .catch((err)=> {
      console.log('failed', err);
    });
});
// Twitter.pipe(fs.createWriteStream('tweets.json'));

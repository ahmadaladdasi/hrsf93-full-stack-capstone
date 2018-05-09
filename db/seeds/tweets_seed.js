const models = require('../models');

exports.seed = function (knex, Promise) {

  return models.Tweet.where({ id_str: '992543689565229057' }).fetch()
    .then((tweet) => {
      if (tweet) {
        throw tweet;
      }
      return models.Tweet.forge({
        id_str: '992543689565229057',
        screen_name: 'dianagte',
        created_at: 'Fri May 04 23:17:10 +0000 2018',
        name: 'dianagte',
        text: 'RT @nerdchronic: Happy #MayThe4BeWithYou everybody! #StarWars #May4th https://t.co/Ydj8zr8pSg',
        sentiment_score: 10
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to add tweet');
      throw err;
    })
    .then((tweet) => {
      return models.Keyword.forge({
        body: 'StarWars',
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create keyword');
    })
    .catch(() => {
      console.log('WARNING: default tweet already exists.');
    });

};

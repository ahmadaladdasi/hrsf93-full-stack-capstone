const db = require('../');

const Tweet = db.Model.extend({
  tableName: 'tweets'
});

module.exports = db.model('Tweet', Tweet);

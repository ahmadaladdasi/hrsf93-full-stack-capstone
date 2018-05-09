const db = require('../');

const Keyword = db.Model.extend({
  tableName: 'keywords',
});

module.exports = db.model('Keyword', Keyword);

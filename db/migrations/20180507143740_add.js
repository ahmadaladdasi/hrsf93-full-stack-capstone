exports.up = function (knex, Promise) {
  return Promise.all([

    knex.schema.createTableIfNotExists('tweets', function(table) {
      table.increments('id').unsigned().primary();
      table.string('id_str', 30).notNullable();
      table.string('screen_name', 40).nullable();
      table.string('created_at', 80).nullable();
      table.string('name', 80).nullable();
      table.string('text', 180).nullable();
      table.integer('sentiment_score').nullable();
    }),
    knex.schema.createTableIfNotExists('keywords', function(table) {
      table.increments('id').unsigned().primary();
      table.string('body', 60).notNullable();
    }),

  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tweets'),
    knex.schema.dropTable('keywords')
  ]);
};

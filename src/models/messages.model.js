/* eslint-disable no-console */

// messages-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'messages';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {

      db.schema.createTable(tableName, table => {
        table.increments('id').primary().unsigned();
        table.string('text');
        table.uuid('userId').notNullable().references('users.id').onDelete('CASCADE');
        table.timestamps();
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });


  return db;
};

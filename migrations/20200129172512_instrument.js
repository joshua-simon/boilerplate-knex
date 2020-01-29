exports.up = function(knex, Promise) {
    return knex.schema.createTable('instruments', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('image')
      table.string('blurb')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('instruments')
  };
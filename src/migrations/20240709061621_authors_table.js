exports.up = function(knex) {
    return knex.schema.createTable('authors', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('bio').nullable();
      table.date('birthdate').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('authors');
  };
  
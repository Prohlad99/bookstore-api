exports.up = function(knex) {
    return knex.schema.createTable('books', table => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').nullable();
      table.date('published_date').notNullable();
      table.integer('author_id').unsigned().notNullable();
      table.foreign('author_id').references('authors.id');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('books');
  };
  
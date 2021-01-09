'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      // title varchar(100) NOT NULL
      table.string('title', 100).notNullable();
      // condition tinyint NOT NULL DEFAULT 1
      table.integer('condition').defaultTo(1).notNullable()
      table.integer('price').defaultTo(0).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BookSchema

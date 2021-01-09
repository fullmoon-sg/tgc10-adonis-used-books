'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorSchema extends Schema {
  up () {
    this.create('authors', (table) => {
      table.increments()
      table.string('first_name',80).notNullable();
      table.string('last_name',80).notNullable();
      table.date('dob').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('authors')
  }
}

module.exports = AuthorSchema

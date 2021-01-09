'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublisherSchema extends Schema {
  up () {
    this.create('publishers', (table) => {
      table.increments()
       table.string('name',254).notNullable();
      table.string('email',254).notNullable().default("");
      table.timestamps()
    })
  }

  down () {
    this.drop('publishers')
  }
}

module.exports = PublisherSchema

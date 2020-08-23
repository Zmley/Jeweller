/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.addType('category', {
    name: 'text',
    id: 'uuid'
  })
}

exports.down = pgm => {}

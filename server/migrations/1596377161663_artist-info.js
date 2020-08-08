/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.addColumns('Artist', {
    type: { type: 'text', notNull: false }
  })
}

exports.down = pgm => {}

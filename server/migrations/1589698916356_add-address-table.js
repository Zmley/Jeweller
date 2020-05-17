/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('Address', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    name: { type: 'text', notNull: true },
    address: { type: 'text', notNull: true },
    postcode: { type: 'text', notNull: true },
    phone: { type: 'text', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    },
    lastUpdatedAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  })
}

exports.down = pgm => {}

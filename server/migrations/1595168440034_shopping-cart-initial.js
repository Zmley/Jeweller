/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('ShoppingCart', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    productID: { type: 'uuid', notNull: true, primaryKey: true },
    amount: { type: 'int', notNull: true },
    userID: { type: 'text', notNull: true },
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

/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('ProductSize', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    productID: { type: 'uuid', notNull: true, primaryKey: true },
    size: { type: 'int', notNull: false },
    width: { type: 'int', notNull: false },
    price: { type: 'int', notNull: false },
    length: { type: 'int', notNull: false },
    height: { type: 'int', notNull: false },
    color: { type: 'text', notNull: true },
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

  //Size: 戒指: 4，5，6，7，8
}

exports.down = pgm => {}

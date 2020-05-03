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
    size: { type: Number, notNull: false },
    width: { type: Number, notNull: false },
    price: { type: Number, notNull: false },
    length: { type: Number, notNull: false },
    height: { type: Number, notNull: false },
    color: { type: Text, notNull: true },
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

/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('Events', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    productID: {
      type: 'uuid',
      notNull: true,
      primaryKey: true
    },
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
  pgm.sql(`
          INSERT INTO "Events" ("productID") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88127');
          `)
}

exports.down = pgm => {}

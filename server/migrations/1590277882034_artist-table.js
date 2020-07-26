/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('Artist', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    description: { type: 'text', notNull: true },

    backgroundImage: { type: 'text', notNull: true },

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
  pgm.createTable('Follow', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    userID: { type: 'uuid', notNull: true },
    artistID: { type: 'uuid', notNull: true },
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
          INSERT INTO "Artist" ("id","description", "backgroundImage") VALUES
          ('182351ca-dde8-46bb-a87c-2a2fc5a17bac', 'This is description', 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1280x1920/6ced325ad3e8d84525d95da4619f286c/photo-1575550590262-4ad1d8738faa.jpg');

          `)
  pgm.sql(`
          INSERT INTO "Follow" ("userID","artistID") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88125', '182351ca-dde8-46bb-a87c-2a2fc5a17bac');
          `)
}

exports.down = pgm => {}

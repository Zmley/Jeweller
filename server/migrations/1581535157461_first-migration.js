/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createExtension('uuid-ossp')
  pgm.createTable('User', {
    id: { type: 'uuid', notNull: true, primaryKey: true },
    username: { type: 'varchar(50)' },
    role: { type: 'varchar(20)', notNull: true },
    avatar: { type: 'varchar(200)' },
    sessionKey: { type: 'uuid', notNull: true },
    password: { type: 'text', notNull: true },
    Email: { type: 'text', notNull: true },
    postalCode: { type: 'varchar(6)', notNull: true },
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
  pgm.createTable('Product', {
    id: { type: 'uuid', notNull: true, primaryKey: true },
    userID: {
      type: 'uuid',
      notNull: true
    },
    name: { type: 'varchar(50)', notNull: true },
    amount: { type: 'int', notNull: true },
    likeCount: { type: 'int', notNull: true },
    images: { type: 'varchar(99)' },
    tag1: { type: 'varchar(20)' },
    tag2: { type: 'varchar(20)' },
    tag3: { type: 'varchar(20)' },
    description: 'varchar(199)',
    price: { type: 'numeric(8,2)', notNull: true },
    status: { type: 'varchar(10)', notNull: true },
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
  pgm.createTable('Catalogue', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    name: {
      type: 'varchar(20)',
      notNull: true
    },
    level: {
      type: 'int',
      notNull: true
    },
    father: 'varchar(20)'
  })
  pgm.createTable('Images', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true
    },
    productID: {
      type: 'uuid',
      notNull: true,
      references: '"Product"'
    },
    url: { type: 'text', notNull: true },
    priority: { type: 'int' },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  })
  pgm.createTable('Favourite', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    userID: {
      type: 'uuid',
      notNull: true
    },
    productID: {
      type: 'uuid',
      notNull: true,
      references: '"Product"'
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
    },
    status: 'varchar(12)'
  })
  pgm.createTable('Transaction', {
    userID: {
      type: 'uuid',
      notNull: true,
      default: pgm.func('uuid_generate_v4()')
    },
    orderID: { type: 'varchar(50)', notNull: true },
    status: { type: 'varchar(10)', notNull: true },
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
  pgm.createTable('Order', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    trackingNumber: 'varchar(30)',
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
  pgm.createTable('OrderDetail', {
    id: {
      type: 'uuid',
      notNull: true,
      default: pgm.func('uuid_generate_v4()')
    },
    orderID: {
      type: 'uuid',
      notNull: true
    },
    price: { type: 'numeric(8,2)', notNull: true },
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

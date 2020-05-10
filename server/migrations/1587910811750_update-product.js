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

  pgm.createTable('Tags', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()')
    },
    mainTag: { type: 'text', notNull: true },
    subTag: { type: 'text', notNull: true },
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
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('b0b674e2-8485-40cb-8446-73dab84ff782', 'jewellery','ring');
           INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('30ec072d-73af-4bac-816c-214defa5285b', 'jewellery','earring');
           INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('cbb94b73-3b55-4475-995a-dc62ac887340', 'jewellery','bracelet');
           INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('52e7e43d-4953-4e57-99cd-5e8c59127cb4', 'jewellery','necklace');
           INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('99ab917e-59bb-4575-8377-8174709ec231', 'jewellery','brooch');
           INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('cec9c9d5-2a07-40c3-be9e-06e069984b7f', 'jewellery','other');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('d95e4b93-dd33-44dd-aba2-b8cbac905e91', 'textile','home');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('266084eb-da44-4635-8e42-88d9562a1cd5', 'textile','wearable');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('549124cb-9994-4f6b-b354-36ab7988610d', 'textile','other');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('ab5bb612-b17e-480a-9114-4e7125d76a2a', 'photography','landscaple');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('c473a3f7-0b86-42a2-8cae-7a7987e06364', 'photography','portraits');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('3ba99c2a-f4c5-40bb-b606-7f833e82fe62', 'photography','abstract');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('1a7ea450-8054-4085-8c1a-704aaef2b9dd', 'photography','other');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('41552cbd-d5a6-4392-8697-0156d16ef46d', 'design','design');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('d2a5cb7e-bb5b-4e0f-ba05-da394ba7e0cb', 'sculpture','sculpture');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('7566ae31-afc3-4323-a4a2-8cde90967d91', 'painting','painting');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('1901eeef-b842-4fa0-9c84-e562e462a315', 'printings','printings');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('186cc69c-869a-4462-b74f-c6434116068c', 'printmaking','printmaking');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('0501777d-4cb0-4bb0-a584-ebb93eee57cd', 'furniture','furniture');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('4f972cee-e963-435b-b1ab-5af21e42a8ec', 'glass','glass');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('d79da771-3caa-4935-b955-698bfd242a73', 'ceramic','ceramic');
          INSERT INTO "Tags" ("id","mainTag", "subTag") VALUES
          ('9dd9acc1-e0c3-46c5-b660-8310ddc7c946', 'tableware','tableware');
          `)
}

exports.down = pgm => {}

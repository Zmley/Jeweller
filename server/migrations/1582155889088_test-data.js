/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.sql(`
          INSERT INTO "User" ("id", username, "role", "avatar", "sessionKey", "password", "Email", "postalCode") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test user 1', 'ARTIST', '', '6783a83c-a65a-4f86-81d7-9bdec83c519e', 'renmendou950214', 'renmendou@gmail.com', 'B3H1J2');
          INSERT INTO "User" ("id", username, "role", "avatar", "sessionKey", "password", "Email", "postalCode") VALUES
          ('182351ca-dde8-46bb-a87c-2a2fc5a17bac', 'test user 2', 'CUSTOMER', '', '182351ca-dde8-46bb-a87c-2a2fc5a17bac', 'AegeanSea', 'aegeansea@gmail.com', 'B3H3D6');
          `)
  pgm.sql(`
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88126', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test product 1', 99, 0, '', '', 11.09, 'ENABLED');
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88127', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test product 2', 100, 3, '', '', 12.09, 'ENABLED');
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88128', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test product 3', 1000, 0, '', '', 14.02, 'DISABLED');
          `)
}

exports.down = pgm => {}

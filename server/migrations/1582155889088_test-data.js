/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.sql(`
          INSERT INTO "User" ("id", username, "role", "avatar", "sessionKey", "password", "Email", "postalCode") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test user 1', 'ARTIST', '', '6783a83c-a65a-4f86-81d7-9bdec83c519e', 'renmendou950214', 'renmendou@gmail.com', 'B3H1J2');
          INSERT INTO "User" ("openID", name, "sessionKey") VALUES
          ('182351ca-dde8-46bb-a87c-2a2fc5a17bac', 'test user 2', 'CUSTOMER', '', '182351ca-dde8-46bb-a87c-2a2fc5a17bac', 'AegeanSea', ''aegeansea@gmail.com', 'B3H3D6');
          `)
  pgm.sql(`
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88126', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test product 1', 99, 0, '', '', 11.09, 'ENABLED');
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88127', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test product 2', 100, 3, '', '', 12.09, 'ENABLED');
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88128', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test product 3', 1000, 0, '', '', 14.02, 'DISABLED');
          `)
  pgm.sql(`
          INSERT INTO "Prices" ("openIDFather", "openIDChild", "priceID", "productID", "price") VALUES
          ('dsfsajhf321412', 'oEZ7x5FcxWrYVE7RCAcb5g0AC35o', '6783a83c-a65a-4f86-81d7-9bdec83c519e', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 10.01);
          INSERT INTO "Prices" ("openIDFather", "openIDChild", "priceID", "productID", "price") VALUES
          ('dsfsajhf321412', 'oEZ7x5FcxWrYVE7RCAcb5g0AC35o', '182351ca-dde8-46bb-a87c-2a2fc5a17bac', 'fda3d380-3e17-11ea-b77f-2e728ce88125', 11.01);
          INSERT INTO "Prices" ("openIDFather", "openIDChild", "priceID", "productID", "price") VALUES
          ('dsfsajhf321412', 'oEZ7x5FcxWrYVE7RCAcb5g0AC35o', '6783a43c-a65a-4f86-8157-9bdec83c519e', 'abb82f54-3e1b-11ea-b77f-2e728ce88125', 12.01);
          `)
  pgm.sql(`
          INSERT INTO "SaleProducts" ("id", "productID", "openIDFather", "defaultPrice", "status") VALUES
          ('29510a5b-992a-4b3b-a249-4904ba945887', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'dsfsajhf321412', 20.01, 'PUBLISHED');
          INSERT INTO "SaleProducts" ("id", "productID", "openIDFather", "defaultPrice", "status") VALUES
          ('47ccec61-238c-4e9a-814b-26a24e341a00', 'fda3d380-3e17-11ea-b77f-2e728ce88125', 'dsfsajhf321412', 21.01, 'PUBLISHED');
          INSERT INTO "SaleProducts" ("id", "productID", "openIDFather", "defaultPrice", "status") VALUES
          ('7d32cf58-d744-4bb2-9da6-f61dbb8750ae', 'abb82f54-3e1b-11ea-b77f-2e728ce88125', 'dsfsajhf321412', 22.01, 'PUBLISHED');     
          `)
  pgm.sql(`
          INSERT INTO "Orders" ("orderID", "totalPrice", "openIDFather", "openIDChild", status) VALUES
          ('8b8d3db0-1dd9-4ab3-927f-c05f1abf792b', 11.01, 'dsfsajhf321412', 'oEZ7x5FcxWrYVE7RCAcb5g0AC35o', 'UNPAID');    
          `)
  pgm.sql(`
          INSERT INTO "OrderDetail" ("orderID", "productID", "amount", "trackingNumber") VALUES
          ('8b8d3db0-1dd9-4ab3-927f-c05f1abf792b', 'fda3d380-3e17-11ea-b77f-2e728ce88125', 1, '101563142314');    
          `)
  pgm.sql(`
          INSERT INTO "AliasCode" ("openID", "code", "status") VALUES
          ('dsfsajhf321412', 'da49d6c7-82fa-42e1-a694-c2e82d5cafc0', 'USED');    
          `)
  pgm.sql(`
          INSERT INTO "Alias" ("openIDFather", "openIDChild", "aliasID") VALUES
          ('dsfsajhf321412', 'oEZ7x5FcxWrYVE7RCAcb5g0AC35o', 'fdab09f7-96ac-46f0-a623-a5c30a94e84d');    
          `)
  pgm.sql(`
          INSERT INTO "Warehouse" ("openID", "warehouseID", "email", "password", "sessionKey") VALUES
          ('dsfsajhf321412', '64498305-8348-4d25-8f7e-a08b23b27d72', 'admin@test.com', '123', '3ef8c38a-3e23-11ea-b77f-2e728ce88125');    
          `)
  pgm.sql(`
          INSERT INTO "Address" ("openID", "street", "city", "province", "country", "name", "phone") VALUES
          ('oEZ7x5FcxWrYVE7RCAcb5g0AC35o', 'test 0000 street', 'test city', 'test province', 'test country', 'test user', '1234567890');    
          `)
}

exports.down = pgm => {}

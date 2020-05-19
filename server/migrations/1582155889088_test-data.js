/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.sql(`
          INSERT INTO "User" ("id", username, "role", "avatar", "sessionKey", "password", "Email", "postalCode") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test user 1', 'ARTIST', '', '6783a83c-a65a-4f86-81d7-9bdec83c519e', 'renmendou950214', 'renmendou@gmail.com', 'B3H1J2');
          INSERT INTO "User" ("id", username, "role", "avatar", "sessionKey", "password", "Email", "postalCode") VALUES
          ('182351ca-dde8-46bb-a87c-2a2fc5a17bac', 'test user 2', 'ARTIST', '', '182351ca-dde8-46bb-a87c-2a2fc5a17bac', 'AegeanSea', 'aegeansea@gmail.com', 'B3H3D6');
           INSERT INTO "User" ("id", username, "role", "avatar", "sessionKey", "password", "Email", "postalCode") VALUES
          ('182351ca-dde8-42bb-a87c-1a3fc5a17bac', 'test user 3', 'CUSTOMER', '', '122351ca-dde8-26bb-a87c-2a2fc3a17bac', 'Town', 'town@town.com', 'B3H3D6');
          `)
  pgm.sql(`
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status","tag1","tag2","tag3") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88126', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test product 1', 99, 0, '', 'https://town-src.s3.amazonaws.com/violetaIzquierdo.jpg', 11.09, 'ENABLED','0501777d-4cb0-4bb0-a584-ebb93eee57cd','3ba99c2a-f4c5-40bb-b606-7f833e82fe62','c473a3f7-0b86-42a2-8cae-7a7987e06364');
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status","tag1") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88127', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test product 2', 100, 3, '', 'https://town-src.s3.amazonaws.com/60280_van-Niekerk_Lani_dec16_05.jpg', 12.09, 'ENABLED','b0b674e2-8485-40cb-8446-73dab84ff782');
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status","tag1","tag2") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88128', '182351ca-dde8-46bb-a87c-2a2fc5a17bac', 'test product 3', 100, 2, '', 'https://town-src.s3.amazonaws.com/60282_van-Niekerk_Lani_dec16_07.jpg', 14.02, 'ENABLED','30ec072d-73af-4bac-816c-214defa5285b','cbb94b73-3b55-4475-995a-dc62ac887340');
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status","tag1") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88129', '182351ca-dde8-46bb-a87c-2a2fc5a17bac', 'test product 4', 100, 8, '', 'https://town-src.s3.amazonaws.com/77598_Goss_Grace_July19_10.JPG', 24.02, 'ENABLED','52e7e43d-4953-4e57-99cd-5e8c59127cb4');
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status","tag1") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88138', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test product 5', 20, 10, '', 'https://town-src.s3.amazonaws.com/77598_Goss_Grace_July19_10.JPG', 44.02, 'DISABLED','d95e4b93-dd33-44dd-aba2-b8cbac905e91');
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status","tag1") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce88148', '182351ca-dde8-46bb-a87c-2a2fc5a17bac', 'test product 6', 2, 100, '', 'https://town-src.s3.amazonaws.com/8BB5269C-79E3-4925-9FCE-583B46F8F4AB_1_105_c_800x600px_2.jpg', 74.02, 'ENABLED','99ab917e-59bb-4575-8377-8174709ec231');
          INSERT INTO "Product" ("id", "userID", "name", "amount", "likeCount", "images", "description", "price", "status","tag1","tag2") VALUES
          ('f35a5f0c-3e17-11ea-b77f-2e728ce13128', 'f35a5f0c-3e17-11ea-b77f-2e728ce88125', 'test product 7', 5, 99, '', 'https://town-src.s3.amazonaws.com/9.16_AINT_LAPai_JHUGHES_LMcDonald_2_600x800px.jpg', 100.02, 'ENABLED','b0b674e2-8485-40cb-8446-73dab84ff782','3ba99c2a-f4c5-40bb-b606-7f833e82fe62');
          `)
  pgm.sql(`
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Jewelry', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Textile', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Photography', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Design', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Sculpture', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Painting', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Printings', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Printmaking', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Furniture', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Glass', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Ceramic', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Tableware', 1, '');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Ring', 2, 'Jewelry');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Earring', 2, 'Jewelry');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Bracelet/Bangle', 2, 'Jewelry');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Necklace', 2, 'Jewelry');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Brooch', 2, 'Jewelry');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Other', 2, 'Jewelry');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Home', 2, 'Textile');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Wearable', 2, 'Textile');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Landscape', 2, 'Photography');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Portraits', 2, 'Photography');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Abstract', 2, 'Photography');
          INSERT INTO "Catalogue" ("name", "level", "father") VALUES
          ('Other', 2, 'Photography');
          `)
}

exports.down = pgm => {}

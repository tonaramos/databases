-- CREATE DATABASE chat;

USE chat;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE messages (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `userName` INTEGER NOT NULL,
  `message` VARCHAR (255) NOT NULL,
  `roomName` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
-- 
-- ---

DROP TABLE IF EXISTS `rooms`;
    
CREATE TABLE `rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `roomName` VARCHAR (255) NOT NULL,
  `userName` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR (255) NOT NULL,

  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (userName) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (roomName) REFERENCES `rooms` (`id`);


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`userName`,`message`,`roomName`) VALUES
-- ('','','','');
-- INSERT INTO `rooms` (`id`,`roomName`,`userName`) VALUES
-- ('','','');
-- INSERT INTO `users` (`id`,`userName`,`roomName`) VALUES
-- ('','','');
-- CREATE TABLE messages (
--    Describe your table here.

-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


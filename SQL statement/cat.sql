use assignment1;
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_id` int(10) unsigned DEFAULT NULL,
  `category_name` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
BEGIN;
INSERT INTO `category` VALUES (1, 'Frozen Food');
INSERT INTO `category` VALUES (2, 'Fresh Food');
INSERT INTO `category` VALUES (3, 'Beverages');
INSERT INTO `category` VALUES (4, 'Home Health');
INSERT INTO `category` VALUES (5, 'Pet Food');
COMMIT;

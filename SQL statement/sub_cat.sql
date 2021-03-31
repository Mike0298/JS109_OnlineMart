use assignment1;
DROP TABLE IF EXISTS `sub_category`;
CREATE TABLE `sub_category` (
  `sub_category_id` int(10) unsigned DEFAULT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `sub_category_name` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
BEGIN;
INSERT INTO `sub_category` VALUES (100, 1, 'Sea Food');
INSERT INTO `sub_category` VALUES (101, 1, 'Milk Products');
INSERT INTO `sub_category` VALUES (102, 1, 'Other');
INSERT INTO `sub_category` VALUES (200, 2, 'Fruit');
INSERT INTO `sub_category` VALUES (201, 2, 'Cheese');
INSERT INTO `sub_category` VALUES (202, 2, 'Meat');
INSERT INTO `sub_category` VALUES (300, 3, 'Tea');
INSERT INTO `sub_category` VALUES (301, 3, 'Coffee');
INSERT INTO `sub_category` VALUES (400, 4, 'Home');
INSERT INTO `sub_category` VALUES (401, 4, 'Health');
INSERT INTO `sub_category` VALUES (500, 5, 'Dry');
INSERT INTO `sub_category` VALUES (501, 5, 'Wet');
COMMIT;

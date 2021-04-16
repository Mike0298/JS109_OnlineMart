use assignment1;
-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(10) unsigned DEFAULT NULL UNIQUE,
  `product_name` varchar(20) DEFAULT NULL,
  `unit_price` float(8,2) DEFAULT NULL,
  `unit_quantity` varchar(15) DEFAULT NULL,
  `in_stock` int(10) unsigned DEFAULT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `sub_category_id` int(10) unsigned DEFAULT NULL,
  `image_url` varchar(2083) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of products
-- ----------------------------
BEGIN;
INSERT INTO `products` VALUES (1000, 'Fish Fingers', 2.55, '500 gram', 1500, 1, 100, 'https://www.mcsuk.org/media/252d1257abdc5bf39065a0f0f24355bb499ef3de.jpeg');
INSERT INTO `products` VALUES (1001, 'Fish Fingers', 5.00, '1000 gram', 750, 1, 100, 'https://www.mcsuk.org/media/252d1257abdc5bf39065a0f0f24355bb499ef3de.jpeg');
INSERT INTO `products` VALUES (1002, 'Hamburger Patties', 2.35, 'Pack 10', 1200, 1, 102, 'https://www.dartagnan.com/on/demandware.static/-/Sites-dartagnan-Library/default/dw9b205a7c/images/content/how-to-make-the-perfect-burger.jpg');
INSERT INTO `products` VALUES (1003, 'Shelled Prawns', 6.90, '250 gram', 300, 1, 100, 'https://groceries.morrisons.com/productImages/355/355923011_0_640x640.jpg');
INSERT INTO `products` VALUES (1004, 'Tub Ice Cream', 1.80, 'I Litre', 800, 1, 101, 'https://i.pinimg.com/originals/b3/97/0b/b3970b160a4d7937c8a29940f407d863.jpg');
INSERT INTO `products` VALUES (1005, 'Tub Ice Cream', 3.40, '2 Litre', 1200, 1, 101, 'https://i.pinimg.com/originals/b3/97/0b/b3970b160a4d7937c8a29940f407d863.jpg');
INSERT INTO `products` VALUES (2000, 'Panadol', 3.00, 'Pack 24', 2000, 4, 401, 'https://www.pharmacyonline.com.au/media/catalog/product/p/a/panadol-extra-40caplets_2.jpg');
INSERT INTO `products` VALUES (2001, 'Panadol', 5.50, 'Bottle 50', 1000, 4, 401, 'https://www.pharmacyonline.com.au/media/catalog/product/p/a/panadol-extra-40caplets_2.jpg');
INSERT INTO `products` VALUES (2002, 'Bath Soap', 2.60, 'Pack 6', 500, 4, 400, 'https://brandongaille.com/wp-content/uploads/2019/05/101-Coolest-Bath-Soap-Names.png');
INSERT INTO `products` VALUES (2003, 'Garbage Bags Small', 1.50, 'Pack 10', 500, 4, 400, 'https://www.glad.com/wp-content/uploads/2019/03/4GalSeaside_NoShadow.png');
INSERT INTO `products` VALUES (2004, 'Garbage Bags Large', 5.00, 'Pack 50', 300, 4, 400, 'https://www.glad.com/wp-content/uploads/2016/08/glad-recycling-large-trash-bags-blue.png');
INSERT INTO `products` VALUES (2005, 'Washing Powder', 4.00, '1000 gram', 800, 4, 400, 'https://previews.123rf.com/images/siberianart/siberianart1803/siberianart180300034/98081944-powder-laundry-detergent-advertising-vector-illustration-washing-powder-foil-bag-package-label-desig.jpg');
INSERT INTO `products` VALUES (3000, 'Cheddar Cheese', 8.00, '500 gram', 1000, 2, 201, 'https://www.culturesforhealth.com/learn/wp-content/uploads/2016/04/Homemade-Cheddar-Cheese-header.jpg');
INSERT INTO `products` VALUES (3001, 'Cheddar Cheese', 15.00, '1000 gram', 1000, 2, 201, 'https://www.culturesforhealth.com/learn/wp-content/uploads/2016/04/Homemade-Cheddar-Cheese-header.jpg');
INSERT INTO `products` VALUES (3002, 'T Bone Steak', 7.00, '1000 gram', 200, 2, 202, 'https://www.omahasteaks.com/blog/wp-content/uploads/2017/09/featured-image-tbone-1080x675.jpg');
INSERT INTO `products` VALUES (3003, 'Navel Oranges', 3.99, 'Bag 20', 200, 2, 200, 'https://images-na.ssl-images-amazon.com/images/I/417n3wrfLgL.jpg');
INSERT INTO `products` VALUES (3004, 'Bananas', 1.49, 'Kilo', 400, 2, 200, 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG.jpg');
INSERT INTO `products` VALUES (3005, 'Peaches', 2.99, 'Kilo', 500, 2, 200, 'https://specials-images.forbesimg.com/imageserve/5f42b5182138dffac9bf05b7/960x0.jpg');
INSERT INTO `products` VALUES (3006, 'Grapes', 3.50, 'Kilo', 200, 2, 200, 'https://specialtyproduce.com/sppics/1224.png');
INSERT INTO `products` VALUES (3007, 'Apples', 1.99, 'Kilo', 500, 2, 200, 'https://businessnc.com/wp-content/uploads/2018/08/apples-getty-839461454.jpg');
INSERT INTO `products` VALUES (4000, 'Earl Grey Tea Bags', 2.49, 'Pack 25', 1200, 3, 300, 'https://www.theteamakers.co.uk/user/products/large/EarlGrey-Envelop.jpg');
INSERT INTO `products` VALUES (4001, 'Earl Grey Tea Bags', 7.25, 'Pack 100', 1200, 3, 300, 'https://www.theteamakers.co.uk/user/products/large/EarlGrey-Envelop.jpg');
INSERT INTO `products` VALUES (4002, 'Earl Grey Tea Bags', 13.00, 'Pack 200', 800, 3, 300, 'https://www.theteamakers.co.uk/user/products/large/EarlGrey-Envelop.jpg');
INSERT INTO `products` VALUES (4003, 'Instant Coffee', 2.89, '200 gram', 500, 3, 301, 'https://image.freepik.com/free-vector/instant-coffee-realistic-poster_1284-26173.jpg');
INSERT INTO `products` VALUES (4004, 'Instant Coffee', 5.10, '500 gram', 500, 3, 301, 'https://image.freepik.com/free-vector/instant-coffee-realistic-poster_1284-26173.jpg');
INSERT INTO `products` VALUES (4005, 'Chocolate Bar', 2.50, '500 gram', 300, 1, 102, 'https://cdn.shopify.com/s/files/1/0041/7497/0991/products/ELF-811_ChocolateBars_Dark_Render_Front_Facing_2_1194x.png');
INSERT INTO `products` VALUES (5000, 'Dry Dog Food', 5.95, '5 kg Pack', 400, 5, 500, 'https://s28489.pcdn.co/wp-content/uploads/2019/02/p1bjirdb0rbosv4q1oba1fesmgf6.jpg');
INSERT INTO `products` VALUES (5001, 'Dry Dog Food', 1.95, '1 kg Pack', 400, 5, 500, 'https://s28489.pcdn.co/wp-content/uploads/2019/02/p1bjirdb0rbosv4q1oba1fesmgf6.jpg');
INSERT INTO `products` VALUES (5002, 'Bird Food', 3.99, '500g packet', 200, 5, 501, 'https://www.duncraft.com/common/images/products/large/1005R_zoom.jpg');
INSERT INTO `products` VALUES (5003, 'Cat Food', 2.00, '500g tin', 200, 5, 501, 'https://images-na.ssl-images-amazon.com/images/I/81Ls1bUiiKL._AC_SL1500_.jpg');
INSERT INTO `products` VALUES (5004, 'Fish Food', 3.00, '500g packet', 200, 5, 501, 'https://sc04.alicdn.com/kf/HTB1fUtlQpXXXXbIXVXX760XFXXXa.png');
INSERT INTO `products` VALUES (2006, 'Laundry Bleach', 3.55, '2 Litre Bottle', 500, 4, 400, 'https://images-na.ssl-images-amazon.com/images/I/81X2D%2BVaOGL._AC_SX425_.jpg');
COMMIT;

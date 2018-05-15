CREATE TABLE `emotion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` TIMESTAMP DEFAULT NOW(),
  `terminal` int(11) DEFAULT NULL,
  `anger` double DEFAULT NULL,
  `disgust` double DEFAULT NULL,
  `fear` double DEFAULT NULL,
  `sadness` double DEFAULT NULL,
  `surprise` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

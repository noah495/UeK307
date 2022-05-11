-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: bettertiq
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `concerts`
--

DROP TABLE IF EXISTS `concerts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `concerts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `artist` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concerts`
--

LOCK TABLES `concerts` WRITE;
/*!40000 ALTER TABLE `concerts` DISABLE KEYS */;
INSERT INTO `concerts` VALUES (1,'The Beatles'),(2,'Elvis Presley'),(3,'Michael Jackson'),(4,'Madonna'),(5,'Elton John'),(6,'ABBA'),(7,'Led Zeppelin'),(8,'Pink Floyd'),(9,'Mariah Carey'),(10,'Céline Dion'),(11,'AC/DC'),(12,'Whitney Houston'),(13,'Queen'),(14,'The Rolling Stones'),(15,'Rihanna'),(16,'Taylor Swift'),(17,'Eminem'),(18,'Garth Brooks'),(19,'Eagles'),(20,'U2'),(21,'Billy Joel'),(22,'Phil Collins'),(23,'Aerosmith'),(24,'Frank Sinatra'),(25,'Barbra Streisand'),(26,'Bon Jovi'),(27,'Genesis'),(28,'Donna Summer'),(29,'Neil Diamond'),(30,'Kanye West'),(31,'Bruce Springsteen'),(32,'Bee Gees'),(33,'Julio Iglesias'),(34,'Dire Straits'),(35,'Lady Gaga'),(36,'Metallica'),(37,'Bruno Mars'),(38,'Jay Z'),(39,'Rod Stewart'),(40,'Britney Spears'),(41,'Fleetwood Mac'),(42,'George Strait'),(43,'Backstreet Boys'),(44,'Guns N’ Roses'),(45,'Prince'),(46,'Paul McCartney'),(47,'Kenny Rogers'),(48,'Janet Jackson'),(49,'Chicago'),(50,'The Carpenters'),(51,'Bob Dylan'),(52,'George Michael'),(53,'Bryan Adams'),(54,'Def Leppard'),(55,'Cher'),(56,'Lionel Richie'),(57,'Olivia Newton-John'),(58,'Stevie Wonder'),(59,'Tina Turner'),(60,'Kiss'),(61,'The Who'),(62,'Barry White'),(63,'Katy Perry'),(64,'Santana'),(65,'Earth, Wind & Fire'),(66,'Beyoncé'),(67,'Shania Twain'),(68,'R.E.M.'),(69,'B’z'),(70,'Coldplay'),(71,'Van Halen'),(72,'Red Hot Chili Peppers'),(73,'The Doors'),(74,'Barry Manilow'),(75,'Johnny Hallyday'),(76,'The Black Eyed Peas'),(77,'Journey'),(78,'Kenny G'),(79,'Enya'),(80,'Green Day'),(81,'Tupac Shakur'),(82,'Nirvana'),(83,'The Police'),(84,'Bob Marley'),(85,'Depeche Mode'),(86,'Aretha Franklin');
/*!40000 ALTER TABLE `concerts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNr` varchar(255) DEFAULT NULL,
  `concertId` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `timeLeft` int DEFAULT NULL,
  `purchaseDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `concertId` (`concertId`),
  CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`concertId`) REFERENCES `concerts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (123,'Noah','Bux','noah@outlook.com','079 420 69 69',81,'pending',15,'2022-05-11 11:04:55'),(124,'Dawid','Kapka','your@mom.com','+41 79 421 54 54',30,'pending',20,'2022-05-11 11:14:59'),(125,'Test','Test','test@test.com','+41 79 123 45 67',81,'paid',10,'2022-05-11 11:29:22'),(127,'No','hellNo','shut@up.pls','234567876',3,'paid',15,'2022-05-11 11:43:50'),(128,'Test2','Test2','test@test.com','078 420 69 69',30,'paid',30,'2022-05-11 12:04:11'),(129,'test','test','test1@test1.ch','234567',4,'paid',30,'2022-05-11 12:18:19'),(130,'sdfasf','asfdasfd','BitteHilfMir@123.chh','124356',1,'paid',30,'2022-05-11 12:19:21'),(131,'Leonie','Roth','laeonie@bauer-ledig-sucht.ch','04113211234',4,'pending',15,'2022-05-11 12:24:35'),(132,'Erik','Benz','powershellLover@shell.sh','079 420 00 00',6,'pending',20,'2022-05-11 12:26:13'),(169,'Vritz ','Gempf','diplomierter-wirtschaftsinformatiker@arduino-bbzw.uri','041 349 79 99',38,'pending',30,'2022-05-11 12:29:17');
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-11 12:30:18

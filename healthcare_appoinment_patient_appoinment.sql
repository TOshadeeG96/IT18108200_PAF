-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: healthcare_appoinment
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `patient_appoinment`
--

DROP TABLE IF EXISTS `patient_appoinment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_appoinment` (
  `app_no` varchar(12) NOT NULL,
  `nic` varchar(12) NOT NULL,
  `firstName` varchar(35) NOT NULL,
  `lastName` varchar(35) DEFAULT NULL,
  `age` varchar(2) NOT NULL,
  `gender` varchar(8) NOT NULL,
  `app_date` date NOT NULL,
  `app_time` varchar(10) NOT NULL,
  `reason` varchar(30) DEFAULT NULL,
  `ref_doc` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`app_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_appoinment`
--

LOCK TABLES `patient_appoinment` WRITE;
/*!40000 ALTER TABLE `patient_appoinment` DISABLE KEYS */;
INSERT INTO `patient_appoinment` VALUES ('','','','','','male','2020-03-04','','',''),('1111p','876543098V','Anil','Costa','78','male','2020-03-04','2.00pm','clinical','Dr.l'),('1112p','876543098V','Sunil','Perera','78','male','2020-03-04','2.00pm','clinical','Dr.l'),('123','2309874521','kapila','peris','39','male','0004-05-06','2.00pm','clinical','Dr.k'),('2212p','653987565v','sirima','herath','55','female','2020-09-08','2.30pm','orthopidic reference','Dr. J. Hilmi'),('2354p','7675498234V','Amith','Perera','23','male','2020-07-08','3.00pm','clinical','Dr.J'),('2567p','763987565v','Keshani','darmasena','48','female','2020-09-07','1.30pm','orthopidic reference','Dr. J. Hilmi'),('3456p','987654323v','Amith','Perera','23','male','2020-06-05','3.00pm','clinical','Dr.k'),('345p','345678912V','Amith','Perera','23','male','2020-05-19','3.00pm','clinical','dr.darmadasa'),('4007p','679235654v','Athula','Bandara','55','male','2020-05-07','12.00pm','eye clinic reference','Dr. sadamali perera'),('4507v','12348896v','seelai','mawani','58','female','2020-08-09','2.00pm','clinical','dr.t.perera'),('4567v','12340986v','seela','mawan','45','female','2020-07-09','2.00pm','clinical','dr.l.perera'),('6507v','12348896v','seyal','athula','58','male','2020-08-09','2.00pm','clinical','dr.t.perera'),('8790p','567432189V','Kumari','perera','67','female','2020-05-20','4.00pm','ENT reference','Dr.C. Thennakoon'),('9872p','663987565v','kamal','Bandara','54','male','2020-06-09','2.00pm','cardiology clinic','Dr. p. jayawardana'),('p1234','23456788v','sunil','Rathnayaka','56','male','2020-04-29','3.00pm','Consulting a doctor','Dr.R. Bandula');
/*!40000 ALTER TABLE `patient_appoinment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-06 21:42:05

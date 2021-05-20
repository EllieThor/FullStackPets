-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2021 at 05:40 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pets`
--

-- --------------------------------------------------------

--
-- Table structure for table `pets`
--

CREATE TABLE `pets` (
  `ID` int(11) NOT NULL,
  `PetName` varchar(255) NOT NULL,
  `PetType` varchar(255) NOT NULL,
  `PetparentId` int(11) NOT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pets`
--

INSERT INTO `pets` (`ID`, `PetName`, `PetType`, `PetparentId`, `DateOfBirth`, `createdAt`, `updatedAt`) VALUES
(1, 'Zoe', 'Cat', 1, '2015-03-30', '2021-05-06 20:35:39', '2021-05-06 17:35:39'),
(2, 'Champy', 'Dog', 2, '2016-01-01', '2021-05-06 20:41:14', '2021-05-06 17:41:14'),
(3, 'Alex', 'Cat', 2, '2016-01-01', '2021-05-06 20:41:31', '2021-05-06 17:41:31'),
(4, 'Mika', 'Dog', 2, '2017-01-01', '2021-05-06 20:41:43', '2021-05-06 17:41:43'),
(5, 'Snoopy', 'Cat', 1, '2017-01-01', '2021-05-06 20:43:38', '2021-05-06 17:43:38');

-- --------------------------------------------------------

--
-- Table structure for table `petsparents`
--

CREATE TABLE `petsparents` (
  `ID` int(11) NOT NULL,
  `ParentName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `petsparents`
--

INSERT INTO `petsparents` (`ID`, `ParentName`) VALUES
(1, 'Sara Mening'),
(2, 'Alison Hendrix');

-- --------------------------------------------------------

--
-- Table structure for table `treatments`
--

CREATE TABLE `treatments` (
  `ID` int(11) NOT NULL,
  `PetId` int(11) NOT NULL,
  `VaccineId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `VisitSummary` varchar(255) DEFAULT NULL,
  `NextTreatment` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `treatments`
--

INSERT INTO `treatments` (`ID`, `PetId`, `VaccineId`, `createdAt`, `VisitSummary`, `NextTreatment`) VALUES
(1, 3, 5, '2021-05-09 19:35:27', 'ללא חום,אישונים תקינים', '2012-12-12 00:00:00'),
(2, 3, 2, '2021-05-09 19:36:49', 'קיבל תרופות הרגעה ', '2015-07-25 00:00:00'),
(6, 3, 2, '2021-05-09 20:11:01', 'test', '2021-05-10 00:00:00'),
(11, 3, 2, '2021-05-09 20:23:31', 'sds', '2021-05-19 00:00:00'),
(13, 3, 2, '2021-05-09 20:26:58', 'chacking', '2021-05-27 00:00:00'),
(15, 2, 3, '2021-05-09 20:39:12', 'שש', '2021-05-13 00:00:00'),
(18, 2, 1, '2021-05-09 20:40:54', 'happy', '2021-05-20 00:00:00'),
(19, 1, 3, '2021-05-10 08:23:50', 'sdfg', '7777-12-14 00:00:00'),
(20, 3, 1, '2021-05-10 08:36:43', 'undefined', '0000-00-00 00:00:00'),
(28, 3, 3, '2021-05-10 19:32:31', 'asd', '2021-05-28 00:00:00'),
(30, 3, 1, '2021-05-10 19:36:45', 'stesting', '2021-05-12 00:00:00'),
(31, 3, 4, '2021-05-10 19:37:26', 'aaaaa', '2021-05-10 00:00:00'),
(32, 3, 3, '2021-05-10 19:38:59', 'bbbb', '2021-05-16 00:00:00'),
(33, 1, 3, '2021-05-10 19:40:54', 'bbbb', '2021-05-16 00:00:00'),
(34, 1, 3, '2021-05-10 19:40:58', 'bbbb', '2021-05-16 00:00:00'),
(35, 1, 3, '2021-05-10 19:40:59', 'bbbb', '2021-05-16 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `vaccines`
--

CREATE TABLE `vaccines` (
  `ID` int(11) NOT NULL,
  `VaccineName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vaccines`
--

INSERT INTO `vaccines` (`ID`, `VaccineName`) VALUES
(1, 'משושה'),
(2, 'כלבת'),
(3, 'שעלת'),
(4, 'תולעת הפארק'),
(5, 'מרובע');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `PetparentId` (`PetparentId`);

--
-- Indexes for table `petsparents`
--
ALTER TABLE `petsparents`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `treatments`
--
ALTER TABLE `treatments`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `VaccineId` (`VaccineId`),
  ADD KEY `PetId` (`PetId`);

--
-- Indexes for table `vaccines`
--
ALTER TABLE `vaccines`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pets`
--
ALTER TABLE `pets`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `petsparents`
--
ALTER TABLE `petsparents`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `treatments`
--
ALTER TABLE `treatments`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `vaccines`
--
ALTER TABLE `vaccines`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pets`
--
ALTER TABLE `pets`
  ADD CONSTRAINT `pets_ibfk_1` FOREIGN KEY (`PetparentId`) REFERENCES `petsparents` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `treatments`
--
ALTER TABLE `treatments`
  ADD CONSTRAINT `treatments_ibfk_1` FOREIGN KEY (`PetId`) REFERENCES `pets` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `treatments_ibfk_2` FOREIGN KEY (`VaccineId`) REFERENCES `vaccines` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

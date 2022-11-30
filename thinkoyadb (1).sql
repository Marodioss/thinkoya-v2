-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2022 at 11:37 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thinkoyadb`
--
CREATE DATABASE IF NOT EXISTS `thinkoyadb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `thinkoyadb`;

-- --------------------------------------------------------

--
-- Table structure for table `designs`
--

CREATE TABLE `designs` (
  `idDesigns` int(11) NOT NULL,
  `TitleDesigns` varchar(45) DEFAULT NULL,
  `DescriptionDesigns` varchar(100) DEFAULT NULL,
  `Category` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `designs`
--

INSERT INTO `designs` (`idDesigns`, `TitleDesigns`, `DescriptionDesigns`, `Category`) VALUES
(46, 'Villa46', '200m , 3 vue , extreme', 'Villa'),
(47, 'Villa A.I', '200m , 3 vue , extreme', 'Villa'),
(48, 'Villa C.T', '200m , 3 vue , extreme', 'Villa'),
(49, 'Villa H.M', '200m , 3 vue , extreme', 'Villa'),
(50, 'Villa V3', '200m , 3 vue , extreme', 'Villa'),
(51, 'Villa L.M', '200m , 3 vue , extreme', 'Villa'),
(52, 'Villa N.H', '200m , 3 vue , extreme', 'Villa'),
(53, 'Villa REDA', '200m , 3 vue , extreme', 'Villa'),
(58, 'VILLA Golf', '200m , 3 vue , extreme', 'Villa'),
(60, 'BENI MELLAL', '200m , 3 vue , extreme', 'Propositions'),
(61, 'CENTRE DE FORMATION OULED SALEH', '200m , 3 vue , extreme', 'Propositions'),
(62, 'CHP OUAZZANE', '200m , 3 vue , extreme', 'Propositions'),
(63, 'CMC BENI MELLAL', '200m , 3 vue , extreme', 'Propositions'),
(64, 'CMC LAAYOUN', '200m , 3 vue , extreme', 'Propositions'),
(65, 'CMC RABAT', '200m , 3 vue , extreme', 'Propositions'),
(66, 'DISTRICT DE POLICE - nouaceur', '200m , 3 vue , extreme', 'Propositions'),
(67, 'ENCG MARRAKECH', '200m , 3 vue , extreme', 'Propositions'),
(68, 'ESEF BERRECHID', '200m , 3 vue , extreme', 'Propositions'),
(69, 'Piscine Couverte -Zenata', '200m , 3 vue , extreme', 'Propositions'),
(70, 'PLATEFORME LOGISTIQUE OUJDA', '200m , 3 vue , extreme', 'Propositions'),
(71, 'SP TANGER', '200m , 3 vue , extreme', 'Propositions'),
(72, 'Siege des impot -Tetouan', '200m , 3 vue , extreme', 'Propositions'),
(73, 'TPI NADOR', '200m , 3 vue , extreme', 'Propositions'),
(74, 'Centre de formation aux métiers de sport - RA', '200m , 3 vue , extreme', 'Equipements'),
(75, 'CENTRE DE FORMATION PROFESSIONNELLE -DRIOUCH ', '200m , 3 vue , extreme', 'Equipements'),
(76, 'CREA', '200m , 3 vue , extreme', 'Equipements'),
(77, 'Centre D\'ESTIVAGE - MARRAKECH -', '200m , 3 vue , extreme', 'Equipements'),
(78, 'Centre pour les femme en situation difficile', '200m , 3 vue , extreme', 'Equipements'),
(79, 'cnpac', '200m , 3 vue , extreme', 'Equipements'),
(80, 'ECOCENTRE - MARRAKECH-', '200m , 3 vue , extreme', 'Equipements'),
(81, 'ISTA DES METIERS DE L’INDUSTRIE DE NOUACEUR –', '200m , 3 vue , extreme', 'Equipements'),
(82, 'GM CASA', '200m , 3 vue , extreme', 'Equipements'),
(83, 'CENTRE SPA - RABAT AGDAL-', '200m , 3 vue , extreme', 'Design Interieur'),
(84, 'Primos rabat', '200m , 3 vue , extreme', 'Design Interieur'),
(86, 'CASA NOTRA', '200m , 3 vue , extreme', 'Design Interieur'),
(87, 'SNACK CHIK\'N PIZZA', '200m , 3 vue , extreme', 'Design Interieur');

-- --------------------------------------------------------

--
-- Table structure for table `designs_image`
--

CREATE TABLE `designs_image` (
  `idImages` int(11) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `design_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `designs_image`
--

INSERT INTO `designs_image` (`idImages`, `image`, `design_id`) VALUES
(61, 'images_1667592723952.jpg', 46),
(62, 'images_1667592724004.jpg', 46),
(63, 'images_1667592724030.jpg', 46),
(64, 'images_1667592751794.jpg', 47),
(65, 'images_1667592751855.jpg', 47),
(66, 'images_1667592751896.jpg', 47),
(67, 'images_1667592751925.jpg', 47),
(68, 'images_1667592751992.jpg', 47),
(69, 'images_1667592752127.jpg', 47),
(70, 'images_1667592752151.jpg', 47),
(71, 'images_1667592752258.jpg', 47),
(72, 'images_1667592773057.jpg', 48),
(73, 'images_1667592773062.jpg', 48),
(74, 'images_1667592773072.jpg', 48),
(75, 'images_1667592773080.jpg', 48),
(76, 'images_1667592773125.jpg', 48),
(77, 'images_1667592773129.bmp', 48),
(78, 'images_1667592773157.bmp', 48),
(79, 'images_1667592773201.jpg', 48),
(80, 'images_1667592801307.jpeg', 49),
(81, 'images_1667592801309.jpeg', 49),
(82, 'images_1667592801311.jpeg', 49),
(83, 'images_1667592801313.jpeg', 49),
(84, 'images_1667592801322.jpeg', 49),
(85, 'images_1667592801325.jpeg', 49),
(86, 'images_1667592822748.jpg', 50),
(87, 'images_1667592823114.jpg', 50),
(88, 'images_1667592823345.jpg', 50),
(89, 'images_1667592823509.jpg', 50),
(90, 'images_1667592840879.jpg', 51),
(91, 'images_1667592840922.jpg', 51),
(92, 'images_1667592840967.jpg', 51),
(93, 'images_1667592841030.jpg', 51),
(94, 'images_1667592879090.jpg', 52),
(95, 'images_1667592879195.jpg', 52),
(96, 'images_1667592879260.jpg', 52),
(97, 'images_1667592879360.jpg', 52),
(98, 'images_1667592879387.jpg', 52),
(99, 'images_1667592906950.jpg', 53),
(100, 'images_1667592906958.jpg', 53),
(101, 'images_1667592906967.jpg', 53),
(102, 'images_1667592906988.jpg', 53),
(103, 'images_1667592907021.jpeg', 53),
(104, 'images_1667592907024.jpeg', 53),
(105, 'images_1667592907026.jpeg', 53),
(106, 'images_1667726703985.jpg', 58),
(107, 'images_1667726704309.jpg', 58),
(108, 'images_1667726704436.jpg', 58),
(109, 'images_1667727153843.jpg', 59),
(110, 'images_1667727154180.jpg', 59),
(111, 'images_1667727154332.jpg', 59),
(112, 'images_1668431525865.jpg', 60),
(113, 'images_1668431525910.jpg', 60),
(114, 'images_1668431525934.jpg', 60),
(115, 'images_1668431525962.jpg', 60),
(116, 'images_1668431590818.jpg', 61),
(117, 'images_1668431591252.jpg', 61),
(118, 'images_1668431591295.jpg', 61),
(119, 'images_1668431591318.jpg', 61),
(120, 'images_1668431591377.jpg', 61),
(121, 'images_1668431632497.jpg', 62),
(122, 'images_1668431632609.jpg', 62),
(123, 'images_1668431632682.jpg', 62),
(124, 'images_1668431632723.jpg', 62),
(125, 'images_1668431632761.jpg', 62),
(126, 'images_1668431682176.jpg', 63),
(127, 'images_1668431682593.jpg', 63),
(128, 'images_1668431737115.jpg', 64),
(129, 'images_1668431737189.jpg', 64),
(130, 'images_1668431737281.jpg', 64),
(131, 'images_1668431737322.jpg', 64),
(132, 'images_1668431737360.jpg', 64),
(134, 'images_1668431781716.jpg', 65),
(135, 'images_1668431781743.jpg', 65),
(136, 'images_1668431781784.jpg', 65),
(137, 'images_1668431781793.png', 65),
(138, 'images_1668431838805.jpg', 66),
(139, 'images_1668431838839.jpg', 66),
(140, 'images_1668431838840.jpg', 66),
(141, 'images_1668431838841.jpg', 66),
(142, 'images_1668431838872.jpg', 66),
(143, 'images_1668431838880.jpg', 66),
(144, 'images_1668431838882.jpg', 66),
(145, 'images_1668431838883.jpg', 66),
(146, 'images_1668431838887.jpg', 66),
(147, 'images_1668431838889.jpg', 66),
(148, 'images_1668431838892.jpg', 66),
(149, 'images_1668431838895.jpg', 66),
(150, 'images_1668431838899.jpg', 66),
(151, 'images_1668431838903.jpg', 66),
(152, 'images_1668431838912.jpg', 66),
(153, 'images_1668431882543.jpg', 67),
(154, 'images_1668431882741.jpg', 67),
(155, 'images_1668431882845.jpg', 67),
(156, 'images_1668431926637.jpg', 68),
(157, 'images_1668431926753.jpg', 68),
(158, 'images_1668431926903.jpg', 68),
(159, 'images_1668431971364.jpg', 69),
(160, 'images_1668431971444.jpg', 69),
(161, 'images_1668431971447.jpg', 69),
(162, 'images_1668431971477.jpg', 69),
(163, 'images_1668431971495.jpg', 69),
(164, 'images_1668431971508.jpg', 69),
(165, 'images_1668431971530.jpg', 69),
(166, 'images_1668431971537.jpg', 69),
(167, 'images_1668432368607.jpg', 70),
(168, 'images_1668432368615.jpg', 70),
(169, 'images_1668432368634.jpg', 70),
(170, 'images_1668432368657.jpg', 70),
(171, 'images_1668432537290.jpg', 71),
(172, 'images_1668432537450.jpg', 71),
(173, 'images_1668432537565.jpg', 71),
(174, 'images_1668432537674.jpg', 71),
(175, 'images_1668432537886.jpg', 71),
(176, 'images_1668432573315.jpg', 72),
(177, 'images_1668432573333.jpg', 72),
(178, 'images_1668432573347.jpg', 72),
(179, 'images_1668432573376.jpg', 72),
(180, 'images_1668432573392.jpg', 72),
(181, 'images_1668432573393.jpg', 72),
(182, 'images_1668432645511.jpg', 73),
(183, 'images_1668432645609.jpg', 73),
(184, 'images_1668432645749.jpg', 73),
(185, 'images_1668432645875.jpg', 73),
(186, 'images_1668432646015.jpg', 73),
(187, 'images_1668432646219.jpg', 73),
(188, 'images_1668432646281.jpg', 73),
(189, 'images_1668432646448.jpg', 73),
(190, 'images_1668432737655.jpg', 74),
(191, 'images_1668432737734.jpg', 74),
(192, 'images_1668432737741.jpg', 74),
(193, 'images_1668432737744.jpg', 74),
(194, 'images_1668432737752.jpg', 74),
(195, 'images_1668432737761.jpg', 74),
(196, 'images_1668432737768.jpg', 74),
(197, 'images_1668432737776.jpg', 74),
(198, 'images_1668432737782.jpg', 74),
(199, 'images_1668432737789.jpg', 74),
(200, 'images_1668432737792.jpg', 74),
(201, 'images_1668432737796.jpg', 74),
(202, 'images_1668432737798.jpg', 74),
(203, 'images_1668432737804.jpg', 74),
(204, 'images_1668432737810.jpg', 74),
(205, 'images_1668432737825.jpg', 74),
(206, 'images_1668432737828.jpg', 74),
(207, 'images_1668432737835.jpg', 74),
(208, 'images_1668432737845.jpg', 74),
(209, 'images_1668432737856.jpg', 74),
(210, 'images_1668432737860.jpg', 74),
(211, 'images_1668432737865.jpg', 74),
(212, 'images_1668432737872.jpg', 74),
(213, 'images_1668432737883.jpg', 74),
(214, 'images_1668432737894.jpg', 74),
(215, 'images_1668432737909.jpg', 74),
(216, 'images_1668432737916.jpg', 74),
(217, 'images_1668432737921.jpg', 74),
(218, 'images_1668432737926.jpg', 74),
(219, 'images_1668432772261.jpg', 75),
(220, 'images_1668432772272.jpg', 75),
(221, 'images_1668432772290.jpg', 75),
(222, 'images_1668432772448.jpg', 75),
(223, 'images_1668432772501.jpg', 75),
(224, 'images_1668432772534.jpg', 75),
(225, 'images_1668432772547.jpg', 75),
(226, 'images_1668432772569.jpg', 75),
(227, 'images_1668432772606.jpg', 75),
(228, 'images_1668432772622.jpg', 75),
(229, 'images_1668432811889.jpg', 76),
(230, 'images_1668432811896.jpg', 76),
(231, 'images_1668432811935.jpg', 76),
(232, 'images_1668432862010.jpg', 77),
(233, 'images_1668432862014.jpg', 77),
(234, 'images_1668432862032.jpg', 77),
(235, 'images_1668432862038.jpg', 77),
(236, 'images_1668432893058.jpg', 78),
(237, 'images_1668432893170.jpg', 78),
(238, 'images_1668432893243.jpg', 78),
(239, 'images_1668432893307.jpg', 78),
(240, 'images_1668432893373.jpg', 78),
(241, 'images_1668432893414.jpg', 78),
(242, 'images_1668432893420.jpg', 78),
(243, 'images_1668432893427.jpg', 78),
(244, 'images_1668432893429.jpg', 78),
(245, 'images_1668432893433.jpg', 78),
(246, 'images_1668432893435.jpg', 78),
(247, 'images_1668432893456.jpg', 78),
(248, 'images_1668432893484.jpg', 78),
(249, 'images_1668432893540.jpg', 78),
(250, 'images_1668432893569.jpg', 78),
(251, 'images_1668432893613.jpg', 78),
(252, 'images_1668432937865.jpg', 79),
(253, 'images_1668432937904.jpg', 79),
(254, 'images_1668432937913.jpg', 79),
(255, 'images_1668432937937.jpg', 79),
(256, 'images_1668432937972.jpg', 79),
(257, 'images_1668432937990.jpg', 79),
(258, 'images_1668432938051.jpg', 79),
(259, 'images_1668432938086.jpg', 79),
(260, 'images_1668432938089.jpeg', 79),
(261, 'images_1668433011311.jpg', 80),
(262, 'images_1668433011464.jpg', 80),
(263, 'images_1668433011638.jpg', 80),
(264, 'images_1668433011745.jpg', 80),
(265, 'images_1668433011843.jpg', 80),
(266, 'images_1668433011897.jpg', 80),
(267, 'images_1668433127761.jpg', 81),
(268, 'images_1668433127991.jpg', 81),
(269, 'images_1668433128098.jpg', 81),
(270, 'images_1668433128174.jpg', 81),
(271, 'images_1668433128263.jpg', 81),
(272, 'images_1668433128347.jpg', 81),
(273, 'images_1668433169586.jpg', 82),
(274, 'images_1668433169638.jpg', 82),
(275, 'images_1668433169705.jpg', 82),
(276, 'images_1668433169813.jpg', 82),
(277, 'images_1668433169822.jpg', 82),
(278, 'images_1668433261308.jpeg', 83),
(279, 'images_1668433261308.jpeg', 83),
(280, 'images_1668433261309.jpeg', 83),
(281, 'images_1668433339585.jpg', 84),
(282, 'images_1668433339588.jpg', 84),
(283, 'images_1668433339591.jpg', 84),
(284, 'images_1668433339592.jpg', 84),
(285, 'images_1668433339593.jpeg', 84),
(286, 'images_1668433339594.jpeg', 84),
(287, 'images_1668433339595.jpeg', 84),
(288, 'images_1668433339596.jpeg', 84),
(289, 'images_1668433339597.jpeg', 84),
(290, 'images_1668433339598.jpeg', 84),
(291, 'images_1668433339599.jpeg', 84),
(292, 'images_1668433339600.jpeg', 84),
(293, 'images_1668433339602.jpeg', 84),
(294, 'images_1668433339602.jpeg', 84),
(295, 'images_1668433339611.jpeg', 84),
(296, 'images_1668433339612.jpeg', 84),
(297, 'images_1668433339953.jpg', 85),
(298, 'images_1668433339957.jpg', 85),
(299, 'images_1668433339960.jpg', 85),
(300, 'images_1668433339961.jpg', 85),
(301, 'images_1668433339963.jpeg', 85),
(302, 'images_1668433339964.jpeg', 85),
(303, 'images_1668433339965.jpeg', 85),
(304, 'images_1668433339969.jpeg', 85),
(305, 'images_1668433339971.jpeg', 85),
(306, 'images_1668433339972.jpeg', 85),
(307, 'images_1668433339973.jpeg', 85),
(308, 'images_1668433339974.jpeg', 85),
(309, 'images_1668433339975.jpeg', 85),
(310, 'images_1668433339976.jpeg', 85),
(311, 'images_1668433339977.jpeg', 85),
(312, 'images_1668433339978.jpeg', 85),
(313, 'images_1668433382290.jpg', 86),
(314, 'images_1668433382295.bmp', 86),
(315, 'images_1668433382324.jpg', 86),
(316, 'images_1668433382327.jpg', 86),
(317, 'images_1668433382331.jpg', 86),
(318, 'images_1668433382342.jpg', 86),
(319, 'images_1668433382352.jpg', 86),
(320, 'images_1668433382361.bmp', 86),
(321, 'images_1668433420546.png', 87),
(322, 'images_1668433420551.png', 87),
(323, 'images_1668433420603.jpg', 87),
(324, 'images_1668433420608.bmp', 87);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `designs`
--
ALTER TABLE `designs`
  ADD PRIMARY KEY (`idDesigns`);

--
-- Indexes for table `designs_image`
--
ALTER TABLE `designs_image`
  ADD PRIMARY KEY (`idImages`),
  ADD KEY `Fkdesign_id` (`design_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `designs`
--
ALTER TABLE `designs`
  MODIFY `idDesigns` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `designs_image`
--
ALTER TABLE `designs_image`
  MODIFY `idImages` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=325;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

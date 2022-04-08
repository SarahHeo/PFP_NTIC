-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 21 juin 2021 à 00:05
-- Version du serveur :  10.4.19-MariaDB
-- Version de PHP : 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ntic`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `IDcategorie` int(11) NOT NULL,
  `Nom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `medecin`
--

CREATE TABLE `medecin` (
  `IDmedecin` int(11) NOT NULL,
  `NomMedecin` varchar(255) NOT NULL,
  `PrenomMedecin` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `MotDePasse` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `medecin`
--

INSERT INTO `medecin` (`IDmedecin`, `NomMedecin`, `PrenomMedecin`, `Email`, `MotDePasse`) VALUES
(22, 'Dupont', 'Jean', 'Jean@gmail.com', '*69E04464BC0A7BEA62070D6C8E465A3E0AC4FBAC');

-- --------------------------------------------------------

--
-- Structure de la table `medecin_patient`
--

CREATE TABLE `medecin_patient` (
  `IDmedecin` int(11) NOT NULL,
  `IDpatient` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `patient`
--

CREATE TABLE `patient` (
  `IDpatient` int(11) NOT NULL,
  `NomPatient` varchar(255) NOT NULL,
  `PrenomPatient` varchar(255) NOT NULL,
  `Age` int(3) NOT NULL,
  `Sexe` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `patient`
--

INSERT INTO `patient` (`IDpatient`, `NomPatient`, `PrenomPatient`, `Age`, `Sexe`) VALUES
(21, 'A', 'A', 0, 'A'),
(22, 'Dubois', 'Paul', 25, 'Homme');

-- --------------------------------------------------------

--
-- Structure de la table `pictogramme`
--

CREATE TABLE `pictogramme` (
  `IDpictogramme` int(11) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `pictogramme`
--

INSERT INTO `pictogramme` (`IDpictogramme`, `Nom`, `url`) VALUES
(1, 'Abricot', 'https://i.ibb.co/p38m4cV/Abricots.jpg'),
(2, 'Ananas', 'https://i.ibb.co/pdWKKg6/Ananas.jpg'),
(3, 'Banane', 'https://i.ibb.co/GPMsXKV/Banane.jpg'),
(4, 'Cerise', 'https://i.ibb.co/hXQ53wv/Cerises.jpg'),
(5, 'Citron', 'https://i.ibb.co/Df96FX9/Citron.jpg'),
(6, 'Eau', 'https://i.ibb.co/6RM6RHS/Eau.jpg'),
(7, 'Fraises', 'https://i.ibb.co/6mZGsjY/Fraises.jpg'),
(8, 'Framboises', 'https://i.ibb.co/D9wLMND/Framboises.jpg'),
(9, 'Fruits', 'https://i.ibb.co/x1Nfcm4/Fruits.jpg'),
(10, 'Jus d\'orange', 'https://i.ibb.co/GF49VtK/Jus-d-orange.jpg'),
(11, 'jus de pomme', 'https://i.ibb.co/7GBGHcB/Jus-de-pomme.jpg'),
(12, 'jus de raisin', 'https://i.ibb.co/HnWGkRx/Jus-de-raisin.jpg'),
(13, 'kiwi', 'https://i.ibb.co/hHVfzQs/Kiwi.jpg'),
(14, 'lait', 'https://i.ibb.co/DQ1YF7N/Lait.jpg'),
(15, 'Pastèque', 'https://i.ibb.co/wS6yMrk/Melon-d-eau.jpg'),
(16, 'Orange', 'https://i.ibb.co/7g9Dzjr/Orange.jpg'),
(17, 'Pèche', 'https://i.ibb.co/hBcqrxx/P-che.jpg'),
(18, 'poire', 'https://i.ibb.co/nmZ9mk8/Poire.jpg'),
(19, 'Bonjour', 'https://i.ibb.co/CM6M5VM/344-Bonjour.jpg'),
(20, 'S\'il te plait', 'https://i.ibb.co/VTscdvr/346-S-il-te-pla-t.jpg'),
(21, 'Merci', 'https://i.ibb.co/Dg6rxFw/347-Merci.jpg'),
(22, 'Encore', 'https://i.ibb.co/ssnqsnV/394-Encore.jpg'),
(23, 'Je', 'https://i.ibb.co/QJrnXV0/397-Je.jpg'),
(24, 'Tu', 'https://i.ibb.co/qk8ctkB/398-Tu.jpg'),
(25, 'Il', 'https://i.ibb.co/W6wcXZj/399-Il.jpg'),
(26, 'Nous', 'https://i.ibb.co/gMm17xg/400-Nous.jpg'),
(27, 'être', 'https://i.ibb.co/8xDF648/382-tre.jpg'),
(28, 'Lancer', 'https://i.ibb.co/BTX1xPR/385-Lancer.jpg'),
(29, 'Marcher', 'https://i.ibb.co/8bWMb11/386-Marcher.jpg'),
(30, 'Regarder', 'https://i.ibb.co/5x066rP/389-Regarder.jpg'),
(31, 'Veux', 'https://i.ibb.co/YR1SQ1W/391-Vouloir.jpg'),
(38, 'Avec', 'https://i.ibb.co/9Tbpzkq/392-Avec.jpg'),
(39, 'Drole', 'https://i.ibb.co/c8PF8wn/357-Dr-le.jpg'),
(40, 'Calme', 'https://i.ibb.co/hfkMtfZ/360-Calme.jpg'),
(41, 'Excité', 'https://i.ibb.co/jTvHvdT/358-Excit.jpg'),
(42, 'Heureux', 'https://i.ibb.co/NFSjhGt/359-Heureux.jpg'),
(43, 'Jouer', 'https://i.ibb.co/16TqWnk/305-Jeux-ou-jouer.jpg'),
(44, 'Téléphone', 'https://i.ibb.co/0tR6Vcs/318-T-l-phone.jpg'),
(45, 'Télévision', 'https://i.ibb.co/8KqsbJW/319-T-l-viseur.jpg'),
(46, 'Manger', 'https://i.ibb.co/gW5Y94D/41-Manger.jpg'),
(47, 'Boire', 'https://i.ibb.co/JH2p6tN/36-Boire.jpg'),
(48, 'Non', 'https://i.ibb.co/vZxVC1r/98-Non-t-te-en-mouvement.jpg'),
(49, 'Oui', 'https://i.ibb.co/DDYjtcg/100-Oui-t-te-en-mouvement.jpg'),
(57, 'Train', 'https://i.ibb.co/tzbpkk8/312-Train.jpg'),
(58, 'Voiture', 'https://i.ibb.co/BGL0ryZ/313-Voitures-et-camions-jouets.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `picto_favoris`
--

CREATE TABLE `picto_favoris` (
  `IDfavoris` int(11) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `picto_favoris`
--

INSERT INTO `picto_favoris` (`IDfavoris`, `Nom`, `url`) VALUES
(1, 'Oui', 'https://i.ibb.co/DDYjtcg/100-Oui-t-te-en-mouvement.jpg'),
(2, 'Non', 'https://i.ibb.co/vZxVC1r/98-Non-t-te-en-mouvement.jpg'),
(3, 'Bonjour', 'https://i.ibb.co/CM6M5VM/344-Bonjour.jpg'),
(4, 'S\'il te plaît', 'https://i.ibb.co/VTscdvr/346-S-il-te-pla-t.jpg'),
(5, 'Merci', 'https://i.ibb.co/Dg6rxFw/347-Merci.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`IDcategorie`);

--
-- Index pour la table `medecin`
--
ALTER TABLE `medecin`
  ADD PRIMARY KEY (`IDmedecin`);

--
-- Index pour la table `medecin_patient`
--
ALTER TABLE `medecin_patient`
  ADD KEY `IDmedecin` (`IDmedecin`),
  ADD KEY `IDpatient` (`IDpatient`);

--
-- Index pour la table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`IDpatient`);

--
-- Index pour la table `pictogramme`
--
ALTER TABLE `pictogramme`
  ADD PRIMARY KEY (`IDpictogramme`);

--
-- Index pour la table `picto_favoris`
--
ALTER TABLE `picto_favoris`
  ADD PRIMARY KEY (`IDfavoris`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `IDcategorie` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `medecin`
--
ALTER TABLE `medecin`
  MODIFY `IDmedecin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `patient`
--
ALTER TABLE `patient`
  MODIFY `IDpatient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `pictogramme`
--
ALTER TABLE `pictogramme`
  MODIFY `IDpictogramme` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT pour la table `picto_favoris`
--
ALTER TABLE `picto_favoris`
  MODIFY `IDfavoris` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `medecin_patient`
--
ALTER TABLE `medecin_patient`
  ADD CONSTRAINT `medecin_patient_ibfk_1` FOREIGN KEY (`IDmedecin`) REFERENCES `medecin` (`IDmedecin`),
  ADD CONSTRAINT `medecin_patient_ibfk_2` FOREIGN KEY (`IDpatient`) REFERENCES `patient` (`IDpatient`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

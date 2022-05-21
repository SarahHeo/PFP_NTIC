-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 17 mai 2022 à 21:46
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

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
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(0, 'test');

-- --------------------------------------------------------

--
-- Structure de la table `educator`
--

DROP TABLE IF EXISTS `educator`;
CREATE TABLE IF NOT EXISTS `educator` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `educator`
--

INSERT INTO `educator` (`id`, `name`, `firstName`, `email`, `password`) VALUES
(22, 'Dupont', 'Jean', 'Jean@gmail.com', '*69E04464BC0A7BEA62070D6C8E465A3E0AC4FBAC'),
(23, 'Sarah', 'HEOUAINE', 'sarah@test.fr', '$2b$10$9rcXhL5o0GmR4WgWCOkGauCoqEVzLfzM.fBVrld.ty5Nr/8Djh0Bu');

-- --------------------------------------------------------

--
-- Structure de la table `educator_user`
--

DROP TABLE IF EXISTS `educator_user`;
CREATE TABLE IF NOT EXISTS `educator_user` (
  `idEducator` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  KEY `idUser` (`idUser`) USING BTREE,
  KEY `idEducator` (`idEducator`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `pictogram`
--

DROP TABLE IF EXISTS `pictogram`;
CREATE TABLE IF NOT EXISTS `pictogram` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idCaterogy` (`idCategory`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1291 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `pictogram`
--

INSERT INTO `pictogram` (`id`, `name`, `idCategory`, `url`) VALUES
(731, 'Ferme la porte', 0, '1-_Ferme_la_porte-1652737346084.jpeg'),
(732, 'Baisse ton pantalon', 0, '2-_Baisse_ton_pantalon-1652737346111.jpeg'),
(733, 'Toilette', 0, '3-_Toilette-1652737346131.jpeg'),
(734, 'Déchire le papier', 0, '4-_Dechire_le_papier-1652737346169.jpeg'),
(735, 'Plie le papier', 0, '5-_Plie_le_papier-1652737346185.jpeg'),
(736, 'Essuie tes fesses', 0, '6-_Essuie_tes_fesses-1652737346212.jpeg'),
(737, 'Papier sale', 0, '7-_Papier_sale-1652737346231.jpeg'),
(738, 'Papier propre', 0, '8-_Papier_propre-1652737346252.jpeg'),
(739, 'Caca dans la toilette', 0, '9-_Caca_dans_la_toilette-1652737346277.jpeg'),
(740, 'Essuie le pipi', 0, '10-_Essuie_le_pipi-1652737346324.jpeg'),
(741, 'Jette le papier', 0, '11-_Jette_le_papier-1652737346366.jpeg'),
(742, 'Monte tes pantalons', 0, '12-_Monte_tes_pantalons-1652737346384.jpeg'),
(743, 'Tire la chasse', 0, '13-_Tire_la_chasse-1652737346406.jpeg'),
(744, 'Ouvre la porte', 0, '14-_Ouvre_la_porte-1652737346431.jpeg'),
(745, 'Lave tes mains', 0, '15-_Lave_tes_mains-1652737346448.jpeg'),
(746, 'Ouvre le robinet', 0, '16-_Ouvre_le_robinet-1652737346467.jpeg'),
(747, 'Mouille tes mains', 0, '17-_Mouille_tes_mains-1652737346475.jpeg'),
(748, 'Savonne tes mains', 0, '18-_Savonne_tes_mains-1652737346491.jpeg'),
(749, 'Ferme le robinet', 0, '19-_Ferme_le_robinet-1652737346514.jpeg'),
(750, 'Essuie tes mains', 0, '20-_Essuie_tes_mains-1652737346544.jpeg'),
(751, 'Envie de pipi', 0, '21-_Envie_de_pipi-1652737346556.jpeg'),
(752, 'Mouiller ses vêtements', 0, '22-_Mouiller_ses_vetements-1652737346572.jpeg'),
(753, 'Force sur la toilette', 0, '23-_Force_sur_la_toilette-1652737346594.jpeg'),
(754, 'Pipi debout', 0, '24-_Pipi_debout-1652737346667.jpeg'),
(755, 'Essuie le pipi', 0, '25-_Essuie_le_pipi-1652737346738.jpeg'),
(756, 'Urinoir', 0, '26-_Urinoir-1652737346765.jpeg'),
(757, 'Se lever la nuit', 0, '27-_Se_lever_la_nuit-1652737346790.jpeg'),
(758, 'Pipi debout', 0, '28-_Pipi_debout-1652737346812.jpeg'),
(759, 'Toilette', 0, '29-Toilette-1652737346836.jpeg'),
(760, 'Prends du papier', 0, '30-_Prends_du_papier-1652737346883.jpeg'),
(761, 'Essuie tes fesses', 0, '31-_Essuie_tes_fesses-1652737346927.jpeg'),
(762, 'Tire la chasse', 0, '32-_Tire_la_chasse-1652737346999.jpeg'),
(763, 'Fier de soi', 0, '33-_Fier_de_soi-1652737347018.jpeg'),
(764, 'Mouille ta brosse', 0, '34-_Mouille_ta_brosse-1652737347036.jpeg'),
(765, 'Mets du dentifrice', 0, '35-_Mets_du_dentifrice-1652737347051.jpeg'),
(766, 'Brosse tes dents', 0, '36-_Brosse_tes_dents-1652737347060.jpeg'),
(767, 'Rince ta bouche', 0, '37-_Rince_ta_bouche-1652737347088.jpeg'),
(768, 'Crache', 0, '38-_Crache-1652737347097.jpeg'),
(769, 'Peigne tes cheveux', 0, '39-_Peigne_tes_cheveux-1652737347105.jpeg'),
(770, 'Vernis à ongles', 0, '40-_Vernis_a_ongles-1652737347125.jpeg'),
(771, 'Couper les ongles', 0, '41-_Couper_les_ongles-1652737347147.jpeg'),
(772, 'Bain', 0, '42-_Bain-1652737347170.jpeg'),
(773, 'Déshabille-toi', 0, '43-_Deshabille-toi-1652737347182.jpeg'),
(774, 'Entre dans le bain', 0, '44-_Entre_dans_le_bain-1652737347198.jpeg'),
(775, 'Lave tes mains', 0, '45-_Lave_tes_mains-1652737347213.jpeg'),
(776, 'Mets du savon', 0, '46-_Mets_du_savon-1652737347246.jpeg'),
(777, 'Savonne', 0, '47-_Savonne-1652737347275.jpeg'),
(778, 'Lave ton visage', 0, '48-_Lave_ton_visage-1652737347295.jpeg'),
(779, 'Lave ton épaule', 0, '49-_Lave_ton_epaule-1652737347313.jpeg'),
(780, 'Lave tes aisselles', 0, '50-_Lave_tes_aisselles-1652737347363.jpeg'),
(781, 'Lave ton ventre', 0, '51-_Lave_ton_ventre-1652737347380.jpeg'),
(782, 'Lave tes fesses', 0, '52-_Lave_tes_fesses-1652737347391.jpeg'),
(783, 'Lave ton pénis', 0, '53-_Lave_ton_penis-1652737347406.jpeg'),
(784, 'Lave tes jambes', 0, '54-_Lave_tes_jambes-1652737347415.jpeg'),
(785, 'Mouille tes cheveux', 0, '55-_Mouille_tes_cheveux-1652737347457.jpeg'),
(786, 'Essuie tes yeux', 0, '56-_Essuie_tes_yeux-1652737347480.jpeg'),
(787, 'Prends du shampoing', 0, '57-_Prends_du_shampoing-1652737347492.jpeg'),
(788, 'Mousse tes cheveux', 0, '58-_Mousse_tes_cheveux-1652737347502.jpeg'),
(789, 'Rince tes cheveux', 0, '59-_Rince_tes_cheveux-1652737347510.jpeg'),
(790, 'Essuie-toi', 0, '60-_Essuie-toi-1652737347541.jpeg'),
(791, 'Mets tes culottes', 0, '61-_Mets_tes_culottes-1652737347598.jpeg'),
(792, 'Mets ta camisole', 0, '62-_Mets_ta_camisole-1652737347604.jpeg'),
(793, 'Mets ton chandail', 0, '63-_Mets_ton_chandail-1652737347621.jpeg'),
(794, 'Mets tes bas', 0, '64-_Mets_tes_bas-1652737347629.jpeg'),
(795, 'Mets ta jupe', 0, '65-_Mets_ta_jupe-1652737347644.jpeg'),
(796, 'Mets ton pantalon', 0, '66-_Mets_ton_pantalon-1652737347662.jpeg'),
(797, 'Mets tes chaussettes', 0, '67-_Mets_tes_chaussettes-1652737347694.jpeg'),
(798, 'Mets tes bas', 0, '68-_Mets_tes_bas-1652737347709.jpeg'),
(799, 'Mets ta robe', 0, '69-_Mets_ta_robe-1652737347718.jpeg'),
(800, 'Mets tes souliers', 0, '70-_Mets_tes_souliers-1652737347728.jpeg'),
(801, 'Mets tes bottes', 0, '71-_Mets_tes_bottes-1652737347738.jpeg'),
(802, 'Habille-toi', 0, '72-_Habille-toi-1652737347758.jpeg'),
(803, 'Mets tes culottes', 0, '73-_Mets_tes_culottes-1652737347779.jpeg'),
(804, 'Mets ta camisole', 0, '74-_Mets_ta_camisole-1652737347787.jpeg'),
(805, 'Mets ton pantalon', 0, '75-_Mets_ton_pantalon-1652737347797.jpeg'),
(806, 'Mets tes chaussettes', 0, '76-_Mets_tes_chaussettes-1652737347806.jpeg'),
(807, 'Mets tes souliers', 0, '77-_Mets_tes_souliers-1652737347817.jpeg'),
(808, 'Détache tes souliers', 0, '78-_Detache_tes_souliers-1652737347860.jpeg'),
(809, 'Enlève ton chandail', 0, '79-_Enleve_ton_chandail-1652737347883.jpeg'),
(810, 'Enlève tes chaussettes', 0, '80-_Enleve_tes_chaussettes-1652737347900.jpeg'),
(811, 'Enlève ta casquette', 0, '81-_Enleve_ta_casquette-1652737347911.jpeg'),
(812, 'Enlève tes mitaines', 0, '82-_Enleve_tes_mitaines-1652737347939.jpeg'),
(813, 'Enlève ta tuque', 0, '83-_Enleve_ta_tuque-1652737347995.jpeg'),
(814, 'Enlève ton foulard', 0, '84-_Enleve_ton_foulard-1652737348010.jpeg'),
(815, 'Détache ton manteau', 0, '85-_Detache_ton_manteau-1652737348023.jpeg'),
(816, 'Enlève ton manteau', 0, '86-_Enleve_ton_manteau-1652737348036.jpeg'),
(817, 'Enlève tes bottes', 0, '87-_Enleve_tes_bottes-1652737348046.jpeg'),
(818, 'Enlève ton pantalon', 0, '88-_Enleve_ton_pantalon-1652737348083.jpeg'),
(819, 'Mets ton cache-col', 0, '89-_Mets_ton_cache-col-1652737348097.jpeg'),
(820, 'Mets tes lunettes', 0, '90-_Mets_tes_lunettes-1652737348137.jpeg'),
(821, 'Dormir', 0, '91-_Dormir-1652737348186.jpeg'),
(822, 'Fais ton lit', 0, '92-_Fais_ton_lit-1652737348219.jpeg'),
(823, 'Brosse tes dents', 0, '93-_Brosse_tes_dents-1652737348227.jpeg'),
(824, 'Histoire', 0, '94-_Histoire-1652737348275.jpeg'),
(825, 'Bonne nuit', 0, '95-_Bonne_nuit-1652737348297.jpeg'),
(826, 'Bonne nuit', 0, '96-_Bonne_nuit-1652737348316.jpeg'),
(827, 'Dormir', 0, '97-_Dormir-1652737348337.jpeg'),
(828, 'Maman dort', 0, '98-_Maman_dort-1652737348367.jpeg'),
(829, 'Fais ton lit', 0, '99-_Fais_ton_lit-1652737348394.jpeg'),
(830, 'Accroche ton pyjama', 0, '100-_Accroche_ton_pyjama-1652737348432.jpeg'),
(831, 'Fille de face', 0, '101-_Fille_de_face-1652737348456.jpeg'),
(832, 'Fille de dos', 0, '102-_Fille_de_dos-1652737348568.jpeg'),
(833, 'Garçon de face', 0, '103-_Garcon_de_face-1652737348729.jpeg'),
(834, 'Garçon de dos', 0, '104-_Garcon_de_dos-1652737348806.jpeg'),
(835, 'Cheveux', 0, '105-_Cheveux-1652737348852.jpeg'),
(836, 'Yeux', 0, '106-_Yeux-1652737348878.jpeg'),
(837, 'Nez', 0, '107-_Nez-1652737348901.jpeg'),
(838, 'Bouche', 0, '108-_Bouche-1652737349000.jpeg'),
(839, 'Langue', 0, '109-_Langue-1652737349034.jpeg'),
(840, 'Dents', 0, '110-_Dents-1652737349038.jpeg'),
(841, 'Oreille', 0, '111-_Oreille-1652737349091.jpeg'),
(842, 'Gorge', 0, '112-_Gorge-1652737349100.jpeg'),
(843, 'Poitrine', 0, '113-_Poitrine-1652737349129.jpeg'),
(844, 'Bras', 0, '114-_Bras-1652737349180.jpeg'),
(845, 'Épaule', 0, '115-_Epaule-1652737349201.jpeg'),
(846, 'Coude', 0, '116-_Coude-1652737349212.jpeg'),
(847, 'poignet', 0, '117-_poignet-1652737349245.jpeg'),
(848, 'Main', 0, '118-_Main-1652737349261.jpeg'),
(849, 'Pouce', 0, '119-_Pouce-1652737349285.jpeg'),
(850, 'Doigt', 0, '120-_Doigt-1652737349302.jpeg'),
(851, 'Ventre', 0, '121-_Ventre-1652737349316.jpeg'),
(852, 'Nombril', 0, '122-_Nombril-1652737349334.jpeg'),
(853, 'Dos', 0, '123-_Dos-1652737349359.jpeg'),
(854, 'Fesses', 0, '124-_Fesses-1652737349380.jpeg'),
(855, 'Pénis', 0, '125-_Penis-1652737349412.jpeg'),
(856, 'Vulve', 0, '126-_Vulve-1652737349431.jpeg'),
(857, 'Jambe', 0, '127-_Jambe-1652737349455.jpeg'),
(858, 'Cuisse', 0, '128-_Cuisse-1652737349476.jpeg'),
(859, 'Genoux', 0, '129-_Genoux-1652737349796.jpeg'),
(860, 'Mollet', 0, '130-_Mollet-1652737349848.jpeg'),
(861, 'Cheville', 0, '131-_Cheville-1652737349882.jpeg'),
(862, 'Pied', 0, '132-_Pied-1652737349894.jpeg'),
(863, 'Orteils', 0, '133-_Orteils-1652737349918.jpeg'),
(864, 'Montrer où j\'ai mal', 0, '134-_Montrer_ou_j\'ai_mal-1652737349955.jpeg'),
(865, 'Montrer où j\'ai mal', 0, '135-_Montrer_ou_j\'ai_mal-1652737349968.jpeg'),
(866, 'Mal à la tête', 0, '136-_Mal_a_la_tete-1652737349983.jpeg'),
(867, 'Mal aux oreilles', 0, '137-_Mal_aux_oreilles-1652737350004.jpeg'),
(868, 'Mal aux dents', 0, '138-_Mal_aux_dents-1652737350049.jpeg'),
(869, 'Mal à la gorge', 0, '139-_Mal_a_la_gorge-1652737350066.jpeg'),
(870, 'Mal à la poitrine', 0, '140-_Mal_a_la_poitrine-1652737350090.jpeg'),
(871, 'Mal au bras', 0, '141-_Mal_au_bras-1652737350117.jpeg'),
(872, 'Mal à la main', 0, '142-_Mal_a_la_main-1652737350134.jpeg'),
(873, 'Mal au ventre', 0, '143-_Mal_au_ventre-1652737350149.jpeg'),
(874, 'Mal au dos', 0, '144-_Mal_au_dos-1652737350184.jpeg'),
(875, 'Mal quand je fais pipi', 0, '145-_Mal_quand_je_fais_pipi-1652737350212.jpeg'),
(876, 'Mal au derrière', 0, '146-_Mal_au_derriere-1652737350233.jpeg'),
(877, 'Mal à la jambe', 0, '147-_Mal_a_la_jambe-1652737350255.jpeg'),
(878, 'Mal aux pieds', 0, '148-_Mal_aux_pieds-1652737350277.jpeg'),
(879, 'Malade', 0, '149-_Malade-1652737350291.jpeg'),
(880, 'Étourdi', 0, '150-_Etourdi-1652737350341.jpeg'),
(881, 'Mal au coeur', 0, '151-_Mal_au_coeur-1652737350354.jpeg'),
(882, 'Vomir', 0, '152-_Vomir-1652737350391.jpeg'),
(883, 'Je n\'ai pas mal', 0, '153-_Je_n\'ai_pas_mal-1652737350425.jpeg'),
(884, 'Je me sens bizarre', 0, '154-_Je_me_sens_bizarre-1652737350451.jpeg'),
(885, 'J\'ai un peu mal', 0, '155-_J\'ai_un_peu_mal-1652737350479.jpeg'),
(886, 'J\'ai mal', 0, '156-_J\'ai_mal-1652737350508.jpeg'),
(887, 'J\'ai très mal', 0, '157-_J\'ai_tres_mal-1652737350542.jpeg'),
(888, 'J\'ai trop mal', 0, '158-_J\'ai_trop_mal-1652737350577.jpeg'),
(889, 'Hôpital', 0, '159-_Hopital-1652737350645.jpeg'),
(890, 'Salle d\'attente', 0, '160-_Salle_d\'attente-1652737350674.jpeg'),
(891, 'Médecin', 0, '161-_Medecin-1652737350728.jpeg'),
(892, 'Parler avec le médecin', 0, '162-_Parler_avec_le_medecin-1652737350736.jpeg'),
(893, 'Prendre la pression', 0, '163-_Prendre_la_pression-1652737350814.jpeg'),
(894, 'Réflexes', 0, '164-_Reflexes-1652737350950.jpeg'),
(895, 'Prendre la température', 0, '165-_Prendre_la_temperature-1652737351030.jpeg'),
(896, 'Prise de sang', 0, '166-_Prise_de_sang-1652737351049.jpeg'),
(897, 'Rayons X', 0, '167-_Rayons_X-1652737351073.jpeg'),
(898, 'Soluté', 0, '168-_Solute-1652737351088.jpeg'),
(899, 'Dormir à l\'hopital', 0, '169-_Dormir_a_l\'hopital-1652737351126.jpeg'),
(900, 'Pharmacien', 0, '170-_Pharmacien-1652737351155.jpeg'),
(901, 'Médicaments', 0, '171-_Medicaments-1652737351184.jpeg'),
(902, 'Sirop', 0, '172-_Sirop-1652737351237.jpeg'),
(903, 'Inhalateur', 0, '173-_Inhalateur-1652737351258.jpeg'),
(904, 'Pansement', 0, '174-_Pansement-1652737351281.jpeg'),
(905, 'Diffuseur', 0, '175-_Diffuseur-1652737351298.jpeg'),
(906, 'Diffuseur', 0, '176-_Diffuseur-1652737351345.jpeg'),
(907, 'Huiles essentielles', 0, '177-_Huiles_essentielles-1652737351388.jpeg'),
(908, 'Optométriste', 0, '178-_Optometriste-1652737351406.jpeg'),
(909, 'Orthophoniste', 0, '179-_Orthophoniste-1652737351448.jpeg'),
(910, 'Psychologue', 0, '180-_Psychologue-1652737351471.jpeg'),
(911, 'En santé', 0, '181-_En_sante-1652737351488.jpeg'),
(912, 'Ça goûte bon', 0, '182-_Ca_goute_bon-1652737351518.jpeg'),
(913, 'Ça goûte mauvais', 0, '183-_Ca_goute_mauvais-1652737351536.jpeg'),
(914, 'Viens manger!', 0, '184-_Viens_manger!-1652737351554.jpeg'),
(915, 'Mange', 0, '185-_Mange-1652737351578.jpeg'),
(916, 'Bois', 0, '186-_Bois-1652737351599.jpeg'),
(917, 'C\'est terminé!', 0, '187-_C\'est_termine!-1652737351623.jpeg'),
(918, 'Assiette', 0, '188-_Assiette-1652737351660.jpeg'),
(919, 'Bol', 0, '189-_Bol-1652737351689.jpeg'),
(920, 'Tasse', 0, '190-_Tasse-1652737351708.jpeg'),
(921, 'Verre', 0, '191-_Verre-1652737351728.jpeg'),
(922, 'Ustensiles', 0, '192-_Ustensiles-1652737351741.jpeg'),
(923, 'Couteau', 0, '193-_Couteau-1652737351752.jpeg'),
(924, 'Cuillère', 0, '194-_Cuillere-1652737351768.jpeg'),
(925, 'Grosse cuillère', 0, '195-_Grosse_cuillere-1652737351792.jpeg'),
(926, 'Petite cuillère', 0, '196-_Petite_cuillere-1652737351808.jpeg'),
(927, 'Fourchette', 0, '197-_Fourchette-1652737351825.jpeg'),
(928, 'Grosse fourchette', 0, '198-_Grosse_fourchette-1652737351838.jpeg'),
(929, 'Petite fourchette', 0, '199-_Petite_fourchette-1652737351853.jpeg'),
(930, 'Ouvrir', 0, '200-_Ouvrir-1652737351888.jpeg'),
(931, 'Breuvage chaud', 0, '201-_Breuvage_chaud-1652737351926.jpeg'),
(932, 'Eau', 0, '202-_Eau-1652737351949.jpeg'),
(933, 'Lait', 0, '203-_Lait-1652737351970.jpeg'),
(934, 'Jus d\'orange', 0, '204-_Jus_d\'orange-1652737351982.jpeg'),
(935, 'Jus de raisin', 0, '205-_Jus_de_raisin-1652737352004.jpeg'),
(936, 'Jus de pomme', 0, '206-_Jus_de_pomme-1652737352018.jpeg'),
(937, 'Fruits', 0, '207-_Fruits-1652737352036.jpeg'),
(938, 'Abricots', 0, '208-_Abricots-1652737352108.jpeg'),
(939, 'Ananas', 0, '209-_Ananas-1652737352160.jpeg'),
(940, 'Banane', 0, '210-_Banane-1652737352265.jpeg'),
(941, 'Bleuets', 0, '211-_Bleuets-1652737352488.jpeg'),
(942, 'Cerises', 0, '212-_Cerises-1652737352521.jpeg'),
(943, 'Citron', 0, '213-_Citron-1652737352568.jpeg'),
(944, 'Fraises', 0, '214-_Fraises-1652737352627.jpeg'),
(945, 'Framboises', 0, '215-_Framboises-1652737352669.jpeg'),
(946, 'Kiwi', 0, '216-_Kiwi-1652737352714.jpeg'),
(947, 'Melon d\'eau', 0, '217-_Melon_d\'eau-1652737352780.jpeg'),
(948, 'Orange', 0, '218-_Orange-1652737352813.jpeg'),
(949, 'Pêche', 0, '219-_Peche-1652737352848.jpeg'),
(950, 'Poire', 0, '220-_Poire-1652737352902.jpeg'),
(951, 'Pomme jaune', 0, '221-_Pomme_jaune-1652737352929.jpeg'),
(952, 'Pomme rouge', 0, '222-_Pomme_rouge-1652737352955.jpeg'),
(953, 'Pomme verte', 0, '223-_Pomme_verte-1652737352988.jpeg'),
(954, 'Prune', 0, '224-_Prune-1652737353015.jpeg'),
(955, 'Raisins rouges', 0, '225-_Raisins_rouges-1652737353050.jpeg'),
(956, 'Raisins verts', 0, '226-_Raisins_verts-1652737353081.jpeg'),
(957, 'Légumes', 0, '227-_Legumes-1652737353115.jpeg'),
(958, 'Brocoli', 0, '228-_Brocoli-1652737353138.jpeg'),
(959, 'Carottes', 0, '229-_Carottes-1652737353163.jpeg'),
(960, 'Céleri', 0, '230-_Celeri-1652737353215.jpeg'),
(961, 'Champignon', 0, '231-_Champignon-1652737353259.jpeg'),
(962, 'Chou-fleur', 0, '232-_Chou-fleur-1652737353282.jpeg'),
(963, 'Concombre', 0, '233-_Concombre-1652737353296.jpeg'),
(964, 'Endives', 0, '234-_Endives-1652737353372.jpeg'),
(965, 'Fèves', 0, '235-_Feves-1652737353412.jpeg'),
(966, 'Fèves germées', 0, '236-_Feves_germees-1652737353422.jpeg'),
(967, 'Maïs', 0, '237-_Mais-1652737353442.jpeg'),
(968, 'Pois mange-tout', 0, '238-_Pois_mange-tout-1652737353454.jpeg'),
(969, 'Poivron rouge', 0, '239-_Poivron_rouge-1652737353464.jpeg'),
(970, 'Poivron vert', 0, '240-_Poivron_vert-1652737353476.jpeg'),
(971, 'Radis', 0, '241-_Radis-1652737353491.jpeg'),
(972, 'Laitue', 0, '242-_Laitue-1652737353501.jpeg'),
(973, 'Tomates', 0, '243-_Tomates-1652737353547.jpeg'),
(974, 'Soupe', 0, '244-_Soupe-1652737353612.jpeg'),
(975, 'Pomme de terre au four', 0, '245-_Pomme_de_terre_au_four-1652737353786.jpeg'),
(976, 'Pomme de terre-cubes', 0, '246-_Pomme_de_terre-cubes-1652737353822.jpeg'),
(977, 'Frites', 0, '247-_Frites-1652737353847.jpeg'),
(978, 'Purée', 0, '248-_Puree-1652737353867.jpeg'),
(979, 'Pain', 0, '249-_Pain-1652737353901.jpeg'),
(980, 'Croissant', 0, '250-_Croissant-1652737353934.jpeg'),
(981, 'Hamburger', 0, '251-_Hamburger-1652737353952.jpeg'),
(982, 'Hot dog', 0, '252-_Hot_dog-1652737354062.jpeg'),
(983, 'Pizza', 0, '253-_Pizza-1652737354092.jpeg'),
(984, 'Pâtes', 0, '254-_Pates-1652737354110.jpeg'),
(985, 'Poulet', 0, '255-_Poulet-1652737354125.jpeg'),
(986, 'Repas chaud', 0, '256-_Repas_chaud-1652737354143.jpeg'),
(987, 'Repas froid', 0, '257-_Repas_froid-1652737354170.jpeg'),
(988, 'Biscuits', 0, '258-_Biscuits-1652737354192.jpeg'),
(989, 'Muffin', 0, '259-_Muffin-1652737354229.jpeg'),
(990, 'Gâteau', 0, '260-_Gateau-1652737354248.jpeg'),
(991, 'Bonbons', 0, '261-_Bonbons-1652737354312.jpeg'),
(992, 'Guimauves', 0, '262-_Guimauves-1652737354338.jpeg'),
(993, 'Chips', 0, '263-_Chips-1652737354376.jpeg'),
(994, 'Chocolat', 0, '264-_Chocolat-1652737354390.jpeg'),
(995, 'Tarte', 0, '265-_Tarte-1652737354404.jpeg'),
(996, 'Tarte aux fruits', 0, '266-_Tarte_aux_fruits-1652737354415.jpeg'),
(997, 'Sucette glacée', 0, '267-_Sucette_glacee-1652737354447.jpeg'),
(998, 'Cornet', 0, '268-_Cornet-1652737354465.jpeg'),
(999, 'Collation', 0, '269-_Collation-1652737354478.jpeg'),
(1000, 'Fromage', 0, '270-_Fromage-1652737354514.jpeg'),
(1001, 'Noix', 0, '271-_Noix-1652737354544.jpeg'),
(1002, 'Repas', 0, '272-_Repas-1652737354587.jpeg'),
(1003, 'Mets la table', 0, '273-_Mets_la_table-1652737354608.jpeg'),
(1004, 'Dessers la table', 0, '274-_Dessers_la_table-1652737354614.jpeg'),
(1005, 'Distribue la collation', 0, '275-_Distribue_la_collation-1652737354625.jpeg'),
(1006, 'Distribue les brosses', 0, '276-_Distribue_les_brosses_-1652737354666.jpeg'),
(1007, 'Distribue le lait', 0, '277-_Distribue_le_lait-1652737354679.jpeg'),
(1008, 'Porte-poussière', 0, '278-_Porte-poussiere-1652737354689.jpeg'),
(1009, 'Balaie', 0, '279-_Balaie-1652737354703.jpeg'),
(1010, 'Passe l\'aspirateur', 0, '280-_Passe_l\'aspirateur-1652737354721.jpeg'),
(1011, 'Époussette', 0, '281-_Epoussette-1652737354726.jpeg'),
(1012, 'Arrose les plantes', 0, '282-_Arrose_les_plantes-1652737354826.jpeg'),
(1013, 'Distribue les livres', 0, '283-_Distribue_les_livres-1652737354834.jpeg'),
(1014, 'Range les jouets', 0, '284-_Range_les_jouets-1652737355214.jpeg'),
(1015, 'Range ton matelas', 0, '285-_Range_ton_matelas-1652737355460.jpeg'),
(1016, 'Range ta couverture', 0, '286-_Range_ta_couverture-1652737355760.jpeg'),
(1017, 'Dans le panier à linge', 0, '287-_Dans_le_panier_a_linge-1652737355959.jpeg'),
(1018, 'Dans la laveuse', 0, '288-_Dans_la_laveuse-1652737355984.jpeg'),
(1019, 'Dans la laveuse', 0, '289-_Dans_la_laveuse-1652737356024.jpeg'),
(1020, 'Sors le linge', 0, '290-_Sors_le_linge-1652737356047.jpeg'),
(1021, 'Sors le linge', 0, '291-_Sors_le_linge-1652737356067.jpeg'),
(1022, 'Range tes vêtements', 0, '292-_Range_tes_vetements-1652737356104.jpeg'),
(1023, 'Essuie la toilette', 0, '293-_Essuie_la_toilette-1652737356138.jpeg'),
(1024, 'Ouvre les rideaux', 0, '294-_Ouvre_les_rideaux-1652737356158.jpeg'),
(1025, 'Ouvre les stores', 0, '295-_Ouvre_les_stores-1652737356180.jpeg'),
(1026, 'Ouvre les stores', 0, '296-_Ouvre_les_stores-1652737356194.jpeg'),
(1027, 'Bousculer', 0, '297-_Bousculer-1652737356217.jpeg'),
(1028, 'Étrangler', 0, '298-_Etrangler-1652737356239.jpeg'),
(1029, 'Coup de poing', 0, '299-_Coup_de_poing-1652737356254.jpeg'),
(1030, 'Coup de pied', 0, '300-_Coup_de_pied-1652737356276.jpeg'),
(1031, 'Taper', 0, '301-_Taper-1652737356618.jpeg'),
(1032, 'Déranger', 0, '302-_Deranger-1652737356637.jpeg'),
(1033, 'Se cogner la tête', 0, '303-_Se_cogner_la_tete-1652737356658.jpeg'),
(1034, 'Se cogner la tête', 0, '304-_Se_cogner_la_tete-1652737356696.jpeg'),
(1035, 'Se frapper sur la tête', 0, '305-_Se_frapper_sur_la_tete-1652737356725.jpeg'),
(1036, 'Se rouler par terre', 0, '306-_Se_rouler_par_terre-1652737356752.jpeg'),
(1037, 'Dire des mots méchants', 0, '307-_Dire_des_mots_mechants-1652737356762.jpeg'),
(1038, 'Rouspéter', 0, '308-_Rouspeter-1652737356783.jpeg'),
(1039, 'Briser les objets', 0, '309-_Briser_les_objets-1652737356793.jpeg'),
(1040, 'Lancer par la fenêtre', 0, '310-_Lancer_par_la_fenetre-1652737356805.jpeg'),
(1041, 'Lancer des objets', 0, '311-_Lancer_des_objets-1652737356831.jpeg'),
(1042, 'Pipi dans l\'herbe', 0, '312-_Pipi_dans_l\'herbe-1652737356869.jpeg'),
(1043, 'Jouer avec son pénis', 0, '313-_Jouer_avec_son_penis-1652737356895.jpeg'),
(1044, 'Sortir son pénis', 0, '314-_Sortir_son_penis-1652737356905.jpeg'),
(1045, 'Se masturber', 0, '315-_Se_masturber-1652737356947.jpeg'),
(1046, 'Main dans les fesses', 0, '316-_Main_dans_les_fesses-1652737356993.jpeg'),
(1047, 'Dans l\'escalier', 0, '317-_Dans_l\'escalier-1652737357016.jpeg'),
(1048, 'Prendre sans demander', 0, '318-_Prendre_sans_demander-1652737357038.jpeg'),
(1049, 'Partager les jouets', 0, '319-_Partager_les_jouets-1652737357087.jpeg'),
(1050, 'Jouer avec un ami', 0, '320-_Jouer_avec_un_ami-1652737357116.jpeg'),
(1051, 'Assieds-toi en indien', 0, '321-_Assieds-toi_en_indien-1652737357132.jpeg'),
(1052, 'Lève la main', 0, '322-_Leve_la_main-1652737357150.jpeg'),
(1053, 'Lève la main', 0, '323-_Leve_la_main-1652737357170.jpeg'),
(1054, 'Tour de rôle', 0, '324-_Tour_de_role-1652737357190.jpeg'),
(1055, 'Attends!', 0, '325-_Attends!-1652737357203.jpeg'),
(1056, 'Respire', 0, '326-_Respire-1652737357235.jpeg'),
(1057, 'Tiens la main', 0, '327-_Tiens_la_main-1652737357262.jpeg'),
(1058, 'Demande', 0, '328-_Demande_-1652737357272.jpeg'),
(1059, 'Demande de l\'aide', 0, '329-_Demande_de_l\'aide-1652737357283.jpeg'),
(1060, 'Demande de l\'aide', 0, '330-_Demande_de_l\'aide-1652737357324.jpeg'),
(1061, 'Vouloir être seul', 0, '331-_Vouloir_etre_seul-1652737357375.jpeg'),
(1062, 'Regarde l\'autre', 0, '332-_Regarde_l\'autre-1652737357401.jpeg'),
(1063, 'Respecte l\'espace', 0, '333-__Respecte_l\'espace-1652737357414.jpeg'),
(1064, 'Adulte qui parle', 0, '334-_Adulte_qui_parle-1652737357428.jpeg'),
(1065, 'Parler', 0, '335-_Parler-1652737357438.jpeg'),
(1066, 'Parler', 0, '336-_Parler-1652737357454.jpeg'),
(1067, 'S\'intéresser', 0, '337-_S\'interesser-1652737357472.jpeg'),
(1068, 'Comprendre', 0, '338-_Comprendre-1652737357512.jpeg'),
(1069, 'Poser une question', 0, '339-_Poser_une_question-1652737357541.jpeg'),
(1070, 'Poser une question', 0, '340-_Poser_une_question-1652737357566.jpeg'),
(1071, 'Enfants qui discutent', 0, '341-_Enfants_qui_discutent-1652737357588.jpeg'),
(1072, 'Enfants qui discutent', 0, '342-_Enfants_qui_discutent-1652737357607.jpeg'),
(1073, 'Voici ce que j\'ai fait', 0, '343-_Voici_ce_que_j\'ai_fait-1652737357621.jpeg'),
(1074, 'Bonjour', 0, '344-_Bonjour-1652737357640.jpeg'),
(1075, 'Allô', 0, '345-_Allo-1652737357648.jpeg'),
(1076, 'S\'il te plaît', 0, '346-_S\'il_te_plait-1652737357706.jpeg'),
(1077, 'Merci', 0, '347-_Merci-1652737357800.jpeg'),
(1078, 'Solution', 0, '348-_Solution-1652737357936.jpeg'),
(1079, 'Amis', 0, '349-_Amis-1652737358228.jpeg'),
(1080, 'Amies', 0, '350-_Amies-1652737358255.jpeg'),
(1081, 'Amoureux', 0, '351-_Amoureux-1652737358272.jpeg'),
(1082, 'Bisou d\'amoureux', 0, '352-_Bisou_d\'amoureux-1652737358305.jpeg'),
(1083, 'Bisou envolé', 0, '353-_Bisou_envole-1652737358322.jpeg'),
(1084, 'Câlin de papa', 0, '354-_Calin_de_papa-1652737358354.jpeg'),
(1085, 'Câlin de grand-maman', 0, '355-_Calin_de_grand-maman-1652737358387.jpeg'),
(1086, 'Fière de toi', 0, '356-_Fiere_de_toi-1652737358420.jpeg'),
(1087, 'Drôle', 0, '357-_Drole-1652737358438.jpeg'),
(1088, 'Excité', 0, '358-_Excite-1652737358468.jpeg'),
(1089, 'Heureux', 0, '359-_Heureux-1652737358486.jpeg'),
(1090, 'Calme', 0, '360-_Calme-1652737358507.jpeg'),
(1091, 'Timide', 0, '361-_Timide-1652737358528.jpeg'),
(1092, 'Indécis', 0, '362-_Indecis-1652737358549.jpeg'),
(1093, 'Fatigué', 0, '363-_Fatigue-1652737358572.jpeg'),
(1094, 'Surpris', 0, '364-_Surpris-1652737358589.jpeg'),
(1095, 'Déçu', 0, '365-_Decu-1652737358630.jpeg'),
(1096, 'Anxieux', 0, '366-_Anxieux-1652737358640.jpeg'),
(1097, 'Contrarié', 0, '367-_Contrarie-1652737358653.jpeg'),
(1098, 'Boudeur', 0, '368-_Boudeur-1652737358669.jpeg'),
(1099, 'Méprisant', 0, '369-_Meprisant-1652737358715.jpeg'),
(1100, 'Entêté', 0, '370-_Entete-1652737358738.jpeg'),
(1101, 'Fâché', 0, '371-_Fache-1652737358757.jpeg'),
(1102, 'Frustré', 0, '372-_Frustre-1652737358772.jpeg'),
(1103, 'Apeuré', 0, '373-_Apeure-1652737358787.jpeg'),
(1104, 'Triste', 0, '374-_Triste-1652737358803.jpeg'),
(1105, 'Mélancolique', 0, '375-_Melancolique-1652737358815.jpeg'),
(1106, 'Consoler', 0, '376-_Consoler-1652737358829.jpeg'),
(1107, 'Aller', 0, '377-_Aller-1652737358855.jpeg'),
(1108, 'Applaudir', 0, '378-_Applaudir-1652737358860.jpeg'),
(1109, 'Boucher ses oreilles', 0, '379-_Boucher_ses_oreilles-1652737358874.jpeg'),
(1110, 'Chatouiller', 0, '380-_Chatouiller-1652737358884.jpeg'),
(1111, 'Croiser ses bras', 0, '381-_Croiser_ses_bras-1652737358933.jpeg'),
(1112, 'Être', 0, '382-_Etre-1652737358937.jpeg'),
(1113, 'Faire l\'avion', 0, '383-_Faire_l\'avion-1652737358971.jpeg'),
(1114, 'Fermer ses yeux', 0, '384-_Fermer_ses_yeux-1652737358991.jpeg'),
(1115, 'Lancer', 0, '385-_Lancer-1652737359005.jpeg'),
(1116, 'Marcher', 0, '386-_Marcher-1652737359268.jpeg'),
(1117, 'Montrer', 0, '387-_Montrer-1652737359288.jpeg'),
(1118, 'Regarder', 0, '388-_Regarder-1652737359303.jpeg'),
(1119, 'Regarder', 0, '389-_Regarder-1652737359327.jpeg'),
(1120, 'Se coucher', 0, '390-_Se_coucher-1652737359338.jpeg'),
(1121, 'Vouloir', 0, '391-_Vouloir-1652737359361.jpeg'),
(1122, 'Avec', 0, '392-_Avec-1652737359369.jpeg'),
(1123, 'Avec les autres', 0, '393-_Avec_les_autres-1652737359408.jpeg'),
(1124, 'Encore', 0, '394-_Encore-1652737359428.jpeg'),
(1125, 'Où', 0, '395-_Ou-1652737359440.jpeg'),
(1126, 'Quand', 0, '396-_Quand-1652737359465.jpeg'),
(1127, 'Je', 0, '397-_Je-1652737359484.jpeg'),
(1128, 'Tu', 0, '398-_Tu-1652737359500.jpeg'),
(1129, 'Il', 0, '399-_Il-1652737359514.jpeg'),
(1130, 'Nous', 0, '400-_Nous-1652737359524.jpeg'),
(1131, 'Vous', 0, '401-_Vous-1652737359535.jpeg'),
(1132, 'Ils', 0, '402-_Ils-1652737359550.jpeg'),
(1133, 'Ils', 0, '403-_Ils-1652737359559.jpeg'),
(1134, 'Elles', 0, '404-_Elles-1652737359571.jpeg'),
(1135, 'Elles', 0, '405-_Elles-1652737359591.jpeg'),
(1136, 'Moi', 0, '406-_Moi-1652737359602.jpeg'),
(1137, 'Toi', 0, '407-_Toi-1652737359613.jpeg'),
(1138, 'À moi', 0, '408-_A_moi-1652737359618.jpeg'),
(1139, 'À moi', 0, '409-_A_moi-1652737359649.jpeg'),
(1140, 'Maison', 0, '410-_Maison-1652737359689.jpeg'),
(1141, 'École', 0, '411-_Ecole-1652737359736.jpeg'),
(1142, 'Arrivée à la garderie', 0, '412-_Arrivee_a_la_garderie-1652737359779.jpeg'),
(1143, 'Départ de la garderie', 0, '413-_Depart_de_la_garderie-1652737359796.jpeg'),
(1144, 'Camp d\'été', 0, '414-_Camp_d\'ete-1652737359818.jpeg'),
(1145, 'Épicerie', 0, '415-_Epicerie-1652737359852.jpeg'),
(1146, 'Magasin', 0, '416-_Magasin-1652737359870.jpeg'),
(1147, 'École pour chien', 0, '417-_Ecole_pour_chien-1652737359893.jpeg'),
(1148, 'Accessoires pour chien', 0, '418-_Accessoires_pour_chien-1652737360068.jpeg'),
(1149, 'Câlin de chien', 0, '419-_Calin_de_chien-1652737360085.jpeg'),
(1150, 'Chien', 0, '420-_Chien-1652737360098.jpeg'),
(1151, 'Famille', 0, '421-_Famille-1652737360138.jpeg'),
(1152, 'Papa', 0, '422-_Papa-1652737360172.jpeg'),
(1153, 'Homme', 0, '423-_Homme-1652737360182.jpeg'),
(1154, 'Maman', 0, '424-_Maman-1652737360189.jpeg'),
(1155, 'Femme', 0, '425-_Femme-1652737360201.jpeg'),
(1156, 'Soeur', 0, '426-_Soeur-1652737360291.jpeg'),
(1157, 'Fille', 0, '427-_Fille-1652737360330.jpeg'),
(1158, 'Frère', 0, '428-_Frere-1652737360346.jpeg'),
(1159, 'Garçon', 0, '429-_Garcon-1652737360363.jpeg'),
(1160, 'Bébé', 0, '430-_Bebe-1652737360368.jpeg'),
(1161, 'Bébé', 0, '431-_Bebe-1652737360471.jpeg'),
(1162, 'Grand-maman', 0, '432-_Grand-maman-1652737360477.jpeg'),
(1163, 'Femme', 0, '433-_Femme-1652737360649.jpeg'),
(1164, 'Mains sur la tête', 0, '434-_Mains_sur_la_tete-1652737360668.jpeg'),
(1165, 'Mains sur les épaules', 0, '435-_Mains_sur_les_epaules-1652737360682.jpeg'),
(1166, 'Mains sur les cuisses', 0, '436-_Mains_sur_les_cuisses-1652737360717.jpeg'),
(1167, 'Paume contre paume', 0, '437-_Paume_contre_paume-1652737360725.jpeg'),
(1168, 'Serre ton doigt', 0, '438-_Serre_ton_doigt-1652737360742.jpeg'),
(1169, 'Pousse sur ta chaise', 0, '439-_Pousse_sur_ta_chaise-1652737360762.jpeg'),
(1170, 'Souffle dans ta main', 0, '440-_Souffle_dans_ta_main-1652737360773.jpeg'),
(1171, 'Frotte tes bras', 0, '441-_Frotte_tes_bras-1652737360787.jpeg'),
(1172, 'Frotte tes cuisses', 0, '442-_Frotte_tes_cuisses-1652737360801.jpeg'),
(1173, 'Bouge tes mains', 0, '443-_Bouge_tes_mains-1652737360810.jpeg'),
(1174, 'Bouge tes pieds', 0, '444-_Bouge_tes_pieds-1652737360885.jpeg'),
(1175, 'Fais beuh!', 0, '445-_Fais_beuh!-1652737360896.jpeg'),
(1176, 'Saute en kangourou', 0, '446-_Saute_en_kangourou-1652737360906.jpeg'),
(1177, 'Saute en grenouille', 0, '447-_Saute_en_grenouille-1652737360916.jpeg'),
(1178, 'Pousse sur le mur', 0, '448-_Pousse_sur_le_mur-1652737360929.jpeg'),
(1179, 'Exercices physiques', 0, '449-_Exercices_physiques-1652737360940.jpeg'),
(1180, 'Sauter', 0, '450-_Sauter-1652737360952.jpeg'),
(1181, 'Blocs et figurines', 0, '451-_Blocs_et_figurines-1652737360967.jpeg'),
(1182, 'Jeux symboliques', 0, '452-_Jeux_symboliques-1652737360983.jpeg'),
(1183, 'Cuisinette', 0, '453-_Cuisinette-1652737361086.jpeg'),
(1184, 'Trousse médicale', 0, '454-_Trousse_medicale-1652737361120.jpeg'),
(1185, 'Tête à coiffer', 0, '455-_Tete_a_coiffer-1652737361133.jpeg'),
(1186, 'Marionnettes', 0, '456-_Marionnettes-1652737361148.jpeg'),
(1187, 'Peinture', 0, '457-_Peinture-1652737361159.jpeg'),
(1188, 'Expression plastique', 0, '458-_Expression_plastique-1652737361171.jpeg'),
(1189, 'Menuiserie', 0, '459-_Menuiserie-1652737361187.jpeg'),
(1190, 'Manipulations', 0, '460-_Manipulations-1652737361202.jpeg'),
(1191, 'Coin lecture', 0, '461-_Coin_lecture-1652737361217.jpeg'),
(1192, 'Lecture', 0, '462-_Lecture-1652737361258.jpeg'),
(1193, 'Jeux calmes', 0, '463-_Jeux_calmes-1652737361270.jpeg'),
(1194, 'Jeux calmes', 0, '464-_Jeux_calmes-1652737361281.jpeg'),
(1195, 'Enfilage', 0, '465-_Enfilage-1652737361298.jpeg'),
(1196, 'Musique', 0, '466-_Musique-1652737361309.jpeg'),
(1197, 'Danse', 0, '467-_Danse-1652737361348.jpeg'),
(1198, 'Psychomotricité', 0, '468-_Psychomotricite-1652737361360.jpeg'),
(1199, 'Ballon d\'entraînement', 0, '469-_Ballon_d\'entrainement-1652737361377.jpeg'),
(1200, 'Bac à eau', 0, '470-_Bac_a_eau-1652737361390.jpeg'),
(1201, 'Bac à sable', 0, '471-_Bac_a_sable-1652737361401.jpeg'),
(1202, 'Bac à riz', 0, '472-_Bac_a_riz-1652737361424.jpeg'),
(1203, 'Sciences', 0, '473-_Sciences-1652737361435.jpeg'),
(1204, 'Ordinateur', 0, '474-_Ordinateur-1652737361450.jpeg'),
(1205, 'Atelier de groupe', 0, '475-_Atelier_de_groupe-1652737361472.jpeg'),
(1206, 'Travail de groupe', 0, '476-_Travail_de_groupe-1652737361487.jpeg'),
(1207, 'Apprentissages', 0, '477-_Apprentissages-1652737361500.jpeg'),
(1208, 'Écriture', 0, '478-_Ecriture-1652737361525.jpeg'),
(1209, 'Travail autonome', 0, '479-_Travail_autonome-1652737361553.jpeg'),
(1210, 'Atelier de travail', 0, '480-_Atelier_de_travail-1652737361564.jpeg'),
(1211, 'Boîte à surprises', 0, '481-_Boite_a_surprises-1652737361618.jpeg'),
(1212, 'Joue en silence', 0, '482-_Joue_en_silence-1652737361660.jpeg'),
(1213, 'Joue en silence', 0, '483-_Joue_en_silence-1652737361737.jpeg'),
(1214, 'Détente', 0, '484-_Detente-1652737361747.jpeg'),
(1215, 'Faire le train', 0, '485-_Faire_le_train-1652737361763.jpeg'),
(1216, 'Récréation', 0, '486-_Recreation-1652737361783.jpeg'),
(1217, 'Piscine publique', 0, '487-_Piscine_publique-1652737361797.jpeg'),
(1218, 'À la pêche', 0, '488-_A_la_peche-1652737361808.jpeg'),
(1219, 'Temps libre', 0, '489-_Temps_libre-1652737361829.jpeg'),
(1220, 'Je n\'ai pas le picto', 0, '490-_Je_n\'ai_pas_le_picto-1652737361840.jpeg'),
(1221, 'Père Noël', 0, '491-__Pere_Noel-1652737361849.jpeg'),
(1222, 'Décore le sapin', 0, '492-_Decore_le_sapin-1652737362073.jpeg'),
(1223, 'Sapin de Noël', 0, '493-_Sapin_de_Noel-1652737362174.jpeg'),
(1224, 'Jouets', 0, '494-_Jouets-1652737362209.jpeg'),
(1225, 'Poupée', 0, '495-_Poupee-1652737362259.jpeg'),
(1226, 'Barbie', 0, '496-_Barbie-1652737362270.jpeg'),
(1227, 'Monsieur Patate', 0, '497-_Monsieur_Patate-1652737362281.jpeg'),
(1228, 'Canard en peluche', 0, '498-_Canard_en_peluche-1652737362302.jpeg'),
(1229, 'Coccinelle en peluche', 0, '499-_Coccinelle_en_peluche-1652737362341.jpeg'),
(1230, 'Grenouille en peluche', 0, '500-_Grenouille_en_peluche-1652737362380.jpeg'),
(1231, 'Animaux lourds', 0, '501-_Animaux_lourds-1652737362422.jpeg'),
(1232, 'Lézard lourd', 0, '502-_Lezard_lourd-1652737362449.jpeg'),
(1233, 'Serpent lourd', 0, '503-_Serpent_lourd-1652737362517.jpeg'),
(1234, 'Balles tactiles', 0, '504-_Balles_tactiles-1652737362583.jpeg'),
(1235, 'Balle tactile', 0, '505-_Balle_tactile-1652737362598.jpeg'),
(1236, 'Balle tactile', 0, '506-_Balle_tactile-1652737362603.jpeg'),
(1237, 'Balle tactile', 0, '507-_Balle_tactile-1652737362635.jpeg'),
(1238, 'Bateau', 0, '508-_Bateau-1652737362643.jpeg'),
(1239, 'Sciences', 0, '509-_Sciences-1652737362658.jpeg'),
(1240, 'Livres', 0, '510-_Livres-1652737362663.jpeg'),
(1241, 'Quilles', 0, '511-_Quilles-1652737362674.jpeg'),
(1242, 'Cartes à jouer', 0, '512-_Cartes_a_jouer-1652737362684.jpeg'),
(1243, 'Bijoux', 0, '513-_Bijoux-1652737362702.jpeg'),
(1244, 'Radio', 0, '514-_Radio-1652737362723.jpeg'),
(1245, 'CD', 0, '515-_CD-1652737362748.jpeg'),
(1246, 'Film', 0, '516-_Film-1652737362754.jpeg'),
(1247, 'Cassette', 0, '517-_Cassette-1652737362776.jpeg'),
(1248, 'Tétine', 0, '518-_Tetine-1652737362832.jpeg'),
(1249, 'Bavette', 0, '519-_Bavette-1652737362852.jpeg'),
(1250, 'Couche', 0, '520-_Couche-1652737362876.jpeg'),
(1251, 'Débarbouillette', 0, '521-_Debarbouillette-1652737362894.jpeg'),
(1252, 'Lingettes', 0, '522-_Lingettes-1652737362921.jpeg'),
(1253, 'Savon', 0, '523-_Savon-1652737362928.jpeg'),
(1254, 'Laveuse_ sécheuse', 0, '524-_Laveuse__secheuse-1652737362951.jpeg'),
(1255, 'Panier à linge', 0, '525-_Panier_a_linge-1652737362966.jpeg'),
(1256, 'Lampe', 0, '526-_Lampe-1652737362985.jpeg'),
(1257, 'Lumière', 0, '527-_Lumiere-1652737362989.jpeg'),
(1258, 'Fenêtre', 0, '528-_Fenetre-1652737363059.jpeg'),
(1259, 'Porte', 0, '529-_Porte-1652737363336.jpeg'),
(1260, 'Escalier', 0, '530-_Escalier-1652737363418.jpeg'),
(1261, 'Table', 0, '531-_Table-1652737363435.jpeg'),
(1262, 'Pupitre', 0, '532-_Pupitre-1652737363462.jpeg'),
(1263, 'Chaise', 0, '533-_Chaise-1652737363492.jpeg'),
(1264, 'Minuterie', 0, '534-_Minuterie-1652737363572.jpeg'),
(1265, 'Horloge', 0, '535-_Horloge-1652737363882.jpeg'),
(1266, 'Horloge', 0, '536-_Horloge-1652737363900.jpeg'),
(1267, 'Assis', 0, '537-_Assis-1652737363910.jpeg'),
(1268, 'Musique', 0, '538-_Musique-1652737363929.jpeg'),
(1269, 'Lecture', 0, '539-_Lecture-1652737363955.jpeg'),
(1270, 'Par la fenêtre', 0, '540-_Par_la_fenetre-1652737363984.jpeg'),
(1271, 'Musique', 0, '541-_Musique-1652737364005.jpeg'),
(1272, 'Lecture', 0, '542-_Lecture-1652737364030.jpeg'),
(1273, 'Par la fenêtre', 0, '543-Par_la_fenetre-1652737364057.jpeg'),
(1274, 'Par le hublot', 0, '544-_Par_le_hublot-1652737364102.jpeg'),
(1275, 'Voiture', 0, '545-_Voiture-1652737364124.jpeg'),
(1276, 'Monter en voiture', 0, '546-_Monter_en_voiture-1652737364138.jpeg'),
(1277, 'Descendre de voiture', 0, '547-_Descendre_de_voiture-1652737364152.jpeg'),
(1278, 'Taxi', 0, '548-_Taxi-1652737364165.jpeg'),
(1279, 'Monter en taxi', 0, '549-_Monter_en_taxi-1652737364180.jpeg'),
(1280, 'Descendre du taxi', 0, '550-_Descendre_du_taxi-1652737364196.jpeg'),
(1281, 'Autobus scolaire', 0, '551-_Autobus_scolaire-1652737364207.jpeg'),
(1282, 'Monter dans l\'autobus', 0, '552-_Monter_dans_l\'autobus-1652737364224.jpeg'),
(1283, 'Descendre de l\'autobus', 0, '553-_Descendre_de_l\'autobus-1652737364238.jpeg'),
(1284, 'Transport d\'écoliers', 0, '554-_Transport_d\'ecoliers-1652737364251.jpeg'),
(1285, 'Monter', 0, '555-_Monter-1652737364265.jpeg'),
(1286, 'Descendre', 0, '556-_Descendre-1652737364274.jpeg'),
(1287, 'Monter', 0, '557-_Monter_-1652737364288.jpeg'),
(1288, 'Descendre', 0, '558-_Descendre_-1652737364300.jpeg'),
(1289, 'Avion', 0, '559-_Avion-1652737364306.jpeg'),
(1290, 'Autobus voyageur', 0, '560-_Autobus_voyageur-1652737364324.jpeg');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `DateOfBirth` int(3) NOT NULL,
  `Gender` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`Id`, `Name`, `FirstName`, `DateOfBirth`, `Gender`) VALUES
(21, 'A', 'A', 0, 'A'),
(22, 'Dubois', 'Paul', 25, 'Homme');

-- --------------------------------------------------------

--
-- Structure de la table `user_favpicto`
--

DROP TABLE IF EXISTS `user_favpicto`;
CREATE TABLE IF NOT EXISTS `user_favpicto` (
  `idUser` int(11) NOT NULL,
  `idPictogram` int(11) NOT NULL,
  KEY `idUser` (`idUser`) USING BTREE,
  KEY `idPictogram` (`idPictogram`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user_favpicto`
--

INSERT INTO `user_favpicto` (`idUser`, `idPictogram`) VALUES
(22, 776),
(22, 786);

-- --------------------------------------------------------

--
-- Structure de la table `user_favsentence`
--

DROP TABLE IF EXISTS `user_favsentence`;
CREATE TABLE IF NOT EXISTS `user_favsentence` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  `idPictogram` int(11) NOT NULL,
  PRIMARY KEY (`id`,`idUser`,`position`),
  KEY `idUser` (`idUser`),
  KEY `idPictogram` (`idPictogram`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user_favsentence`
--

INSERT INTO `user_favsentence` (`id`, `idUser`, `position`, `idPictogram`) VALUES
(2, 22, 3, 777),
(2, 22, 0, 788),
(2, 22, 1, 789),
(2, 22, 2, 798);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `educator_user`
--
ALTER TABLE `educator_user`
  ADD CONSTRAINT `educator_user_ibfk_1` FOREIGN KEY (`idEducator`) REFERENCES `educator` (`id`),
  ADD CONSTRAINT `educator_user_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `user` (`Id`);

--
-- Contraintes pour la table `pictogram`
--
ALTER TABLE `pictogram`
  ADD CONSTRAINT `pictogram_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `category` (`id`);

--
-- Contraintes pour la table `user_favpicto`
--
ALTER TABLE `user_favpicto`
  ADD CONSTRAINT `user_favpicto_ibfk_1` FOREIGN KEY (`idPictogram`) REFERENCES `pictogram` (`id`),
  ADD CONSTRAINT `user_favpicto_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `user` (`Id`);

--
-- Contraintes pour la table `user_favsentence`
--
ALTER TABLE `user_favsentence`
  ADD CONSTRAINT `user_favsentence_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`Id`),
  ADD CONSTRAINT `user_favsentence_ibfk_2` FOREIGN KEY (`idPictogram`) REFERENCES `pictogram` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

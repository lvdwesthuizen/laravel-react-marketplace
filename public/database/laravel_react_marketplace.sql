-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 17, 2023 at 06:49 PM
-- Server version: 8.0.33
-- PHP Version: 8.1.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_react_marketplace`
--
CREATE DATABASE IF NOT EXISTS `laravel_react_marketplace` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `laravel_react_marketplace`;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `listings`
--

CREATE TABLE `listings` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_online` timestamp NOT NULL,
  `date_offline` timestamp NOT NULL,
  `price` int NOT NULL,
  `currency` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `listings`
--

INSERT INTO `listings` (`id`, `user_id`, `title`, `slug`, `description`, `date_online`, `date_offline`, `price`, `currency`, `category`, `image`, `first_name`, `last_name`, `email`, `mobile`, `created_at`, `updated_at`) VALUES
(1, 1, '2015 Toyota Corolla Quest 1.6 Automatic Car', 'Available in Kyalami, Midrand for viewing', 'Privately owned used car in excellent condition, 81000km, spare keys, service history with Toyota, new tires, license and paperwork valid. If you interested, contact me on 076 281 8612.', '2023-07-14 22:00:00', '2023-08-14 22:00:00', 132000, 'ZAR', 'cars', 'images/YOgLyltCza6MW2qg.jpeg', 'Nathan', 'Rama', 'nathan.rama@gmail.com', '0786754321', '2023-07-15 11:22:32', '2023-07-15 11:22:32'),
(2, 1, '2021 Ford EcoSport Used Car For Sale', '2021 FORD ECOSPORT 1.5TI VCT AMBIENTE AUTO', '15300kms, aircon, power steering, electric windows, electric mirrors, multi function steering, onboard interface, tinted windows. Finance arranged through all banks, trade-ins accepted. Please remember to provide your cell number when e-mailing.', '2023-07-16 22:00:00', '2023-08-30 22:00:00', 299900, 'ZAR', 'cars', 'images/UoaTFUP3YMxOuE4i.jpeg', 'Abdullah', 'Al-Thani', 'walkotcars@sales.co.za', '0896543235', '2023-07-15 11:29:23', '2023-07-15 11:29:23'),
(3, 1, 'Pool table with delivery', 'Union Billiards Classic 3/4 Pool -Snooker Table', 'New table without accessories is over R80,000. Don’t miss out on this amazing deal. I’m moving and unfortunately can’t keep the table. Price is includes delivery and installation. The 42mm slate bed is fitted with Hainsworth championship cloth.', '2023-07-11 22:00:00', '2023-07-20 22:00:00', 17900, 'ZAR', 'furniture', 'images/DcBzj0XaxghQ0Lgp.jpeg', 'Darren', 'Smith', 'darrens@mail.com', '0823485643', '2023-07-15 11:39:52', '2023-07-15 11:39:52'),
(4, 1, 'Macbook Pro 15 inch computer 2016 2.6ghz | 16gb | 256gb ssd', 'Excellent condition 15\" 2016 Apple Macbook Pro', '2.6ghz Quad Core, 16gb ram, 256gb solid state flash storage. Includes original apple charger and box. Just replaced the battery. Selling as it\'s not being used anymore.', '2023-07-17 22:00:00', '2023-08-24 22:00:00', 15500, 'ZAR', 'electronics', 'images/NedwEZA4UkcpNtjK.jpeg', 'Jason', 'Van Deventer', 'jvandeventer@outlook.com', '0827865432', '2023-07-15 11:45:12', '2023-07-15 11:45:12'),
(5, 1, 'Two bedroom apartment to rent in Vredehoek', 'Available immediately', 'Spacious 2 bedroom apartment in a small block, situated in sought after suburb Vredehoek. Open plan lounge/kitchen and dining room area. Extremely spacious main bedroom with built in cupboards. Breathtaking views. This property comes with 1 Parking Bay.', '2023-05-03 22:00:00', '2023-09-29 22:00:00', 12300, 'ZAR', 'property', 'images/Tt0NMYWAwq0WQMnd.jpeg', 'Esme', 'Coert', 'trafalgar@property.co.za', '0764321765', '2023-07-15 11:49:38', '2023-07-15 11:49:38'),
(6, 1, 'Scandanavian design sofa bed', 'Practical and elegant sofa for the living room', 'Scandinavian design with microfiber fabric upholster. Two side cushions and two backrest cushions, narrow armrests, wooden legs. Dimensions: length 216 cm, height 74 cm, depth 100 cm.', '2023-06-05 22:00:00', '2023-08-27 22:00:00', 6500, 'ZAR', 'furniture', 'images/XKW4riEqqMtOSPh7.jpeg', 'Estelle', 'Brandt', 'estellebrandt86@webmail.co.za', '0765438765', '2023-07-16 15:59:47', '2023-07-16 15:59:47'),
(7, 1, 'iPhone 12 64GB For Sale', 'Selling my iPhone 12 64GB', 'Comes with original box. Phone was well looked after and has no issues. Open to all networks. All tests welcome before purchase. Battery Health: 86% Cash before purchasing', '2023-05-02 22:00:00', '2023-07-26 22:00:00', 9250, 'ZAR', 'electronics', 'images/3O7S4cSczHNyc5o2.jpeg', 'Shiloh', 'Huerta', 'shhuerta@yahoo.com', '0217658976', '2023-07-16 18:12:22', '2023-07-16 18:12:22'),
(8, 1, '2 Bedroom Apartment To Let in Umhlanga Ridge', 'Unit is available at R11 000 unfurnished and R12 500 furnished', 'Open plan living and kitchen area. Built in cupboards. Two bedrooms with one bathroom.\nCovered parking. Safe and secure. Pool and gym in the complex. Close to all amenities. Book a viewing today. Has Pool. \nProperty Reference #: RL12182', '2023-07-08 22:00:00', '2023-09-05 22:00:00', 11000, 'ZAR', 'property', 'images/ydnJXs6QDybp9en7.jpeg', 'Lanelle', 'Hurst', 'properties@iafrica.com', '876543212', '2023-07-17 03:19:45', '2023-07-17 03:19:45');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_07_14_154540_create_listings_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'main', 'db25ba033246b4dfabdc565a4ad154acc787291b6747e9618973d9c8c26f465e', '[\"*\"]', NULL, NULL, '2023-07-14 07:07:33', '2023-07-14 07:07:33'),
(2, 'App\\Models\\User', 2, 'main', '031a28ac036eb9336e73673748fa2c2caaddd4a7987c8a0e2bcb3c59ab96909d', '[\"*\"]', NULL, NULL, '2023-07-14 07:20:52', '2023-07-14 07:20:52'),
(3, 'App\\Models\\User', 1, 'main', '682607ceeca5f65c78db27f9b49d7ee66abc2767e9d7babb7255367ff18768e5', '[\"*\"]', NULL, NULL, '2023-07-14 10:03:17', '2023-07-14 10:03:17'),
(25, 'App\\Models\\User', 1, 'main', '685edd9d12fd6774c26aa2bbf815a1afac6c64330236c0b0a7643cd57348ff32', '[\"*\"]', NULL, NULL, '2023-07-17 16:30:45', '2023-07-17 16:30:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Lauren', 'lauren@email.com', NULL, '$2y$10$e.qNnoEQaERznZOn/eJxW.xswOXFOiEagfnBdC/bpJDt5riHQGwEi', NULL, '2023-07-14 07:07:33', '2023-07-14 07:07:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `listings`
--
ALTER TABLE `listings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `listings`
--
ALTER TABLE `listings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

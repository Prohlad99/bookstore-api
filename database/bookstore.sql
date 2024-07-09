-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2024 at 09:27 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `bio` text DEFAULT NULL,
  `birthdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `bio`, `birthdate`) VALUES
(1, 'Prohlad Mandal', 'A Backend Engineer', '1999-07-25'),
(2, 'Prodip Mandal', 'A Frontend Engineer', '1995-04-05'),
(4, 'Jane Austen', 'English novelist known primarily for her six major novels.', '1775-12-16'),
(5, 'Dilip Mandal', 'A Full-Stack Engineer', '1990-05-19'),
(6, 'J.K. Rowling', 'British author best known for her Harry Potter series.', '1965-07-31'),
(7, 'Fyodor Dostoevsky', 'Russian novelist, short story writer, essayist, and philosopher.', '1821-11-11'),
(8, 'Mark Twain', 'American writer, humorist, entrepreneur, publisher, and lecturer.', '1835-11-30'),
(9, 'Emily Dickinson', 'American poet', '1830-12-10'),
(10, 'Ernest Hemingway', 'American novelist, short-story writer, and journalist.', '1899-07-21'),
(11, 'Virginia Woolf', 'English writer, considered one of the most important modernist 20th-century authors.', '1882-01-25'),
(12, 'George Orwell', 'English novelist, essayist, journalist, and critic.', '1903-06-25'),
(13, 'Herman Melville', 'American novelist, short story writer, and poet of the American Renaissance period.', '1819-08-01'),
(14, 'Agatha Christie', 'English writer known for her detective novels.', '1890-09-15'),
(15, 'Gabriel Garcia Marquez', 'Colombian novelist, short-story writer, screenwriter, and journalist.', '1927-03-06');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `published_date` date NOT NULL,
  `author_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `description`, `published_date`, `author_id`) VALUES
(1, 'Learn Typescript', 'You will learn typescript easily from this book', '2024-07-09', 1),
(3, 'Learn MERN Stack', 'You will learn all about MERN Stack from this book', '2024-06-10', 1),
(4, 'Learn Frontend', 'You will learn all about Frontend from this book', '2020-06-10', 2),
(6, 'Pride and Prejudice', 'Classic novel of manners', '1813-01-28', 4),
(7, 'Sense and Sensibility', 'Romantic novel', '1811-10-30', 4),
(8, 'War and Peace', 'Historical novel', '1869-01-01', 5),
(9, 'Anna Karenina', 'Tragic novel', '1877-01-01', 5),
(10, 'Harry Potter and the Philosopher\'s Stone', 'Fantasy novel', '1997-06-26', 6),
(11, 'Harry Potter and the Chamber of Secrets', 'Fantasy novel', '1998-07-02', 6),
(12, 'Crime and Punishment', 'Psychological novel', '1866-01-01', 7),
(14, 'The Adventures of Tom Sawyer', 'Classic novel', '1876-01-01', 8),
(15, 'Adventures of Huckleberry Finn', 'Novel', '1884-01-01', 8),
(16, 'Selected Poems', 'Poetry collection', '1890-01-01', 9),
(17, 'The Old Man and the Sea', 'Novella', '1952-01-01', 9),
(18, 'A Farewell to Arms', 'Novel', '1929-01-01', 10),
(19, 'Mrs Dalloway', 'Modernist novel', '1925-01-01', 11),
(20, 'To the Lighthouse', 'Modernist novel', '1927-01-01', 11),
(21, 'Nineteen Eighty-Four', 'Dystopian novel', '1949-06-08', 12),
(22, 'Animal Farm', 'Satirical allegory', '1945-08-17', 12),
(23, 'Moby-Dick', 'Novel', '1851-10-18', 14),
(24, 'Bartleby, the Scrivener', 'Novella', '1853-01-01', 15),
(25, 'Bartleby, the Scrivener', 'Novella', '1853-01-01', 15);

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20240709061621_authors_table.js', 1, '2024-07-09 06:54:01'),
(2, '20240709061643_books_table.js', 1, '2024-07-09 06:54:01'),
(3, '20240709162840_users_table.js', 2, '2024-07-09 16:29:45'),
(4, '20240709174649_users_table.js', 3, '2024-07-09 17:49:55');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`, `updated_at`) VALUES
(5, 'prohlad.m99@gmail.com', '$2a$10$Y3jYlUStjEI1G9vRpGgVluZuFRAsYIEgIH9AN84F43HRCU3nI6RMC', '2024-07-09 18:13:25', '2024-07-09 18:13:25'),
(6, 'abc@gmail.com', '$2a$10$3qPw5XS5MnYfZJ0NzJIOJev0gd.sjJtMF5wZ02/oPFniL8WGcEQPm', '2024-07-09 18:13:47', '2024-07-09 18:13:47'),
(7, 'user1@gmail.com', '$2a$10$ADn.R7eZvXdhgGFFt.f5PeP/qIyqC9hnqx7J9ai17uIq8hm8skovK', '2024-07-09 19:26:06', '2024-07-09 19:26:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `books_author_id_foreign` (`author_id`);

--
-- Indexes for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

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
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

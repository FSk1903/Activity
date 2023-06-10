CREATE DATABASE activity;
USE activity;

CREATE TABLE library (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(80) NOT NULL,
  author VARCHAR(80) NOT NULL,
  publication_date DATE,
  genre VARCHAR(50),
  isbn VARCHAR(20),
  available BOOLEAN DEFAULT true
);

SELECT * FROM library;


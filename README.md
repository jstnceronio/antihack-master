# antihack-server
Module 183 - "Unhackable" server to list students

Server runs on localhost:8080

Create Schema: students_db
Create Table:
´´´
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `profile_picture` blob,
  `first_name` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `zip_code` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
´´´
Enter DB credentials in .env file (create in root of server)

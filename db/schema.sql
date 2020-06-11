
CREATE DATABASE Burger_DB;
USE Burger_DB;

CREATE TABLE Burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	Devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
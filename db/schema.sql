CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INTEGER(64) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(16),
  devoured BOOLEAN,
  date TIMESTAMP,
  PRIMARY KEY(id)
);

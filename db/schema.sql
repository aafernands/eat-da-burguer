CREATE DATABASE IF NOT EXISTS eat_da_burger;

USE eat_da_burger;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
)
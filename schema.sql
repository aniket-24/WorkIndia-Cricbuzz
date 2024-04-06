CREATE DATABASE cricbuzz;
USE cricbuzz;

CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);


CREATE TABLE matches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team_1 VARCHAR(50) NOT NULL,
    team_2 VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    venue VARCHAR(100) NOT NULL,
    status ENUM('upcoming', 'live', 'completed') NOT NULL DEFAULT 'upcoming'
);

CREATE TABLE team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE player (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL,
    team_id INT NOT NULL,
    FOREIGN KEY (team_id) REFERENCES team(id)
);

CREATE TABLE statistics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id INT NOT NULL,
    matches_played INT NOT NULL DEFAULT 0,
    runs INT NOT NULL DEFAULT 0,
    average DECIMAL(5,2) NOT NULL DEFAULT 0.00,
    strike_rate DECIMAL(5,2) NOT NULL DEFAULT 0.00,
    FOREIGN KEY (player_id) REFERENCES player(id)
);
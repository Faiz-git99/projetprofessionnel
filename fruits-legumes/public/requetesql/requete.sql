Créer la base de données
CREATE DATABASE produits;

USE produits;

CREATE TABLE fruits (
    ID_fruit INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Nom_fruits VARCHAR (255),
    Prix_fruits INT,
    disponibilite_fruit VARCHAR (155)
);

CREATE TABLE legumes (
    ID_legume INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Nom_legumes VARCHAR (255),
    Prix_legumes INT,
    disponibilite_ VARCHAR (155)
);

CREATE TABLE client (
    ID_client INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Nom_client VARCHAR (255),
    Prenom_client VARCHAR (255),
    Date_naissance DATE,
    email VARCHAR (155),
    Mot_de_passe_client VARCHAR (255),
    Num_telephone INT,
    Adresse_client VARCHAR (255),
    Dep_client INT,
    Codepostal_client INT,
    Commune_client INT
);

CREATE TABLE compte (
    ID_compte INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Num_compte DECIMAL (12,0),
    mois INT,
    CONSTRAINT mois_check CHECK (mois BETWEEN 1 AND 12),
    annee INT,
    CONSTRAINT annee_check CHECK (annee BETWEEN 2025 AND 2032),
    ID_client INT NOT NULL,
    FOREIGN KEY (ID_client) REFERENCES client (ID_client)
);

CREATE TABLE commande (
    ID_commande INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nbr_commande INT NOT NULL,
    montant_commande INT NOT NULL,
    date_commande DATE,
    ID_client INT NOT NULL,
    FOREIGN KEY (ID_client) REFERENCES client (ID_client),
    ID_compte INT NOT NULL,
    FOREIGN KEY (ID_compte) REFERENCES compte (ID_compte)
);


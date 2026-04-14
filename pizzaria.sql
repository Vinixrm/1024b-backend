DROP DATABASE IF EXISTS pizzaria;
CREATE DATABASE pizzaria;
CREATE TABLE pizzaria.pizza (
    id INT PRIMARY KEY,
    nome VARCHAR(200),
    tamanho VARCHAR(50),
    preco DECIMAL(10,2),
    data_criacao DATE
);
use ronan;

CREATE TABLE perguntas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pergunta TEXT NOT NULL
);

CREATE TABLE respostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pergunta INT NOT NULL,
    resposta_opcao TEXT NOT NULL,
    resposta_correta BOOLEAN NOT NULL,
    FOREIGN KEY (pergunta_id) REFERENCES perguntas(id)
);
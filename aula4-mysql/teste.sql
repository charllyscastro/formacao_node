CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
  "Joao",
  "joao@email.com",
  8
);

-- SHOW DATABASES; - Mostra todos os bancos
-- CREATE DATABASE nome_banco; - Cria banco
-- USE nome_banco; - Acessa o banco
-- CREATE TABLE nome_tabela; - Cria a tabela
-- DESCRIBE nome_tabela; - Ver estrutura da tabela
-- INSERT INTO nome_banco() VALUES(); - Inseri dados na tabela
-- SELECT * FROM nome_tabela; - Lista todos os dados da tabela
-- SELECT * FROM nome_tabela WHERE idade = 8; - Especificar consulta mysql
-- DELETE FROM usuarios WHERE nome = "Joao"; - Deletar registros na tabela
-- UPDATE nome_tabela SET nome = "Nome teste" WHERE nome = "Pedro"; - Atualiza campo da tabela
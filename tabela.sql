/*PARA ALTERAR OS NOMES REMOVA OS COMENTARIOS*/

/*
ALTER TABLE database1 RENAME COLUMN c1 TO data;
ALTER TABLE database1 RENAME COLUMN c2 TO id_marca;
ALTER TABLE database1 RENAME COLUMN c3 TO vendas;
ALTER TABLE database1 RENAME COLUMN c4 TO valor;
ALTER TABLE database1 RENAME COLUMN c5 TO nome;
ALTER TABLE database2 RENAME COLUMN c1 TO id_marca;
ALTER TABLE database2 RENAME COLUMN c2 TO marca;
*/

SELECT marca AS database2, SUM(VENDAS) AS database1
FROM database2, database1
WHERE database1.id_marca = database2.id_marca
GROUP by marca
ORDER BY SUM(VENDAS) DESC;

SELECT nome as database1, SUM((vendas * valor)) as database1
from database1
GROUP by nome
ORDER BY SUM((vendas * valor)) DESC;

SELECT marca AS database2, AVG(VENDAS) AS database1
FROM database2, database1
WHERE database1.id_marca = database2.id_marca
GROUP by marca
ORDER BY SUM(VENDAS) DESC;

SELECT marca AS database2, SUM(vendas) AS database1, SUM((vendas * valor)) as database1
FROM database2, database1
WHERE database1.id_marca = database2.id_marca
GROUP by marca
ORDER BY SUM((vendas * valor)) DESC;

SELECT nome as database1, valor as database1, sum(vendas) as database1 
FROM database1
GROUP by nome
ORDER BY SUM(vendas) DESC;
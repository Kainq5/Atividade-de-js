-- ============================================================
--  BANCO DE DADOS: Produtos
--  Criação da tabela e inserção dos dados
-- ============================================================

CREATE TABLE produtos (
    id              INT PRIMARY KEY,
    nome_produto    VARCHAR(100)    NOT NULL,
    categoria       VARCHAR(50)     NOT NULL,
    preco           DECIMAL(10, 2)  NOT NULL,
    estoque         INT             NOT NULL,
    validade        DATE
);

INSERT INTO produtos (id, nome_produto, categoria, preco, estoque, validade) VALUES
(1,  'Café Orgânico',      'Bebidas',  25.00,  50,  '2025-12-01'),
(2,  'Sabonete Vegano',    'Higiene',   8.50,  30,  '2026-06-15'),
(3,  'Chocolate 70%',      'Doces',    12.00,  80,  '2025-08-20'),
(4,  'Arroz Integral',     'Grãos',    15.00, 100,  NULL),
(5,  'Café Especial',      'Bebidas',  45.00,  20,  '2025-11-30'),
(6,  'Brigadeiro Gourmet', 'Doces',    35.00,  60,  NULL),
(7,  'Suco de Laranja',    'Bebidas',  18.00,  90,  '2025-07-10'),
(8,  'Shampoo Natural',    'Higiene',  22.00,  40,  '2027-01-01'),
(9,  'Café Premium',       'Bebidas',  55.00,  15,  '2026-03-22'),
(10, 'Pipoca Doce',        'Doces',    10.00, 200,  NULL);


-- ============================================================
--  DESAFIO 1 — O Básico e Filtros Simples
--  Listar nome e preço de produtos que custam mais de R$ 20,00
-- ============================================================

SELECT nome_produto, preco
FROM   produtos
WHERE  preco > 20.00;


-- ============================================================
--  DESAFIO 2 — Operadores Lógicos
--  Bebidas com preço < R$ 30,00  OU  qualquer produto que
--  não seja da categoria 'Doces'
-- ============================================================

SELECT nome_produto, categoria, preco
FROM   produtos
WHERE  (categoria = 'Bebidas' AND preco < 30.00)
    OR  categoria <> 'Doces';


-- ============================================================
--  DESAFIO 3 — Lidando com Ausências
--  Produtos com data de validade em branco (NULL)
-- ============================================================

SELECT nome_produto, categoria, validade
FROM   produtos
WHERE  validade IS NULL;


-- ============================================================
--  DESAFIO 4 — Funções de Agregação
--  Resumo financeiro do estoque
-- ============================================================

SELECT
    COUNT(*)            AS total_itens,
    SUM(preco * estoque) AS valor_total_estoque,
    AVG(preco)           AS media_precos,
    MIN(preco)           AS produto_mais_barato,
    MAX(preco)           AS produto_mais_caro
FROM produtos;


-- ============================================================
--  DESAFIO 5 — Buscas Flexíveis e Conjuntos
--  Produtos que começam com "Café",  OU  que sejam da
--  categoria 'Higiene' ou 'Doces',  E  preço entre R$10-R$50
-- ============================================================

SELECT nome_produto, categoria, preco
FROM   produtos
WHERE  (
           nome_produto LIKE 'Café%'
        OR categoria IN ('Higiene', 'Doces')
       )
  AND  preco BETWEEN 10.00 AND 50.00;


-- ============================================================
--  DESAFIO 6 — Organização e Limitação
--  Os 3 produtos mais caros, do maior para o menor
-- ============================================================

SELECT   nome_produto, preco
FROM     produtos
ORDER BY preco DESC
LIMIT    3;


select * from produtos where preco > 20.00;
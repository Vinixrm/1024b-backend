import express from 'express'
import MysqlErrorHandle from './mysql_error_handle.js'
import connection from './mysql_connection.js'

const app = express()
app.use(express.json())

<<<<<<< HEAD

//1......
//Crie uma rota '\cliente_data_pedido' que retorne os clientes e a data que os mesmos fizeram 
// o pedido. Para realizar isso, utilize o comando inner join para juntar as tabelas. 
// Utilize o banco de dados chamado  dbteremercado
// 1️⃣ /cliente_data_pedido
app.get('/cliente_data_pedido', async (req, res) => {
  try {
    const sql = `
      SELECT c.nome, p.datapedido 
      FROM clientes c
      INNER JOIN pedidos p 
      ON c.idclientes = p.clientes_idclientes
    `;

    const [result] = await connection.execute(sql);
    res.json(result);
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res);
    mysqlErrorHandle.validar();
  }
});

//SELECT nome,datapedido FROM clientes c 
//                      INNER JOIN pedidos p ON c.idclientes=p.clientes_idclientes

//2 Crie uma rota chamada '\pedidos_2026' que retorne 
// idclientes, nome, cidade, idade,idpedidos,datapedido dos pedidos feitos no ano
// de 2026.
// 2️⃣ /pedidos_2026
app.get('/pedidos_2026', async (req, res) => {
  try {
    const sql = `
      SELECT c.idclientes, c.nome, c.cidade, c.idade,
             p.idpedidos, p.datapedido
      FROM clientes c
      INNER JOIN pedidos p 
      ON c.idclientes = p.clientes_idclientes
      WHERE YEAR(p.datapedido) = 2026
    `;

    const [result] = await connection.execute(sql);
    res.json(result);
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res);
    mysqlErrorHandle.validar();
  }
});


//3.Crie uma rota chamada '\quantidade_pedidos' que retorne 
// um json no formato '{quantidade_pedidos:100}' com a quantidade de pedidos cadastrados
// na tabela pedidos. USE O COMANDO COUNT(*) para contar as quantidades.
app.get('/quantidade_pedidos', async (req, res) => {
  try {
    const sql = `SELECT COUNT(*) AS quantidade_pedidos FROM pedidos`;

    const [result] = await connection.execute(sql) as any[];
    res.json({
      quantidade_pedidos: result[0].quantidade_pedidos
    });
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res);
    mysqlErrorHandle.validar();
  }
});


//4 Crie uma rota chamada '\quantidade_pedidos_clientes' que retorne
// um json no formato '[{nome:"tere",quantidade_pedidos:1000}]' que retorne 
// todos os clientes e a quantidade de pedidos que cada cliente fez


app.get('/quantidade_pedidos_clientes', async (req, res) => { 
    try{
  const sql = `
    SELECT c.nome, COUNT(p.idpedidos) AS quantidade_pedidos
    FROM clientes c
    LEFT JOIN pedidos p 
    ON c.idclientes = p.clientes_idclientes
    GROUP BY c.idclientes, c.nome
  `;


    const [result] = await connection.execute(sql);
    res.json(result);
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res);
    mysqlErrorHandle.validar();
  }
});



// app.get("/pessoas", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM pessoa`)
//         console.log(resultado)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })//listar
// app.post("/pessoas", async (req, res) => {
//     try {
//         const { id, nome } = req.body
//         if (!id || !nome)
//             return res.status(500).json({ mensagem: "Erro: Os dados de id ou nome estão incorretos!" })
//         const [resultado, campos] =
//             await connection.execute(`insert into pessoa values (?,?)`, [id, nome])
//         console.log(resultado)
//         res.status(201).json({ mensagem: "Sucesso" })
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })//Inserir
// app.post("/cadastro_produto", async (req, res) => {
//     try {
//         const { id, nome, categoria, preco, data_criacao, data_modificacao } = req.body
//         if (!id || !nome || !categoria || !preco || !data_criacao || !data_modificacao)
//             return res.status(500).json({ mensagem: "Erro: Os dados de id,nome,categoria,preco,data_criacao,data_modificacao estão incorretos!" })
//         const [resultado, campos] =
//             await connection.execute(`insert into produto values (?,?,?,?,?,?)`, [id, nome, categoria, preco, data_criacao, data_modificacao])
//         console.log(resultado)
//         res.status(201).json({ mensagem: "Sucesso" })
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })
// app.get("/listar_produtos", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM produto`)
//         console.log(resultado)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })

// app.get("/listar_produtos_informatica", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM produto WHERE categoria='informática'`)
//         console.log(resultado)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })

// app.get("/listar_produtos_caros", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM produto WHERE preco>100`)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })
=======

//Criar o servidor
app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})

//resposta da questão 1 - Esta rota trás os dados e campos de toda tabela pessoas, 

// resposta da questão 2 - Typescript é um (superset, acho que é assim o termo) do javascript,
//  onde segue a mesma lógica, porém adicionando, como o próprio nome sugere, tipos. O javascript 
// é dinâmico quanto a isso, no typescript não é obrigatório adicionar a tipagem, mas ele é feito para isso.
// ele facilita achar erros de tipagem, que podem ser um problema futuro. O código typescript é para área de desenvolvimento
// pois quando o código é passado pelo navegador ele é "transformado" em código javascpit.


//Questão 3 - Responsável pelas requisições, ele faz o caminho para as rotas e retorna alguma coisa. 
//se ele não for adicionado voce não consegue execultar as rotas e também não tem um retorno sobre elas.

app.post("/cadastro_pizza", async (req, res) => {
    try {
        const { id_pizza, nome_pizza, tamanho_pizza, preco_pizza, data_criacao_pizza,  } = req.body
        if (!id_pizza || !nome_pizza || !tamanho_pizza || !preco_pizza || !data_criacao_pizza || !){
            return res.status(500).json({ mensagem: "Erro: Os dados de id_pizza,nome_pizza,tamanho_pizza, preco_pizza,data_criacao_pizza, estão incorretos!" })
        const [resultado, campos] =
            await connection.execute(`insert into pizzaria.pizza values (?,?,?,?,?)`, [id_pizza, nome_pizza, tamanho_pizza, preco_pizza, data_criacao_pizza ])
        console.log(resultado)
        res.status(201).json({ mensagem: "Sucesso" })
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }

    //questão 5
app.get("/listar_pizzas", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM pizza`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})


app.get("/listar_pizzas_grandes", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM pizza WHERE tamanho==GG`)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})
>>>>>>> 6b8d6b295608687abcf059b12851a7752a9841c8
//Criar o servidor
app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})

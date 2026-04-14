import express from 'express'
import MysqlErrorHandle from './mysql_error_handle.js'
import connection from './mysql_connection.js'

const app = express()
app.use(express.json())


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
//Criar o servidor
app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})

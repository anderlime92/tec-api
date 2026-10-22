// importando o express (instalando via terminal)
import express from 'express';
import { ler, inserir, lerUm, atualizar, excluir } from './src/aluno.js';

const app = express();
const porta = 3000;

// habilitando o express para trabalhar com o formato JSON
app.use(express.json());

// habilitando o express para trabalhar com o formato ULR Encoded (formulário)
app.use(express.urlencoded({extended : true}) );

/* ROTAS */
// Configurando rota para o início da aplicação
app.get('/', function(req, res) {
    res.send('API de alunos com nodeJS, express e MySQL');
});

app.get('/sobre', (req, res) => {
    res.send('SObrE');
});

// ROTA para visualisar TODOS os alunos
app.get('/alunos', (req, res) => {
    // res.send(`Dados de todos os alunos`);
    ler(res);
});

//ROTA/Endpoint para visualizar UM aluno
app.get('/alunos/:id', (req, res) => {
    // res.send('Dados de um aluno qualquer');

    // requisição do parâmetro ID
    const id = parseInt(req.params.id);
    lerUm(id, res);
});

// Endpoint para INSERIR UM aluno no banco de dados
app.post('/alunos', (req, res) => {
    // res.send('Cadastrando um aluno');

    // capturando os dados a partir do corpo da requisição (req)
    const novoAluno = req.body;
    inserir(novoAluno, res);
});

// Endpoint para ATUALIZAR TODOS OS DADOS de UM aluno
app.put('/alunos/:id', (req, res) => {
    res.send('Atualizando todos os dados de um aluno');
});

// Endpoint para ATUALIZAR ALGUNS DADOS de UM aluno
app.patch('/alunos/:id', (req, res) => {
    // res.send('Atualizando ALGUNS dados de um aluno');
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);
});

// Endpoint para DELETAR UM aluno
app.delete('/alunos/:id', (req, res) => {
    // res.send('Deletando um aluno');
    const id = parseInt(req.params.id);
    excluir(id, res);
});

/* SERVIDOR */
app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
});
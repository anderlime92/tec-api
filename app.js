// importando o express (instalando via terminal)
import express from 'express';
const app = express();
const porta = 3000;

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
    res.send(`Dados de todos os alunos`);
});

//ROTA/Endpoint para visualizar UM aluno
app.get('/alunos/:id', (req, res) => {
    res.send('Dados de um aluno qualquer');
});

// Endpoint para INSERIR UM aluno no banco de dados
app.post('/alunos', (req, res) => {
    res.send('Cadastrando um aluno');
});

// Endpoint para ATUALIZAR TODOS OS DADOS de UM aluno
app.put('/alunos/:id', (req, res) => {
    res.send('Atualizando todos os dados de um aluno');
});

// Endpoint para ATUALIZAR ALGUNS DADOS de UM aluno
app.patch('/alunos/:id', (req, res) => {
    res.send('Atualizando ALGUNS dados de um aluno');
});

// Endpoint para DELETAR UM aluno
app.delete('/alunos/:id', (req, res) => {
    res.send('Deletando um aluno');
});

/* SERVIDOR */
app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
});
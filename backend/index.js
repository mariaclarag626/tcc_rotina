const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tcc_rotina'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

// Rota de teste
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Rota para cadastro de usuário (exemplo simples)
app.post('/cadastrar', (req, res) => {
  const { nome, email, senha, tipo_usuario } = req.body;

  const query = 'INSERT INTO usuarios (nome, email, senha, tipo_usuario) VALUES (?, ?, ?, ?)';
  connection.query(query, [nome, email, senha, tipo_usuario], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      res.status(500).send('Erro no cadastro');
    } else {
      res.send('Usuário cadastrado com sucesso!');
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // padrão do XAMPP
  database: 'nome_do_banco' // substitua pelo nome real do seu banco
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

module.exports = connection;

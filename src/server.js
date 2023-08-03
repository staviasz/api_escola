import app from './app';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('escola', 'root', process.env.DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: 'mariadb',
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem sucedida!');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
}

testConnection();

const port = process.env.PORT_APP;
app.listen(port, () => {
  console.log(port);
});

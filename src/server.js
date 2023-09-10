import app from './app';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,

  {
    host: process.env.PGHOST,
    dialect: 'postgres',
    port: process.env.PGPORT,
  },
);

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

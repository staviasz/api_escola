"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('escola', 'root', '@Erick888', {
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
_app2.default.listen(port, () => {
  console.log(port);
});

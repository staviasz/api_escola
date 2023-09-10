require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createAt: 'created_at',
    updateAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};

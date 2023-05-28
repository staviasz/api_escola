module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('alunos', [
      {
        nome: 'erick 1',
        sobrenome: 'staviasz',
        email: 'erick1@teste.com',
        idade: '27',
        peso: 83.9,
        altura: 1.65,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'erick 2',
        sobrenome: 'staviasz',
        email: 'erick2@teste.com',
        idade: '27',
        peso: 83.9,
        altura: 1.65,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'erick 3',
        sobrenome: 'staviasz',
        email: 'erick3@teste.com',
        idade: '27',
        peso: 83.9,
        altura: 1.65,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: () => {},
};

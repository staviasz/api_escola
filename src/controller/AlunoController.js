import Aluno from '../models/AlunoModel';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({ attributes: ['id', 'nome', 'email'] });
    res.json(alunos);
  }
}

export default new AlunoController();

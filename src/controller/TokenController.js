import jwt from 'jsonwebtoken';

import User from '../models/UserModel';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({ error: ['Credenciais inválidas'] });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: ['Usuário não existe'] });
    }

    if (!(await user.passowordIsValid(password))) {
      return res.status(401).json({ error: ['Senha inválida'] });
    }

    const { id, nome } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      token,
      user: {
        id, nome, email, password,
      },
    });
  }
}

export default new TokenController();

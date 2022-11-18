const { Users } = require('../models');
const bcrypt = require('bcrypt');

class AuthServices {
  static async login(credentials) {
    try {
      const { email, password } = credentials;
      const result = await Users.findOne({
        where: { email },
      });
      if (resutl) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid;
      };
    } catch (error) {

    }
  }
};

module.exports = AuthServices;
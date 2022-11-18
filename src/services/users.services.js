const { Users } = require('../models');

class UserServices {
  static async create(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = {
  UserServices,
};
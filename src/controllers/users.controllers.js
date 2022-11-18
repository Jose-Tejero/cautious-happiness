const { UserServices } = require('../services');

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Faltan datos',
    });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo salió mal',
    });
  }
};

module.exports = {
  userRegister,
  getAllUsers,
};
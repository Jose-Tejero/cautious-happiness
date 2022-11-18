const userLogin = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await AuthServices.login(credentials);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Email o contraseña inválida',
    });
  }
};

module.exports = {userLogin};
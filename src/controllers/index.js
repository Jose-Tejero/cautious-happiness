const { userRegister, getAllUsers } = require('./users.controllers');
const { userLogin } = require('./auth.controllers');
const { getUserConversations } = require('./conversations.controllers');

module.exports = {
  userRegister,
  userLogin,
  getAllUsers,
  getUserConversations,
};
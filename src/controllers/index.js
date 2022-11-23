const { userRegister, getAllUsers } = require('./users.controllers');
const { userLogin } = require('./auth.controllers');
const { getUserConversations, createMessageInConversation, createConversation } = require('./conversations.controllers');

module.exports = {
  userRegister,
  userLogin,
  getAllUsers,
  getUserConversations,
  createMessageInConversation,
  createConversation,
};
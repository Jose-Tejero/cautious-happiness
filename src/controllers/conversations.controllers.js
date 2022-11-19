const { ConversationsServices } = require('../services');

const getUserConversations = async (req, res, next) => {
  try {
    const { id, conversation_id } = req.params;
    const conversations = await ConversationsServices.getByUser(id, conversation_id);
    res.json(conversations);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: '',
    })
  }
};

module.exports = {
  getUserConversations,
};
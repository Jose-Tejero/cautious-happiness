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

const createMessageInConversation = async (req, res, next) => {
  try {
    const data = req.body;
    const { conversationId } = req.params;
    const result = await ConversationsServices.createMessage({ ...data, conversationId });
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: '',
    })
  }
};

const createConversation = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await ConversationsServices.create(data);
    res.json(result);
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
  createMessageInConversation,
  createConversation,
};
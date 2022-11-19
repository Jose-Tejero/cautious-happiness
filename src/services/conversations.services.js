const { Conversations, Users, Messages, Participants } = require('../models');

class ConversationsServices {
  static async getByUser(id, conversation_id) {
    try {
      // const conversations = await Users.findAll({
      // where: { id: id },
      // attributes: ['id'],
      // include: {
      //   model: Conversations,
      //   where: { id: conversation_id },
      //   attributes: ['id', 'title', 'imageUrl'],
      //   include: {
      //     model: Messages,
      //     as: 'messages',
      //     attributes: ['id', 'senderId', 'message'],
      //   },
      // },
      // });
      const conversations = await Users.findAll({
        where: { id: id },
        attributes: ['id', 'firstname', 'lastname', 'profileImage', 'phone'],
        include: {
          model: Participants,
          attributes: ['userId', 'conversationId'],
          include: {
            model: Conversations,
            where: { id: conversation_id },
            attributes: ['id', 'title', 'imageUrl'],
            include: [{
              model: Participants,
              attributes: ['userId'],
              include: {
                model: Users,
                attributes: ['firstname', 'lastname'],
              },
            }, {
              model: Messages,
              as: 'messages',
              attributes: ['senderId', 'message'],
            },]
          },
        },
      });
      return conversations;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = {
  ConversationsServices
};
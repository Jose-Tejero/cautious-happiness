const { Conversations, Users, Messages, Participants } = require('../models');

class ConversationsServices {
  static async getByUser(id, conversation_id) {
    try {
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

  static async createMessage(data) {
    try {
      const result = await Messages.create(data)
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async create(data) {
    try {
      const { createdBy, title, participants } = data;
      const conversation = await Conversations.create({ title, createdBy });
      const conversationId = conversation.id;
      const conversationParticipants = participants.map((userId) => { return { conversationId, userId } });
      conversationParticipants.forEach(async participant => await Participants.create(participant));
    } catch (error) {
      throw error;
    }
  };
};

module.exports = {
  ConversationsServices
};
const {
  Users,
  Conversations,
  Messages,
  Participants
} = require('./index');

const initModels = () => {

  // Users.belongsToMany(Conversations, { through: Participants });
  // Conversations.belongsToMany(Users, { through: Participants });
  Users.hasMany(Participants);
  Participants.belongsTo(Users);
  Conversations.hasMany(Participants);
  Participants.belongsTo(Conversations);

  Messages.belongsTo(Users, { as: 'sender', foreignKey: 'sender_id' });
  Users.hasMany(Messages, { as: 'messages', foreignKey: 'sender_id' });

  Messages.belongsTo(Conversations, { as: 'chat', foreignKey: 'conversation_id' });
  Conversations.hasMany(Messages, { as: 'messages', foreignKey: 'conversation_id' });

  Conversations.belongsTo(Users, { as: 'owner', foreignKey: 'created_by' });
  Users.hasMany(Conversations, { as: 'chats', foreignKey: 'created_by' });
};

module.exports = initModels;
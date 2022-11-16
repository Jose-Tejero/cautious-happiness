const db = require('../utils/database');
const { Users, Participants, Messages, Conversations } = require('../models');
const initModels = require('../models/initModels');

initModels();

const users = [
  {
    firstname: "María",
    lastname: "Godoy",
    email: "maria@gmail.com",
    password: "1234",
    phone: "0000000000",
  },
  {
    firstname: "Germán ",
    lastname: "Silva",
    email: "ger@hotmail.com",
    password: "123456",
    phone: "5599887744",
  },
  {
    firstname: "Jose",
    lastname: "Tejero",
    email: "jose@email.com",
    password: "1234",
    phone: "9999999999",
  },
];

const conversations = [
  { title: 'Fundamentos', createdBy: 1, },
  { title: 'NodeJS', type: 'group', createdBy: 2, },
  { title: 'Data science', createdBy: 3, },
];

const participants = [
  { conversationId: 1, userId: 1, },
  { conversationId: 1, userId: 2, },
  { conversationId: 2, userId: 1, },
  { conversationId: 2, userId: 2, },
  { conversationId: 2, userId: 3, },
  { conversationId: 3, userId: 2, },
  { conversationId: 3, userId: 3, },
];

const messages = [
  { senderId: 1, conversationId: 1, message: 'Hola', },
  { senderId: 2, conversationId: 1, message: 'Quién habla?', },
  { senderId: 1, conversationId: 1, message: 'Don diabla', },
  { senderId: 1, conversationId: 2, message: 'Salimos o qué', },
  { senderId: 2, conversationId: 2, message: 'No puedo, ando estudiando', },
  { senderId: 3, conversationId: 2, message: 'Ah, ya estudias?', },
  { senderId: 2, conversationId: 3, message: 'Ya estoy aquí', },
  { senderId: 3, conversationId: 3, message: 'Voy bajando', },
];

db.sync({ force: true })
  .then(() => {
    console.log('Sincronizado');
    users.forEach(async (user) => await Users.create(user));
    setTimeout(() => {
      conversations.forEach(async (conversation) => await Conversations.create(conversation));
    }, 100);
    setTimeout(() => {
      participants.forEach(async (participant) => await Participants.create(participant));
    }, 200);
    setTimeout(() => {
      messages.forEach(async (message) => await Messages.create(message));
    }, 300);
  });
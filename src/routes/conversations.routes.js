const { Router } = require('express');
const { getUserConversations, createMessageInConversation, createConversation } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.get('/conversations/:id/:conversation_id', authenticate, getUserConversations);

router.post('/conversations/:conversationId/message', authenticate, createMessageInConversation);

router.post('/conversations', authenticate, createConversation);

module.exports = router;
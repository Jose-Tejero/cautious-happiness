const { Router } = require('express');
const { getUserConversations } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.get('/conversations/:id', authenticate, getUserConversations);

module.exports = router;
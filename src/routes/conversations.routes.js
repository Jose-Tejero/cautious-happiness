const { Router } = require('express');
const { getUserConversations, createMessageInConversation, createConversation } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

/**
 * @openapi
 * /api/v1/conversations/{id}/{conversation_id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     sumary: Get all conversations from user
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user ID
 *       - in: path
 *         name: conversation_id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: conversation ID
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 */

const router = Router();

router.get('/conversations/:id/:conversation_id', authenticate, getUserConversations);

router.post('/conversations/:conversationId/message', authenticate, createMessageInConversation);

router.post('/conversations', authenticate, createConversation);

module.exports = router;
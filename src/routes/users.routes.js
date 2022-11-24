const { Router } = require('express');
const { userRegister, getAllUsers } = require('../controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Register a new user into app.
 *     tags:
 *       - Users
 *     requestBody:
 *       description: To register a new user you need firstname, lastname, email, phone and email.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/register"
 *     responses:
 *       201:
 *         description: Created
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
 *                   items:
 *                     $ref: "#/components/schemas/users"
 */


router.post('/users', userRegister);
router.get('/users', authenticate, getAllUsers);

module.exports = router;
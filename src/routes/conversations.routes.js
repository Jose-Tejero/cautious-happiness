const { Router } = require('express');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router.get('/conversations/:id', authenticate, () => { });

module.exports = router;
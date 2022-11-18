const { Router } = require('express');

const router = Router();

router.post('/auth/login', userLogin);

module.exports = router;
const router = require('express').Router();
const { generateAccessToken, createCandidate }  = require('../controllers/oauth.controller');

router.post('/token', generateAccessToken, createCandidate);

module.exports = router;